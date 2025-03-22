import {Router} from 'express';
import { AddSubCategoryController } from '../controllers/subCategory.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';
const router = Router();

router.post('/create', authMiddleware, AddSubCategoryController);




export default router;