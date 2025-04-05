import { Router } from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import { addToCartItemController, getCartItemController } from "../controllers/cart.controller.js";
const router = Router();

router.post("/create", authMiddleware, addToCartItemController);
router.get("/get", authMiddleware, getCartItemController);

export default router;
