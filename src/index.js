import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import "./global.js";
import { useGLTF } from "@react-three/drei";

useGLTF.preload("/planet/scene.gltf");

const root = createRoot(document.getElementById("root"));
root.render(<App />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
