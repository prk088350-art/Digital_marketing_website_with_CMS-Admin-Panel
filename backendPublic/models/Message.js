import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    fname: String,
    phone: String,
    email: String,
    subject: String,
    message: String
});

export default mongoose.model("Message", messageSchema);
