import React, { Suspense } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cyber from "./3d/Cyber"


const FineTune = () => {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Cyber />
          </Stage>
          <OrbitControls enableZoom={false} autoRotate maxDistance={3} />
        </Suspense>
      </Canvas>

    </>
  );
};

export default FineTune;
