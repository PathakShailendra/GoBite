import { Router } from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import { AddCategoryController } from "../controllers/category.controller.js";
const router = Router();

router.post("/add-category", authMiddleware, AddCategoryController);


export default router;