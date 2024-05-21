import { Router } from "express";
import { getUser, getUserById } from "../handler/user";

const router = Router(); 

router.get("/getall/array",getUser);
router.get('/:id',getUserById);

export default router;