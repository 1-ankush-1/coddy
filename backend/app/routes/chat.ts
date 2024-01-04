import express from "express";
import chatController from "../controllers/chat";

const router = express.Router();

router.post("/", chatController.chat);

export default router;
