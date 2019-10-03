import { Router } from "express";
import userRouter from "./controllers/user/route";
const router = Router();
router.get("/health-check", (req, res) => {
  res.status(200).send("I am OK");
});

router.use("/users", userRouter);

export default router;
