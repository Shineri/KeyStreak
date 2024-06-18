// utils/generateToken.js
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();


 //Generates a JWT token for a user.
 
const generateToken = (user) => {
    const SECRET_KEY = process.env.JWT_SECRET ;
    if (!SECRET_KEY) {
        console.log("JWT_SECRET environment variable is not defined");
        return res
        .status(400)
        .json({message:"Server error"});
    }
    const payload = {
        id: user._id,
        email: user.email,
        username:user.username
    };

    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '3h' });
    return token;
};

export default generateToken;



