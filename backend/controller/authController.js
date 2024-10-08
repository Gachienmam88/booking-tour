import User from '../models/User.js'

import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

//user registration
export const register =async(req,res)=>{
    try {

        //hashing password
        const salt=bcrypt.genSaltSync(10)
        const hash=bcrypt.hashSync(req.body.password,salt)
        const newUser=new User({
            username:req.body.username,
            email:req.body.email,
            password:hash,
            photo:req.body.photo
        })
        await newUser.save()
        res.status(200).json({success:true,message:'Successfully created !'})
    } catch (error) {
        res.status(500).json({success:false,message:`${error}`})
    }
}
export const login =async(req,res)=>{
    const email=req.body.email;
    try {
        const user=await User.findOne({email})
        if(!user){
            return res.status(404).json({
                status:false,
                message:' User Not found !',

            })
        }
        const checkCorrectPassword=await bcrypt.compare(req.body.password,user.password)
        if(!checkCorrectPassword){
            return res.status(401).json({success:false,message:'Incorrect email or password !'})
        }
        const {password,role,...rest}=user._doc
        const token=jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET_KEY,{expiresIn:'15d'})
        
        //set token in the browser cookies and send the response to the client
        res.cookie('accessToken',token,{
            httpOnly:true,
            expires:new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
            sameSite: 'Lax',
            secure: false
        }).status(200).json({
            token,
            success:true,
            message:'Successfully login',
            data:{...rest},
            role
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:'Failed to login !'
        })
    }
}
export async function logout(request,response){
    try {
        const cookieOptions = {
            http : true,
            secure : true,
            sameSite : 'None'
        }
        
        return response.cookie('accessToken','',cookieOptions).status(200).json({
            message : "session out",
            success : true
    })
    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true
        })
    }
}