import { Router } from "express";
import { getProduct } from "../handler/product";

const router = Router();

router.get('/getall/product', getProduct);

export default router;