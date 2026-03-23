
import express from "express";
import Image from "../models/Image.js";

const router = express.Router();

/* ======================
   CREATE IMAGE
   ====================== */
router.post("/upload", async (req, res) => {
  try {
    const { n, i, a } = req.body;

    if (!n || !i || !a) {
      return res.status(400).json({ msg: "Name and image required" });
    }

    const newImage = new Image({ n, a ,i});
    await newImage.save();

    res.status(201).json({
      success: true,
      message: "Image create ho gaya",
      data: newImage
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* ======================
   GET ALL IMAGES
   ====================== */
router.get("/images", async (req, res) => {
  try {
    const images = await Image.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: images.length,
      data: images
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* ======================
   UPDATE IMAGE
   ====================== */
router.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const updatedImage = await Image.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!updatedImage) {
      return res.status(404).json({ msg: "Image not found" });
    }

    res.status(200).json({
      success: true,
      message: "Image update ho gaya",
      data: updatedImage
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* ======================
   DELETE IMAGE
   ====================== */
router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedImage = await Image.findByIdAndDelete(id);

    if (!deletedImage) {
      return res.status(404).json({ msg: "Image not found" });
    }

    res.status(200).json({
      success: true,
      message: "Image delete ho gaya"
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
