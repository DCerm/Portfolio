/* components/Smoke.jsx
'use client';
import React, { useRef, useEffect, useMemo } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import glsl from 'babel-plugin-glsl/macro';

// Custom shader material
const SmokeMaterial = shaderMaterial(
  {
    time: 0,
    uMouse: new THREE.Vector2(0.5, 0.5),
    uResolution: new THREE.Vector2(1, 1),
  },
  glsl`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  glsl`
    uniform float time;
    uniform vec2 uMouse;
    uniform vec2 uResolution;
    varying vec2 vUv;

    float random(vec2 p) {
      return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
    }

    void main() {
      vec2 uv = vUv;
      float noise = random(uv + time * 0.001);
      float intensity = smoothstep(0.4, 0.6, noise);
      vec3 color = mix(vec3(0.02, 0.02, 0.05), vec3(0.3, 0.4, 0.6), intensity);
      gl_FragColor = vec4(color, 1.0);
    }
  `
);

function SmokePlane() {
  const meshRef = useRef();
  const materialRef = useRef();
  const { size, mouse } = useThree();

  useEffect(() => {
    if (materialRef.current) {
      materialRef.current.uResolution.set(size.width, size.height);
    }
  }, [size]);

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.time = clock.elapsedTime * 1000;
      materialRef.current.uMouse.lerp(
        new THREE.Vector2(mouse.x + 0.5, -mouse.y + 0.5),
        0.05
      );
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -1]} scale={[size.width, size.height, 1]}>
      <planeGeometry args={[2, 2]} />
      <smokeMaterial ref={materialRef} />
    </mesh>
  );
}

const Smoke = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '200vh', backgroundColor: '#0a0a0f' }}>
      <Canvas
        orthographic
        camera={{ position: [0, 0, 1], zoom: 1 }}
        gl={{ antialias: false, powerPreference: 'low-power' }}
      >
        <SmokePlane />
      </Canvas>
    </div>
  );
};

export default Smoke;
*/