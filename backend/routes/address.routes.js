import { Router } from 'express'
import authMiddleware from "../middleware/auth.middleware.js";
import { addAddressController } from '../controllers/address.controller.js';

const router = Router()

router.post('/create',authMiddleware,addAddressController)



export default router
