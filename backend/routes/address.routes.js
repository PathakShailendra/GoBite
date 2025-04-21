import { Router } from 'express'
import authMiddleware from "../middleware/auth.middleware.js";
import { addAddressController, getAddressController } from '../controllers/address.controller.js';

const router = Router()

router.post('/create',authMiddleware,addAddressController)
router.get("/get",authMiddleware,getAddressController)



export default router
