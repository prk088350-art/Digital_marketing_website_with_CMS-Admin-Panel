import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import imageRoute from "./routes/imageRoute.js";
import portfolioRoutes from "./routes/portfolioRoute.js";
import messageRoute from "./routes/messageRoute.js";

const app = express();

app.use(cors({
  origin: true,
}));


// ✅ Body size limit (Base64 image ke liye)
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

mongoose.connect("mongodb://127.0.0.1:27017/imagedb")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Routes
app.use("/api", imageRoute);
app.use("/api/portfolio", portfolioRoutes );
app.use("/Message" , messageRoute);

app.listen(7000, () => {
  console.log("Server running on port 7000");
});
