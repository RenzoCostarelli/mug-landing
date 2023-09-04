import * as THREE from 'three'
import { useRef, useState } from 'react'
import {  useThree, useFrame } from '@react-three/fiber'
// https://github.com/pmndrs/drei
import { useGLTF, Detailed, Environment } from '@react-three/drei'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import { Physics, RigidBody } from '@react-three/rapier'

type ModelProps = {
    index: number;
    z: any;
    speed: any;
};

type GLTFResult = GLTF & {
    nodes: {
      Ramazzotti_Atlas_0: THREE.Mesh
    }
    materials: {
      Atlas: THREE.MeshStandardMaterial
    }
}

function Botella({ index, z, speed }: ModelProps) {
  const ref = useRef<any>()
  // useThree gives you access to the R3F state model
  const { viewport, camera } = useThree()
  // getCurrentViewport is a helper that calculates the size of the viewport
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, -z])
  // useGLTF is an abstraction around R3F's useLoader(GLTFLoader, url)
  // It can automatically handle draco and meshopt-compressed assets without you having to
  // worry about binaries and such ...
  const { nodes, materials } = useGLTF('./model/botella.glb') as GLTFResult
  // By the time we're here the model is loaded, this is possible through React suspense

  // Local component state, it is safe to mutate because it's fixed data
  const [data] = useState({
    // Randomly distributing the objects along the vertical
    y: THREE.MathUtils.randFloatSpread(height * 0.5),
    // This gives us a random value between -1 and 1, we will multiply it with the viewport width
    x: THREE.MathUtils.randFloatSpread(1.1),
    // How fast objects spin, randFlost gives us a value between min and max, in this case 8 and 12
    spin: THREE.MathUtils.randFloat(0.5, 1),
    // Some random rotations, Math.PI represents 360 degrees in radian
    rX: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI
  })

  // useFrame executes 60 times per second
  useFrame((state, dt) => {
    
    if (ref.current ) {

        if (dt < 0.1) ref.current.position.set(index === 0 ? 0 : data.x * width * 1.4, (data.y += dt * 0), -z)
        if (dt < 0.1) ref.current.position.set(index === 0 ? 0 : data.y * height , (data.x += dt * 0), -z)
        // Rotate the object around
        ref.current.rotation.set((data.rX += dt / data.spin), Math.sin(index * 50 + state.clock.elapsedTime / 10) * Math.PI, (data.rZ += dt / data.spin))
        // If they're too far up, set them back to the bottom
        // if (data.y > height * (index === 0 ? 2 : 1)) data.y = -(height * (index === 0 ? 2 : 1))
    }
  })

  return (      
    
      <RigidBody>
          <mesh geometry={nodes.Ramazzotti_Atlas_0.geometry} scale={0.03} ref={ref} >
              <meshStandardMaterial color="#23a6d5"/> 
          </mesh>         
      </RigidBody>
  )
}

export default function Botellas({ speed = 0.1, count = 20, depth = 1, easing = (x: any) => Math.sqrt(1 - Math.pow(x - 1, 1.2)) }) {
  return <>
    {/* Using cubic easing here to spread out objects a little more interestingly, i wanted a sole big object up front ... */}
    {Array.from({ length: count }, (_, i) => <Botella key={i} index={i} z={2} speed={speed} /> /* prettier-ignore */)}
  </>
}
