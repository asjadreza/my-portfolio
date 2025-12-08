"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

const StarBackground = (props: any) => {
  const ref: any = useRef(null);
  // const [sphere] = useState(() =>
  //   random.inSphere(new Float32Array(5000), { radius: 1.2 })
  // );

  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(1500 * 2), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#363646"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas: React.FC<{}> = () => (
  <div className="fixed inset-0 pointer-events-none z-0">
    <Canvas
      camera={{ position: [0, 0, 1] }}
      className="pointer-events-auto"
      style={{ pointerEvents: "none" }}
    >
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;
