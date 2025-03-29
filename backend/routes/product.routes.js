import { Router } from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import { createProductController } from "../controllers/product.controller.js";

const router = Router();

router.post("/create", authMiddleware, createProductController);



export default router;