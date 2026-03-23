import React from "react";
import "./slide.css";

const Autoslid = () => {
  return (
    <div className="slider">
      <div className="slider-track">
        <span>Email Marketing ✨</span>
        <span>Content Marketing ✨</span>
        <span>Social Media Marketing ✨</span>
        <span>Search Engine Optimization ✨</span>

        {/* Duplicate items for infinite effect */}
        <span>Email Marketing ✨</span>
        <span>Content Marketing ✨</span>
        <span>Social Media Marketing ✨</span>
        <span>Search Engine Optimization ✨</span>
        <span>Email Marketing ✨</span>
        <span>Content Marketing ✨</span>
      </div>
    </div>
  );
};

export default Autoslid;