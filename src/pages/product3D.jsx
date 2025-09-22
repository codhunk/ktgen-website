// components/Product3D.tsx
"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";

const Product3D = () => {
  return (
    <div className="w-full h-[500px] md:h-[700px]">
      <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
        <Stage environment="city" intensity={0.6}>
          <mesh rotation={[0.3, 0.5, 0]}>
            <boxGeometry args={[1, 2, 1]} />
            <meshStandardMaterial color="#0E4CD3" />
          </mesh>
        </Stage>
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
};

export default Product3D;
