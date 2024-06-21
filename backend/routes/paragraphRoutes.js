import express from "express";
const router = express.Router();

import {getParagraph} from "../controllers/paragraphController.js";
import {authMiddleware} from "../middleware/authMiddleware.js";
// Define route for fetching paragraphs based on query parameters

router.get("/", authMiddleware, getParagraph);

export default router;