import { Router } from "express";
import { loginController, logoutController, registerUserController, verifyEmailController } from "../controllers/user.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
const router = Router();

router.post('/register', registerUserController)
router.post('/verify-email', verifyEmailController)
router.post('/login', loginController);
router.get('/logout', authMiddleware,  logoutController)

export default router;