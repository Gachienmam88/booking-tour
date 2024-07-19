import express from "express";
import { createUser, deleteUser, getAllUsers, getSingleUser, updateUser } from "../controller/userController.js";
import { verifyUser } from "../utils/verifyToken.js";
const router=express.Router()

// router.post('/',createUser)
router.put('/:id',verifyUser,updateUser)
router.get('/:id',verifyUser,getSingleUser)
router.get('/',verifyUser,getAllUsers)
router.delete('/:id',verifyUser,deleteUser)

export default router