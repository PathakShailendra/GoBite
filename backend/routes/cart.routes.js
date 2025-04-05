import { Router } from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import { addToCartItemController, getCartItemController, updateCartItemQtyController } from "../controllers/cart.controller.js";
const router = Router();

router.post("/create", authMiddleware, addToCartItemController);
router.get("/get", authMiddleware, getCartItemController);
router.put('/update-qty', authMiddleware, updateCartItemQtyController);

export default router;
