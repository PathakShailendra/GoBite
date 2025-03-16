import { Router } from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import { AddCategoryController, getCategoryController, updateCategoryController } from "../controllers/category.controller.js";
const router = Router();

router.post("/add-category", authMiddleware, AddCategoryController);
router.get('/get', authMiddleware, getCategoryController);
router.put('/update', authMiddleware, updateCategoryController)


export default router;