import { useMatcapTexture, Center, Text, Text3D, OrbitControls, Environment, Float, RoundedBox, Sphere, Tube, Cylinder, Cloud, MeshWobbleMaterial, MeshDistortMaterial, useGLTF } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useControls } from 'leva'
import { EffectComposer, Glitch, Noise, Bloom } from '@react-three/postprocessing'
import { CuboidCollider, Physics, RigidBody, RigidBodyTypeString } from '@react-three/rapier'


import { useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Model } from './Mug'
import Gradient from './gradient'
import Box from './box'
import CylinderShape from './cylinder'
import { Botella } from './Botella'
import Bananas from './botellas'

export default function Experience() {
       const groupRef = useRef<any>(null)
       // pasar esto a un hook agregar suavidad al movimiento
       useFrame(state => {
        // if(groupRef.current) {
        //   groupRef.current.rotation.set(state.mouse.y * 0.2, state.mouse.x * 0.2, 0)
        // }
      })
       return <>
        {/* <Perf position="top-left" /> */}
        <OrbitControls makeDefault enableZoom={false}/>
        <ambientLight intensity={0.4} /> 
        <Gradient />
        <Center>
        <Physics gravity={ [ 0, 1.6, 0 ] }>
            <group ref={groupRef}>
                <Model/>
            </group>
            {/* <Bananas /> */}

          </Physics>
        </Center>
        {/* <Cloud
          opacity={0.5}
          speed={0.1} // Rotation speed
          width={1} // Width of the full cloud
          depth={1} // Z-dir depth
          segments={2} // Number of particles
          position={[0, 0, 0]}
          color={'#ffffff'}>
          </Cloud> */}
        <Float
            speed={0.5} // Animation speed, defaults to 1
            rotationIntensity={0.5} // XYZ rotation intensity, defaults to 1
            floatIntensity={0.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            >
              {/* <Botella /> */}
              <Physics>
                <RigidBody type="fixed">
                  {/* <Box /> */}
                </RigidBody>
              <RigidBody type="fixed">
                {/* <CylinderShape /> */}
              </RigidBody>
              </Physics>
        </Float>
        
    </>
}