"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import * as THREE from "three";
import { asset } from "../lib/asset";

function PortraitPlane() {
  const tex = useLoader(TextureLoader, asset("/portrait.png"));
  tex.colorSpace = THREE.SRGBColorSpace;
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const mx = state.pointer.x;
    const my = state.pointer.y;
    ref.current.rotation.y = mx * 0.12 + Math.sin(t * 0.4) * 0.02;
    ref.current.rotation.x = -my * 0.08 + Math.sin(t * 0.3) * 0.015;
    ref.current.position.y = Math.sin(t * 0.5) * 0.02;
  });
  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <planeGeometry args={[2.2, 2.2, 32, 32]} />
      <meshBasicMaterial
        map={tex}
        transparent
        toneMapped={false}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function GlowBack() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    ref.current.scale.setScalar(1 + Math.sin(t * 0.8) * 0.02);
  });
  return (
    <mesh ref={ref} position={[0, 0, -0.6]}>
      <circleGeometry args={[1.55, 64]} />
      <meshBasicMaterial color="#6ee7b7" transparent opacity={0.08} />
    </mesh>
  );
}

function Ring({
  radius,
  speed,
  tilt,
  rot,
  color,
  opacity,
  thickness = 0.005,
}: {
  radius: number;
  speed: number;
  tilt: [number, number, number];
  rot: number;
  color: string;
  opacity: number;
  thickness?: number;
}) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    ref.current.rotation.z = rot + state.clock.elapsedTime * speed;
  });
  return (
    <mesh rotation={tilt} ref={ref}>
      <torusGeometry args={[radius, thickness, 20, 220]} />
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
    const count = 240;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 1.7 + Math.random() * 1.6;
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
    ref.current.rotation.y = state.clock.elapsedTime * 0.04;
  });
  return (
    <points ref={ref} geometry={geom}>
      <pointsMaterial
        size={0.012}
        color="#9ca3af"
        sizeAttenuation
        transparent
        opacity={0.5}
        depthWrite={false}
      />
    </points>
  );
}

function Scene() {
  return (
    <>
      <ParticleField />
      <GlowBack />
      <Ring radius={1.45} speed={0.12} tilt={[1.2, 0, 0]} rot={0} color="#6ee7b7" opacity={0.5} thickness={0.006} />
      <Ring radius={1.75} speed={-0.08} tilt={[0.5, 0.3, 0]} rot={0.4} color="#e7e5e4" opacity={0.18} />
      <Ring radius={2.0} speed={0.06} tilt={[-0.7, 0.5, 0]} rot={0.9} color="#e7e5e4" opacity={0.1} />
      <PortraitPlane />
    </>
  );
}

export default function Avatar3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.2], fov: 38 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true, premultipliedAlpha: false }}
    >
      <ambientLight intensity={0.6} />
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}
