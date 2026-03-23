import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema({
    img: String,
    nam: String,
    about: String,
   
},
{ timestamps: true });

export default mongoose.model("Portfolio", portfolioSchema);
