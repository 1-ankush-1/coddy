import express from "express";
import authRoutes from "./auth";
import chatRoutes from "./chat";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/chat", chatRoutes);

router.use((req: express.Request, res: express.Response) => {
  console.log("no routes found");
});

export default router;
