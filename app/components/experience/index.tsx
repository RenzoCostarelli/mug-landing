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
      
       return <>
        {/* <Perf position="top-left" /> */}
        <OrbitControls makeDefault enableZoom={false}/>
        <ambientLight intensity={0.4} /> 
        <Center>
            <Float
            speed={1} // Animation speed, defaults to 1
            rotationIntensity={0.1} // XYZ rotation intensity, defaults to 1
            floatIntensity={0.1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            >
           
            </Float>
              <Model/>
        </Center>
        <Gradient />
        <Center>
          <Bananas />
        </Center>
        {/* <Cloud
          opacity={0.5}
          speed={0.1} // Rotation speed
          width={1} // Width of the full cloud
          depth={1} // Z-dir depth
          segments={2} // Number of particles
          position={[0, -1, -5]}
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