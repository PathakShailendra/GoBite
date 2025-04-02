import { Router } from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import { createProductController, getProductByCAtegory, getProductController } from "../controllers/product.controller.js";

const router = Router();

router.post("/create", authMiddleware, createProductController);
router.post('/get', getProductController);
router.post('/get-product-by-category', getProductByCAtegory)



export default router;