import Tour from '../models/Tour.js'

//create new tour 
export const createTour= async(req,res)=>{
    const newTour=new Tour(req.body)
    try {
        const savedTour=await newTour.save()
        res.status(200).json({success:true,message:'Successfully created !',data:savedTour})
    } catch (error) {
        res.status(500).json({success:false,message:'Create failed !'})
    }
}
export const updateTour=async (req,res)=>{
    const id=req.params.id
    try {
        const updatedTour=await Tour.findByIdAndUpdate(id,{
            $set:req.body
        },{new:true})
        res.status(200).json({success:true,message:'Successfully updated !',data:updatedTour})
    } catch (error) {
        res.status(500).json({success:false,message:'Update failed !'})
    }
}
export const deleteTour=async (req,res)=>{
    const id=req.params.id
    try {
        const deletedTour=await Tour.findByIdAndDelete(id)
        res.status(200).json({success:true,message:'Successfully deleted !'})
    } catch (error) {
        res.status(500).json({success:false,message:'Delete failed !'})
    }
}
export const getSingleTour=async (req,res)=>{
    const id=req.params.id
    try {
        const tour=await Tour.findById(id).populate('reviews')
        res.status(200).json({success:true,message:'Successfully deleted !',data:tour})
    } catch (error) {
        res.status(404).json({success:false,message:'Not found !'})
    }
}
export const getAllTours=async (req,res)=>{
    //for pagination
    const page=parseInt(req.query.page)
    try {
        const tours=await Tour.find({}).populate('reviews').skip(page*8).limit(8)
        res.status(200).json({success:true,message:'Successfully  !',count:tours.length,data:tours})
    } catch (error) {
        res.status(404).json({success:false,message:'Not found !'})
    }
}
export const getTourBySearch= async (req,res)=>{
    const city=req.query.city.charAt(0).toUpperCase() + req.query.city.slice(1).toLowerCase(); // i do day la viet thuong
    const distance =parseInt(req.query.distance)
    const maxGroupSize=parseInt(req.query.maxGroupSize)
    try {
        const tours=await Tour.find({city:city,distance:{$gte:distance},maxGroupSize:{$gte:maxGroupSize}}).populate('reviews')
        res.status(200).json({success:true,message:'Successfully !',count:tours.length,data:tours})
    } catch (error) {
        res.status(404).json({success:false,message:'Not found !'})
    }
}
export const getFeaturedTours=async (req,res)=>{
    //for pagination
    
    try {
        const tours=await Tour.find({featured:true}).populate('reviews').limit(8)
        res.status(200).json({success:true,message:'Successfully  !',count:tours.length,data:tours})
    } catch (error) {
        res.status(404).json({success:false,message:'Not found !'})
    }
}
//get tour count 
export const getTourCount=async (req,res)=>{
    try {
        const tourCount=await Tour.estimatedDocumentCount()
        res.status(200).json({
            success:true,
            message:'Successfully',
            data:tourCount
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:'failed to fetch !'
        })
    }
}
