import express from "express";
import authController from "../controllers/auth";

const router = express.Router();

router.post("/forget",authController.forget);
router.get("/reset",authController.reset);
router.put("/update",authController.update);

export default router;