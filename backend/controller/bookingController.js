import Booking from "../models/Booking.js"
//create new booking 
export const createBooking = async(req,res)=>{
    const newBooking = new Booking(req.body)
    try {
        const savedBooking=await newBooking.save()
        res.status(200).json({
            success:true,
            message:'Successfully created booking !',
            data:savedBooking
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:'Failed to create booking !'
        })
    }
}

//get a single booking 
export const getSingleBooking =async (req,res)=>{
    const id = req.params.id
    try {
        const book =await Booking.findById(id)
        res.status(200).json({
            success:true,
            message:'Successful !',
            data:book
        })
    } catch (error) {
        res.status(404).json({
            success:false,
            message:'Not founded !'
        })
    }
}

//get all booking 
export const getAllBooking =async (req,res)=>{
    
    try {
        const booking =await Booking.find({})
        res.status(200).json({
            success:true,
            message:'Successful !',
            data:booking
        })
    } catch (error) {
        res.status(404).json({
            success:false,
            message:'Not founded !'
        })
    }
}