import { Router } from "express";
import { loginController, logoutController, registerUserController, uploadAvatar, verifyEmailController } from "../controllers/user.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
import upload from "../middleware/multer.js";
const router = Router();

router.post('/register', registerUserController)
router.post('/verify-email', verifyEmailController)
router.post('/login', loginController);
router.get('/logout', authMiddleware,  logoutController)
router.put('/upload-avatar', authMiddleware, upload.single('avatar') ,uploadAvatar)

export default router;