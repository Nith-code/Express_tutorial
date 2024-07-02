import { Router } from "express";
import { createUsers, deleteUserById, getUser, getUserById, getUserDbById, getUserQuery } from "../controller/user";
import { create } from "../services/users";

const router = Router(); 

router.get("/filtered",getUser);
//router.get("/:id",getUserById);
router.get("",getUserQuery);
router.post("/create", createUsers)
router.get("/:id",getUserDbById)
router.delete("/delete/:id",deleteUserById)



export default router;