"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  Sparkles,
  Stars,
  Text,
  TorusKnot,
  Environment,
  MeshDistortMaterial,
} from "@react-three/drei";
import * as THREE from "three";

function MedallionLayer({
  y,
  color,
  label,
  speed,
  size,
}: {
  y: number;
  color: string;
  label: string;
  speed: number;
  size: number;
}) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    ref.current.rotation.y = t * speed;
    ref.current.position.y = y + Math.sin(t * 0.8 + y) * 0.08;
  });
  return (
    <group>
      <mesh ref={ref} castShadow>
        <torusGeometry args={[size, 0.08, 24, 96]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.45}
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>
      <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.6}>
        <Text
          position={[size + 0.6, y, 0]}
          fontSize={0.22}
          color={color}
          anchorX="left"
          anchorY="middle"
        >
          {label}
        </Text>
      </Float>
    </group>
  );
}

function CoreOrb() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    ref.current.rotation.x = t * 0.25;
    ref.current.rotation.y = t * 0.35;
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[0.55, 2]} />
      <MeshDistortMaterial
        color="#14b8a6"
        emissive="#0ea5a3"
        emissiveIntensity={0.7}
        speed={2}
        distort={0.35}
        metalness={0.6}
        roughness={0.15}
      />
    </mesh>
  );
}

function DataParticles() {
  const points = useMemo(() => {
    const arr: [number, number, number][] = [];
    for (let i = 0; i < 280; i++) {
      const r = 2.2 + Math.random() * 1.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr.push([
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta) - 0.4,
        r * Math.cos(phi),
      ]);
    }
    return arr;
  }, []);
  const ref = useRef<THREE.Group>(null!);
  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * 0.05;
  });
  return (
    <group ref={ref}>
      {points.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.018, 8, 8]} />
          <meshBasicMaterial color={i % 3 === 0 ? "#14b8a6" : i % 3 === 1 ? "#d4af37" : "#94a3b8"} />
        </mesh>
      ))}
    </group>
  );
}

function OrbitalRing() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    ref.current.rotation.z = state.clock.elapsedTime * 0.1;
    ref.current.rotation.x = Math.PI / 2.3;
  });
  return (
    <mesh ref={ref}>
      <TorusKnot args={[1.6, 0.04, 200, 16, 2, 5]} />
      <meshStandardMaterial
        color="#14b8a6"
        emissive="#14b8a6"
        emissiveIntensity={0.4}
        metalness={0.8}
        roughness={0.3}
        transparent
        opacity={0.55}
      />
    </mesh>
  );
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0.4, 5.5], fov: 50 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={["#05070d"]} />
      <fog attach="fog" args={["#05070d", 7, 14]} />

      <ambientLight intensity={0.35} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#14b8a6" />
      <pointLight position={[-4, -3, -2]} intensity={0.6} color="#d4af37" />

      <Suspense fallback={null}>
        <Stars radius={60} depth={30} count={2500} factor={3} fade speed={1} />
        <Sparkles count={50} scale={6} size={2} color="#14b8a6" />

        <Float speed={0.8} rotationIntensity={0.3} floatIntensity={0.5}>
          <CoreOrb />
        </Float>

        <MedallionLayer y={1.5} color="#d4af37" label="Gold" speed={0.4} size={1.6} />
        <MedallionLayer y={0} color="#c0c0c0" label="Silver" speed={-0.3} size={2.0} />
        <MedallionLayer y={-1.5} color="#b87333" label="Bronze" speed={0.35} size={2.4} />

        <OrbitalRing />
        <DataParticles />

        <Environment preset="night" />
      </Suspense>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.6}
        minPolarAngle={Math.PI / 2.6}
        maxPolarAngle={Math.PI / 1.7}
      />
    </Canvas>
  );
}
