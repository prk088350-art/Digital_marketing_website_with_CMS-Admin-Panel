import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  n: String,
  a: String, // base64 string
  i: String
},
{ timestamps: true });

export default mongoose.model("Image", imageSchema);
