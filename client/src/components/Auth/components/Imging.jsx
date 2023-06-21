import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Img from "./3d/Img";
const Imging = () => {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Stage size="10" environment="apartment" intensity={0} >
            <Img />
          </Stage>
          <OrbitControls enableZoom={false} autoRotate maxDistance={1} />
        </Suspense>
      </Canvas>
      
    </>
  );
};

export default Imging;
