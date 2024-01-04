import express from "express";
import authController from "../controllers/auth";
import passwordRoutes from "./password";

const router = express.Router();

router.post("/login", authController.login);
router.post("/signup", authController.signup);
router.use("/password", passwordRoutes);

export default router;
