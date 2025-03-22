import {Router} from 'express';
import { AddSubCategoryController, getSubCategoryController } from '../controllers/subCategory.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';
const router = Router();

router.post('/create', authMiddleware, AddSubCategoryController);
router.post('/get',  getSubCategoryController)



export default router;