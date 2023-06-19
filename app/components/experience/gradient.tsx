import { useFrame } from "@react-three/fiber";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { Color, Vector2 } from "three";

import vertexShader from './vertexShader';
import fragmentShader from './fragmentShader';

export default function Gradient() {
    // This reference will give us direct access to the mesh
  const mesh = useRef<any>(null);

  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
      u_mouse: { value: new Vector2(0, 0) },
      u_bg: {
        value: new Color("#A1A3F7"),
      },
      u_colorA: { value: new Color("#23d5ab") },
      u_colorB: { value: new Color("#23a6d5") },
    }),
    []
  );

  useFrame((state) => {
    const { clock } = state;
    if (mesh.current) {
        mesh.current.material.uniforms.u_time.value = clock.getElapsedTime() * 0.3;

    }
  });

  return (
    <mesh ref={mesh} position={[0, 0, -3]} scale={1}>
      <planeGeometry args={[15, 15, 32, 32]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        wireframe={false}
      />
    </mesh>
  );
};