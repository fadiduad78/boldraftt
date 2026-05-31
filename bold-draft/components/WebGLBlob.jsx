"use client";
// OPTIONAL WEBGL HERO ACCENT (react-three-fiber).
// Not mounted by default. To enable, import and drop <WebGLBlob /> inside
// Background.jsx (absolutely positioned) or the hero. See README "WebGL hero".
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Float } from "@react-three/drei";

export default function WebGLBlob() {
  return (
    <Canvas
      style={{ position: "absolute", inset: 0, zIndex: -1, pointerEvents: "none" }}
      camera={{ position: [0, 0, 4], fov: 45 }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 3, 3]} intensity={1.2} color="#B89EBB" />
      <Float speed={1.4} rotationIntensity={1.2} floatIntensity={1.6}>
        <mesh scale={1.8}>
          <icosahedronGeometry args={[1, 24]} />
          <MeshDistortMaterial
            color="#8D5675"
            roughness={0.25}
            metalness={0.4}
            distort={0.4}
            speed={1.6}
          />
        </mesh>
      </Float>
    </Canvas>
  );
}
