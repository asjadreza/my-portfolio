// "use client";

// import React, { Suspense, useMemo, useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Points, PointMaterial } from "@react-three/drei";

// const StarBackground = (props: any) => {
//   const ref: any = useRef(null);

//   const sphere = useMemo(() => {
//     const positions = new Float32Array(5000 * 3);
//     for (let i = 0; i < positions.length; i += 3) {
//       const radius = 1.2;
//       const theta = Math.random() * Math.PI * 2;
//       const phi = Math.acos(2 * Math.random() - 1);
//       const r = radius * Math.cbrt(Math.random());
//       positions[i] = r * Math.sin(phi) * Math.cos(theta);
//       positions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
//       positions[i + 2] = r * Math.cos(phi);
//     }
//     return positions;
//   }, []);

//   useFrame((_, delta) => {
//     if (ref.current) {
//       ref.current.rotation.x -= delta / 10;
//       ref.current.rotation.y -= delta / 15;
//     }
//   });

//   return (
//     <group rotation={[0, 0, Math.PI / 4]}>
//       <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
//         <PointMaterial
//           transparent
//           color="#fff"
//           size={0.002}
//           sizeAttenuation={true}
//           depthWrite={false}
//         />
//       </Points>
//     </group>
//   );
// };

// const StarsCanvas: React.FC = () => (
//   <div className="fixed inset-0 pointer-events-none z-0">
//     <Canvas
//       camera={{ position: [0, 0, 1] }}
//       className="pointer-events-none"
//       style={{ pointerEvents: "none" }}
//     >
//       <Suspense fallback={null}>
//         <StarBackground />
//       </Suspense>
//     </Canvas>
//   </div>
// );

// export default StarsCanvas;

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
    random.inSphere(new Float32Array(2500 * 2), { radius: 1.2 })
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
          color="#fff"
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
