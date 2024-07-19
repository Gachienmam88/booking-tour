import express from "express";
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from "cookie-parser";
import tourRoute from './routes/tour.js'
import userRoute from './routes/user.js'
import authRoute from './routes/auth.js'
import reviewRoute from './routes/reviews.js'
import bookingRoute from './routes/booking.js'
//data


dotenv.config()
const app = express()
const port=process.env.PORT || 8000
const corOptions={
    origin:true,
    credentials:true
}


//for testing
app.get('/',(req,res)=>{
    res.send('Api is working !')
})

//database connection
mongoose.set('strictQuery', false)
const connect=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL,{
        })
        console.log('MongoDB database connected')
    } catch (error) {
        console.log('MongoDB connect failed !')
    }
}
//middleware
app.use(express.json())
app.use(cors(corOptions))
app.use(cookieParser())
app.use('/api/v1/tours',tourRoute)
app.use('/api/v1/users',userRoute)
app.use('/api/v1/auth',authRoute)
app.use('/api/v1/review',reviewRoute)
app.use('/api/v1/booking',bookingRoute)
app.listen(port,()=>{
    connect()
    console.log(`Server listening on port ${port}`)
})