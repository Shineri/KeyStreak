import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const authMiddleware = (req,res,next) => {
    const token = req.header("Authorization");
    //Check if the token is missing
    if(!token){
        return res
               .status(401)
               .json({message:"Access denied. No token found"})
    }

    try{
    const decoded = jwt.verify(token,process.env.JWT_SECRET);
    req.user=decoded;
    //Proceed to the next middleware function
    next();
    }catch(err){
        return res
        .status(400)
        .json({error:"Invalid token"});
    }
}

