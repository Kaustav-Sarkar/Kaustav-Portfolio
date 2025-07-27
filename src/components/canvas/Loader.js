import React from "react";
import "./Loader.css";

const CanvasLoader = () => {
  return (
    <div className="canvas-loader-container">
      <div className="canvas-loader">
        <div className="spinner"></div>
        <p className="loading-text">Loading 3D Earth...</p>
      </div>
    </div>
  );
};

export default CanvasLoader;
