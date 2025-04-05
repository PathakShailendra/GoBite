import { Router } from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import { addToCartItemController } from "../controllers/cart.controller.js";
const router = Router();

router.post("/create", authMiddleware, addToCartItemController);

export default router;
