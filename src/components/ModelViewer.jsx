import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GltfModel from "./GltfModel";

const ModelViewer = ({ modelPath, scale = 4, position = [0, 0, 0] }) => {
  return (
    <Canvas>
      <ambientLight intensity={5} />
      <spotLight position={[10, 10, 10]} angle={0.8} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Suspense fallback={null}>
        <GltfModel modelPath={modelPath} scale={scale} position={position} />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};

export default ModelViewer;
