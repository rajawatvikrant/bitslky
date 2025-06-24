import React from "react";

const SkewButton = ({ label = "Play Now",  className = "", variant= "default" }) => {
  return (
    <a href="#" className={`skewButton ${className}`}>
      <span className="font-ceviche">{label}</span>
    </a>
  );
};

export default SkewButton;
