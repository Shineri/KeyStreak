import express from "express";
import {signUp} from "../controllers/userController.js";
const router = express.Router();

//apis
router.post("/signup",signUp);

 export default router;