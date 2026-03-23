import mongoose from "mongoose";
import 'dotenv/config'

const connectDB = async()=>{
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/auth`)
        console.log("mongodb connected ")
    } catch (error) {
        console.log("mongoose no connect")
    }
}

export default connectDB;