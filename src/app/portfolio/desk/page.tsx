"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { ComputerCanvas, StarsCanvas, CanvasLoader } from "@/components/vs-code/canvas";
import { Bird } from "@/components/vs-code/models";

const Desk = () => {
  return (
    <section className="w-[calc(100%-200px) h-full relative">
      <Canvas
        className="w-[calc(100%-200px) h-full md:w-full"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight position={[0, 50, 10]} angle={0.15} penumbra={1} intensity={2} />
          <hemisphereLight color="#b1e1ff" groundColor="#000000" intensity={1} />
          <Bird />
        </Suspense>
      </Canvas>
      <div className="absolute inset-0 top-[90px] max-w-full mx-auto flex flex-row items-start gap-5">
        <StarsCanvas />
        <ComputerCanvas />
      </div>
    </section>
  );
};

export default Desk;
