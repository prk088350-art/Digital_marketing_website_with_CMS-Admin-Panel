
import express from "express";
import Portfolio from "../models/Portfolio.js";

const router = express.Router();

/* ======================
   CREATE IMAGE
   ====================== */
router.post("/upload", async (req, res) => {
  try {
    const { img, nam, about } = req.body;

    if (!img || !nam || !about) {
      return res.status(400).json({ msg: "Name and image required" });
    }

    const newImage = new Portfolio({ img, nam ,about});
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
    const images = await Portfolio.find().sort({ createdAt: -1 });

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

    const updatedImage = await Portfolio.findByIdAndUpdate(
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

    const deletedImage = await Portfolio.findByIdAndDelete(id);

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
