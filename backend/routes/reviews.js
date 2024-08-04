import express from 'express'
import { createReview ,getReview } from '../controller/reviewController.js'
import { verifyUser } from '../utils/verifyToken.js'
const router=express.Router()

router.post('/:tourId',verifyUser,createReview)
router.get('/',getReview)
export default router
