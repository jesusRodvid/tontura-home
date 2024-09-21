import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model({ url }) {
  const gltf = useGLTF(url);
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.00;
    }
  });

  return <primitive object={gltf.scene} ref={meshRef} />;
}

function Scene({ modelUrl }) {
  return (
    <Canvas>
      <ambientLight intensity={1.5} />
      <pointLight position={[15, 15, 15]} />
      <Model url={modelUrl} />
      <OrbitControls />
    </Canvas>
  );
}

export default Scene;