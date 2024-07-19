import express from 'express'
import { verifyUser } from '../utils/verifyToken.js'
import { createBooking, getAllBooking, getSingleBooking } from '../controller/bookingController.js'
const router=express.Router()

router.post('/',verifyUser,createBooking)
router.get('/',getAllBooking)
router.get('/:id',getSingleBooking)
export default router