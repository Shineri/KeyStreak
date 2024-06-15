
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


//connect database function
export const connect_database = async () => {
    const dbUri = process.env.DB_URL;

    if (!dbUri) {
        console.error("DATABASE_URL is not defined in the environment variables.");
        process.exit(1); // Exit the process with failure
    }
    
    try {
        await mongoose.connect(dbUri);
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1); // Exit the process with failure
    }
};



