"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Ring({
  radius,
  speed,
  axisTilt,
  color,
  opacity,
}: {
  radius: number;
  speed: number;
  axisTilt: number;
  color: string;
  opacity: number;
}) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    ref.current.rotation.z = state.clock.elapsedTime * speed;
  });
  return (
    <mesh ref={ref} rotation={[axisTilt, 0, 0]}>
      <torusGeometry args={[radius, 0.006, 24, 220]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={opacity}
        toneMapped={false}
      />
    </mesh>
  );
}

function ParticleField() {
  const ref = useRef<THREE.Points>(null!);
  const geom = useMemo(() => {
    const g = new THREE.BufferGeometry();
    const count = 320;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 1.4 + Math.random() * 1.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3 + 0] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    return g;
  }, []);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    ref.current.rotation.y = t * 0.04;
    ref.current.rotation.x = Math.sin(t * 0.1) * 0.1;
  });
  return (
    <points ref={ref} geometry={geom}>
      <pointsMaterial
        size={0.012}
        color="#9ca3af"
        sizeAttenuation
        transparent
        opacity={0.55}
        depthWrite={false}
      />
    </points>
  );
}

function Core() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    ref.current.rotation.x = t * 0.18;
    ref.current.rotation.y = t * 0.24;
  });
  return (
    <group>
      <mesh ref={ref}>
        <icosahedronGeometry args={[0.7, 1]} />
        <meshBasicMaterial color="#1c1c1f" wireframe transparent opacity={0.9} />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[0.68, 1]} />
        <meshStandardMaterial
          color="#0a0a0a"
          emissive="#6ee7b7"
          emissiveIntensity={0.08}
          roughness={0.4}
          metalness={0.6}
        />
      </mesh>
    </group>
  );
}

function Scene() {
  const group = useRef<THREE.Group>(null!);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (group.current) {
      group.current.rotation.y = t * 0.06;
      group.current.position.y = Math.sin(t * 0.4) * 0.05;
    }
  });
  return (
    <group ref={group}>
      <Core />
      <Ring radius={1.15} speed={0.18} axisTilt={1.1} color="#6ee7b7" opacity={0.45} />
      <Ring radius={1.55} speed={-0.12} axisTilt={0.4} color="#e7e5e4" opacity={0.22} />
      <Ring radius={1.95} speed={0.08} axisTilt={-0.9} color="#e7e5e4" opacity={0.12} />
      <ParticleField />
    </group>
  );
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.6], fov: 38 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[3, 3, 3]} intensity={0.6} color="#ffffff" />
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}
