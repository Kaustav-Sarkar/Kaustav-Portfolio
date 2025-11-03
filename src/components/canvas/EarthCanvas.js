import React, { Suspense, useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "./Loader";
import ErrorBoundary from "./ErrorBoundary";
import "./EarthCanvas.css";

const Earth = ({ onLoaded }) => {
  const earth = useGLTF("/planet/scene.gltf");

  useEffect(() => {
    if (earth && onLoaded) {
      onLoaded();
    }
  }, [earth, onLoaded]);

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  const [phase, setPhase] = useState("initializing");
  const canvasRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase("loading");
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleCanvasCreated = (state) => {
    console.log("Canvas created successfully", state);
  };

  const handleModelLoaded = () => {
    setTimeout(() => setPhase("ready"), 300);
  };

  const handleError = (error) => {
    console.error("Earth loading error:", error);
    setPhase("error");
  };

  if (phase === "initializing") {
    return (
      <div className="earth-placeholder">
        <div className="gradient-fallback"></div>
        <div className="loading-indicator">Initializing 3D Globe...</div>
      </div>
    );
  }

  if (phase === "error") {
    return (
      <div className="earth-placeholder">
        <div className="gradient-fallback"></div>
        <div className="loading-indicator error">Failed to load 3D Globe</div>
      </div>
    );
  }

  return (
    <ErrorBoundary fallbackText="Unable to render 3D Globe">
      <div className="earth-canvas-container">
        {phase === "loading" && (
          <div className="earth-placeholder-overlay">
            <div className="gradient-fallback"></div>
            <CanvasLoader />
          </div>
        )}

        <Canvas
          ref={canvasRef}
          shadows
          frameloop="demand"
          dpr={[1, 2]}
          gl={{ preserveDrawingBuffer: true }}
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [-4, 3, 6],
          }}
          onCreated={handleCanvasCreated}
          onError={handleError}
          style={{
            opacity: phase === "ready" ? 1 : 0,
            transition: "opacity 0.5s ease",
          }}
        >
          <Suspense fallback={null}>
            <OrbitControls
              autoRotate
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Earth onLoaded={handleModelLoaded} />
            <Preload all />
          </Suspense>
        </Canvas>
      </div>
    </ErrorBoundary>
  );
};

export default EarthCanvas;
