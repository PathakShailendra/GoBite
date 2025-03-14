import { Router } from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import { AddCategoryController, getCategoryController } from "../controllers/category.controller.js";
const router = Router();

router.post("/add-category", authMiddleware, AddCategoryController);
router.get('/get', authMiddleware, getCategoryController);


export default router;