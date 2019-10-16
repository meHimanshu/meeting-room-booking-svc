import { Router } from "express";
import userControllerInstance from "./UserController";
import controllerAdapter from "../../middlewares/controllerAdapter";
import AuthManager from "../../middlewares/AuthManager";
const authManager = AuthManager.getInstance();
const router = Router();

router.post("/", controllerAdapter(userControllerInstance, "create"));
router.post("/login", controllerAdapter(userControllerInstance, "login"));
router.get("/me", authManager.auth, controllerAdapter(userControllerInstance, "getMeDetail"));

export default router;
