import User from "../models/user.js";
import { hashPassword } from "../utils/bcryptUtils.js";
import { isValidEmail, isStrongPassword } from "../utils/validators.js";

//signup controller
export const signUp = async (req, res) => {
  const { username, email, password } = req.body;

  //validation
  if (!username) {
    return res.status(400).json({ message: "Please enter username" });
  }
  if (!email) {
    return res.status(400).json({ message: "Please enter valid email" });
  }
  if (!password) {
    return res.status(400).json({ message: "Please enter password" });
  }

  //validate
  if (!isValidEmail(email)) {
    return res.status(400).json({ message: "Please enter a valid email" });
  }
  if (!isStrongPassword(password)) {
    return res
      .status(400)
      .json({ message: "Password does not meet the strength requirements" });
  }
  try {
    // Finding existing user with same email
    const existingUserEmail = await User.findOne({ email: email });
    if (existingUserEmail) {
      console.log("A user with this email already exists");
      return res
        .status(422)
        .json({ error: "A user with this email already exists" });
    }
    // Finding existing user with same username
    const existingUserName = await User.findOne({ username: username });
    if (existingUserName) {
      console.log("A user with this username already exists");
      return res
        .status(422)
        .json({ error: "A user with this username already exists" });
    }

    const hashedPassword = await hashPassword(password);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    // Send a success response
    return res.status(201).json({
      message: "User registered successfully",
      user: {
        id: newUser._id,
        username: username,
        email: email,
        points: newUser.points,
      },
    });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
