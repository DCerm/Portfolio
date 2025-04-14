"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
//import * as THREE from "three";

function Stars({ count = 1000 }) {
  const ref = useRef();
  const [positions] = useState(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 100;
    }
    return pos;
  });

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#777" size={0.2} sizeAttenuation />
    </points>
  );
}

/*
function OrbitingPlanet({ radius = 4, speed = 0.5, size = 0.5, color = "skyblue" }) {
  const mesh = useRef();

  useFrame(({ clock }) => {
    const t = clock.elapsedTime * speed;
    const x = Math.cos(t) * radius;
    const z = Math.sin(t) * radius;
    if (mesh.current) {
      mesh.current.position.set(x, 0, z);
    }
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
    </mesh>
  );
}*/

export default function StarfieldWithPlanets({ height = "100vh" }) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height,
        overflow: "hidden",
        zIndex: -1,
        background: "linear-gradient(to bottom, #011225, #020617)",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 15], fov: 75 }}
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Stars />
        {/*
        <OrbitingPlanet radius={4} speed={0.5} size={0.5} color="orange" />
        <OrbitingPlanet radius={6} speed={0.3} size={0.7} color="deepskyblue" />
        <OrbitingPlanet radius={8} speed={0.2} size={1} color="lightgreen" />
        */}
      </Canvas>
    </div>
  );
}
