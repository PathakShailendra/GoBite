import { Router } from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import { createProductController, getProductByCAtegory, getProductByCategoryAndSubCategory, getProductController, getProductDetails, updateProductDetails } from "../controllers/product.controller.js";
import { admin } from "../middleware/Admin.js";

const router = Router();

router.post("/create", authMiddleware,admin, createProductController);
router.post('/get', getProductController);
router.post('/get-product-by-category', getProductByCAtegory)
router.post('/get-product-by-category-and-subcategory', getProductByCategoryAndSubCategory)
router.post('/get-product-details', getProductDetails)
router.put('/update-product-details', authMiddleware, admin , updateProductDetails)



export default router;