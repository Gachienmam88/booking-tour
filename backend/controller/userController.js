import User from '../models/User.js'

//create new tour 
export const createUser= async(req,res)=>{
    const newUser=new User(req.body)
    try {
        const savedTour=await newUser.save()
        res.status(200).json({success:true,message:'Successfully created !',data:savedTour})
    } catch (error) {
        res.status(500).json({success:false,message:'Create failed !'})
    }
}
export const updateUser=async (req,res)=>{
    const id=req.params.id
    try {
        const updatedUser=await User.findByIdAndUpdate(id,{
            $set:req.body
        },{new:true})
        res.status(200).json({success:true,message:'Successfully updated !',data:updatedUser})
    } catch (error) {
        res.status(500).json({success:false,message:'Update failed !'})
    }
}
export const deleteUser=async (req,res)=>{
    const id=req.params.id
    try {
        const deletedUser=await User.findByIdAndDelete(id)
        res.status(200).json({success:true,message:'Successfully deleted !'})
    } catch (error) {
        res.status(500).json({success:false,message:'Delete failed !'})
    }
}
export const getSingleUser=async (req,res)=>{
    const id=req.params.id
    try {
        const user=await User.findById(id)
        res.status(200).json({success:true,message:'Successfully deleted !',data:user})
    } catch (error) {
        res.status(404).json({success:false,message:'Not found !'})
    }
}
export const getAllUsers=async (req,res)=>{
    //for pagination
    const page=parseInt(req.query.page)
    try {
        const users=await User.find({}).skip(page*8).limit(8)
        res.status(200).json({success:true,message:'Successfully  !',count:users.length,data:users})
    } catch (error) {
        res.status(404).json({success:false,message:'Not found !'})
    }
}