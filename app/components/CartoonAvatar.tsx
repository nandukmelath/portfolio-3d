"use client";

import { Suspense, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import * as THREE from "three";
import { asset } from "../lib/asset";

type Action = "idle" | "wave" | "dance" | "code" | "thumb";

const SKIN = "#caa07a";
const SKIN_DARK = "#a8825d";
const SHIRT = "#0f3d5c";
const SHIRT_DARK = "#0a2d44";
const PANT = "#1a1f29";
const PANT_DARK = "#10141c";
const SHOE = "#0a0a0d";
const HAIR = "#101013";
const ACCENT = "#6ee7b7";

function CapsuleLimb({
  length,
  radius,
  color,
  position,
  rotation,
}: {
  length: number;
  radius: number;
  color: string;
  position: [number, number, number];
  rotation?: [number, number, number];
}) {
  return (
    <mesh position={position} rotation={rotation} castShadow receiveShadow>
      <capsuleGeometry args={[radius, length, 8, 16]} />
      <meshToonMaterial color={color} />
    </mesh>
  );
}

function Head({ tex }: { tex: THREE.Texture }) {
  return (
    <group position={[0, 1.55, 0]}>
      {/* skull base — slightly larger than face plane, behind face */}
      <mesh castShadow position={[0, 0, -0.05]}>
        <sphereGeometry args={[0.44, 32, 32]} />
        <meshToonMaterial color={SKIN} />
      </mesh>

      {/* hair cap — back + top only, well clear of face */}
      <mesh position={[0, 0.16, -0.12]} scale={[1.0, 0.75, 0.9]}>
        <sphereGeometry args={[0.46, 32, 32]} />
        <meshToonMaterial color={HAIR} />
      </mesh>

      {/* face billboard — pushed clearly in front of skull */}
      <mesh position={[0, 0.02, 0.43]} renderOrder={2}>
        <planeGeometry args={[0.56, 0.56]} />
        <meshBasicMaterial
          map={tex}
          transparent
          toneMapped={false}
          depthWrite={false}
        />
      </mesh>

      {/* ears */}
      <mesh position={[-0.42, -0.04, 0]} rotation={[0, 0, -0.2]}>
        <sphereGeometry args={[0.08, 12, 12]} />
        <meshToonMaterial color={SKIN_DARK} />
      </mesh>
      <mesh position={[0.42, -0.04, 0]} rotation={[0, 0, 0.2]}>
        <sphereGeometry args={[0.08, 12, 12]} />
        <meshToonMaterial color={SKIN_DARK} />
      </mesh>

      {/* neck */}
      <mesh position={[0, -0.46, 0]}>
        <cylinderGeometry args={[0.13, 0.16, 0.2, 16]} />
        <meshToonMaterial color={SKIN_DARK} />
      </mesh>
    </group>
  );
}

function Arm({
  side,
  shoulderRot,
  elbowRot,
}: {
  side: "L" | "R";
  shoulderRot: [number, number, number];
  elbowRot: [number, number, number];
}) {
  const sign = side === "L" ? -1 : 1;
  return (
    <group position={[sign * 0.42, 1.05, 0]}>
      {/* shoulder pivot */}
      <group rotation={shoulderRot}>
        {/* upper arm */}
        <CapsuleLimb
          length={0.42}
          radius={0.085}
          color={SHIRT}
          position={[0, -0.25, 0]}
        />
        {/* elbow joint */}
        <group position={[0, -0.5, 0]} rotation={elbowRot}>
          {/* forearm */}
          <CapsuleLimb
            length={0.4}
            radius={0.075}
            color={SKIN}
            position={[0, -0.22, 0]}
          />
          {/* hand */}
          <mesh position={[0, -0.5, 0]} castShadow>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshToonMaterial color={SKIN} />
          </mesh>
        </group>
      </group>
    </group>
  );
}

function Leg({
  side,
  hipRot,
  kneeRot,
}: {
  side: "L" | "R";
  hipRot: [number, number, number];
  kneeRot: [number, number, number];
}) {
  const sign = side === "L" ? -1 : 1;
  return (
    <group position={[sign * 0.16, 0.4, 0]}>
      <group rotation={hipRot}>
        <CapsuleLimb
          length={0.45}
          radius={0.11}
          color={PANT}
          position={[0, -0.28, 0]}
        />
        <group position={[0, -0.55, 0]} rotation={kneeRot}>
          <CapsuleLimb
            length={0.42}
            radius={0.1}
            color={PANT_DARK}
            position={[0, -0.25, 0]}
          />
          {/* shoe */}
          <mesh
            position={[0, -0.5, 0.08]}
            rotation={[0.4, 0, 0]}
            castShadow
          >
            <boxGeometry args={[0.22, 0.12, 0.32]} />
            <meshToonMaterial color={SHOE} />
          </mesh>
        </group>
      </group>
    </group>
  );
}

function Body() {
  return (
    <group>
      {/* torso */}
      <mesh position={[0, 1.0, 0]} castShadow>
        <capsuleGeometry args={[0.36, 0.4, 8, 16]} />
        <meshToonMaterial color={SHIRT} />
      </mesh>
      {/* collar V */}
      <mesh position={[0, 1.22, 0.32]}>
        <coneGeometry args={[0.1, 0.18, 8]} />
        <meshToonMaterial color={SKIN_DARK} />
      </mesh>
      {/* belt */}
      <mesh position={[0, 0.7, 0]}>
        <torusGeometry args={[0.32, 0.04, 12, 32]} />
        <meshToonMaterial color={ACCENT} />
      </mesh>
    </group>
  );
}

function Avatar({ action }: { action: Action }) {
  const root = useRef<THREE.Group>(null!);
  const tex = useLoader(TextureLoader, asset("/face.png"));
  tex.colorSpace = THREE.SRGBColorSpace;

  // pose state — updated each frame based on action
  const [pose] = useState(() => ({
    rArmShoulder: [0, 0, 0.1] as [number, number, number],
    rArmElbow: [0, 0, 0] as [number, number, number],
    lArmShoulder: [0, 0, -0.1] as [number, number, number],
    lArmElbow: [0, 0, 0] as [number, number, number],
    rHip: [0, 0, 0] as [number, number, number],
    rKnee: [0, 0, 0] as [number, number, number],
    lHip: [0, 0, 0] as [number, number, number],
    lKnee: [0, 0, 0] as [number, number, number],
    yOffset: 0,
    bodyRot: 0,
    headTilt: 0,
  }));

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (action === "wave") {
      // right arm raised + waving forearm
      pose.rArmShoulder = [0, 0, -2.0];
      pose.rArmElbow = [0, 0, Math.sin(t * 6) * 0.5 - 0.3];
      pose.lArmShoulder = [0, 0, 0.15];
      pose.lArmElbow = [0, 0, 0];
      pose.yOffset = Math.sin(t * 1.6) * 0.015;
      pose.bodyRot = Math.sin(t * 1.6) * 0.05;
      pose.headTilt = Math.sin(t * 1.6) * 0.05;
      pose.rHip = [0, 0, 0];
      pose.lHip = [0, 0, 0];
      pose.rKnee = [0, 0, 0];
      pose.lKnee = [0, 0, 0];
    } else if (action === "dance") {
      const beat = Math.sin(t * 4);
      pose.rArmShoulder = [Math.sin(t * 4) * 0.3, 0, -1.0 - Math.abs(beat) * 0.6];
      pose.rArmElbow = [0, 0, -0.6];
      pose.lArmShoulder = [Math.sin(t * 4 + Math.PI) * 0.3, 0, 1.0 + Math.abs(beat) * 0.6];
      pose.lArmElbow = [0, 0, 0.6];
      pose.yOffset = Math.abs(beat) * 0.08;
      pose.bodyRot = Math.sin(t * 4) * 0.18;
      pose.headTilt = Math.sin(t * 4) * 0.12;
      pose.rHip = [0, 0, Math.sin(t * 4) * 0.15];
      pose.lHip = [0, 0, Math.sin(t * 4 + Math.PI) * 0.15];
      pose.rKnee = [Math.max(0, Math.sin(t * 4)) * 0.4, 0, 0];
      pose.lKnee = [Math.max(0, Math.sin(t * 4 + Math.PI)) * 0.4, 0, 0];
    } else if (action === "code") {
      // hands forward as if typing
      pose.rArmShoulder = [-1.2, 0, 0.2];
      pose.rArmElbow = [0, -0.3, -1.0 + Math.sin(t * 8) * 0.05];
      pose.lArmShoulder = [-1.2, 0, -0.2];
      pose.lArmElbow = [0, 0.3, 1.0 + Math.sin(t * 8 + 1) * 0.05];
      pose.yOffset = Math.sin(t * 1.4) * 0.005;
      pose.bodyRot = 0;
      pose.headTilt = -0.25; // looking down
      pose.rHip = [-0.2, 0, 0];
      pose.lHip = [-0.2, 0, 0];
      pose.rKnee = [0.6, 0, 0];
      pose.lKnee = [0.6, 0, 0];
    } else if (action === "thumb") {
      pose.rArmShoulder = [0, 0, -1.4];
      pose.rArmElbow = [0, 0, -1.6];
      pose.lArmShoulder = [0, 0, 0.2];
      pose.lArmElbow = [0, 0, 0];
      pose.yOffset = Math.sin(t * 2) * 0.02;
      pose.bodyRot = 0.05;
      pose.headTilt = -0.06;
      pose.rHip = [0, 0, 0];
      pose.lHip = [0, 0, 0];
      pose.rKnee = [0, 0, 0];
      pose.lKnee = [0, 0, 0];
    } else {
      // idle — subtle breathing + sway
      pose.rArmShoulder = [0, 0, 0.12 + Math.sin(t * 1.3) * 0.02];
      pose.rArmElbow = [0, 0, -0.05];
      pose.lArmShoulder = [0, 0, -0.12 - Math.sin(t * 1.3) * 0.02];
      pose.lArmElbow = [0, 0, 0.05];
      pose.yOffset = Math.sin(t * 1.4) * 0.015;
      pose.bodyRot = Math.sin(t * 0.6) * 0.03;
      pose.headTilt = Math.sin(t * 0.8) * 0.04;
      pose.rHip = [0, 0, 0];
      pose.lHip = [0, 0, 0];
      pose.rKnee = [0, 0, 0];
      pose.lKnee = [0, 0, 0];
    }

    if (root.current) {
      root.current.position.y = pose.yOffset - 0.7;
      root.current.rotation.y = pose.bodyRot + state.pointer.x * 0.12;
    }
  });

  return (
    <group ref={root}>
      {/* head with slight tilt animation via group */}
      <group rotation={[pose.headTilt, 0, 0]}>
        <Head tex={tex} />
      </group>
      <Body />
      <Arm side="R" shoulderRot={pose.rArmShoulder} elbowRot={pose.rArmElbow} />
      <Arm side="L" shoulderRot={pose.lArmShoulder} elbowRot={pose.lArmElbow} />
      <Leg side="R" hipRot={pose.rHip} kneeRot={pose.rKnee} />
      <Leg side="L" hipRot={pose.lHip} kneeRot={pose.lKnee} />

      {/* ground shadow blob */}
      <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.55, 32]} />
        <meshBasicMaterial color="#000" transparent opacity={0.35} />
      </mesh>
    </group>
  );
}

export default function CartoonAvatar({ action }: { action: Action }) {
  return (
    <Canvas
      camera={{ position: [0, 0.5, 5.6], fov: 30 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      onCreated={({ camera }) => camera.lookAt(0, 0.4, 0)}
    >
      <color attach="background" args={["#0c0c0d"]} />
      <ambientLight intensity={0.65} />
      <directionalLight
        position={[3, 5, 4]}
        intensity={1.0}
        color="#ffffff"
      />
      <directionalLight position={[-3, 3, -2]} intensity={0.4} color={ACCENT} />
      <hemisphereLight args={["#1a3550", "#0a0a0d", 0.45]} />

      <Suspense fallback={null}>
        <Avatar action={action} />
      </Suspense>
    </Canvas>
  );
}

export type { Action };
