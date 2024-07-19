import express from "express";
import { createTour, deleteTour,  getAllTours, getFeaturedTours, getSingleTour, getTourBySearch, getTourCount, updateTour } from "../controller/tourController.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router=express.Router()
//create new tour 
router.post('/',verifyAdmin,createTour)
router.put('/:id',verifyAdmin,updateTour)
router.get('/:id',getSingleTour)
router.get('/',getAllTours)
router.delete('/:id',verifyAdmin,deleteTour)
router.get('/search/getTourBySearch',getTourBySearch)
router.get('/search/getFeaturedTours',getFeaturedTours)
router.get('/search/getCountTours',getTourCount)
export default router