import { Router } from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import { createProductController, getProductController } from "../controllers/product.controller.js";

const router = Router();

router.post("/create", authMiddleware, createProductController);
router.post('/get', authMiddleware, getProductController)



export default router;