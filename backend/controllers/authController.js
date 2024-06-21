import User from "../models/user.js";
import { hashPassword,comparePassword } from "../utils/bcryptUtils.js";
import { isValidEmail, isStrongPassword } from "../utils/validators.js";
import  generateToken  from "../utils/generateToken.js";
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

/*========================================login controller====================================================*/

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email) {
    return res.status(400).json({ message: "Please enter email" });
  }
  if (!password) {
    return res.status(400).json({ message: "Please enter password" });
  }

  try {
      // Find the user by email
      const user = await User.findOne({ email :email});
      if (!user) {
        console.log("User not found")
          return res.status(401).json({ message: "User not found. signUp first", });
      }

      // Check if password matches
      const isMatch = comparePassword(password,user.password);
      if (!isMatch) {
          return res.status(401).json({ message: 'Invalid password' });
      }

      // Generate JWT
      const token = generateToken(user);

      // Respond with token
      console.log("User :",user);
      return res
      .status(200)
      .json({ token });

  } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ message: 'Server error' });
  }
};
