import { Router } from "express";
import { forgetPasswordController, loginController, logoutController, registerUserController, resetPassword, updateUserDetails, uploadAvatar, verifyEmailController, verifyForgotPasswordOtp } from "../controllers/user.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
import upload from "../middleware/multer.js";
const router = Router();

router.post('/register', registerUserController)
router.post('/verify-email', verifyEmailController)
router.post('/login', loginController);
router.get('/logout', authMiddleware,  logoutController)
router.put('/upload-avatar', authMiddleware, upload.single('avatar') ,uploadAvatar)
router.put('/update-user', authMiddleware, updateUserDetails)
router.put('/forgot-password', forgetPasswordController)
router.put('/verify-forgot-password', verifyForgotPasswordOtp)
router.put('/reset-password', resetPassword)

export default router;