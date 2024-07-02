import Router from 'express';
import { getProd, getProdById } from '../controller/product';
const router = Router();

router.get("/getall/product", getProd)
router.get("/get/productByID", getProdById);

export default router;