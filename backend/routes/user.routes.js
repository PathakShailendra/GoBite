import { Router } from "express";
import { loginController, registerUserController, verifyEmailController } from "../controllers/user.controller.js";
const router = Router();

router.post('/register', registerUserController)
router.post('/verify-email', verifyEmailController)
router.post('/login', loginController);

export default router;