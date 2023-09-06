import { Center, Cloud, Environment, Lightformer, OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Physics } from '@react-three/rapier'
import { Model } from './Mug'
import Gradient from './gradient'
import { easing } from 'maath'

import Botellas from './botellas'
import { Suspense } from 'react'
import Loader from './Loader'
import { useFrame } from '@react-three/fiber'

export default function Experience() {
      // useFrame((state, delta) => {
      //   easing.damp3(state.camera.position, [-state.pointer.x / 2, -state.pointer.y / 2, 5], 0.25, delta)
      // })
      return <>
        {/* <Perf position="top-left" /> */}
        {/* <OrbitControls makeDefault enableZoom={false} enableRotate={false}/> */}
        <Suspense fallback={<Loader />}>
        <ambientLight intensity={0.4} /> 
        <Gradient />
        
        <Center>
          <Physics gravity={ [ 0, 0, 0 ] }>
            <group>
                <Model/>
            </group>
            {/* <Botellas /> */}
          </Physics>
        </Center>
        <Environment preset="city">
        <group rotation={[1, 0, 0]}>
          <Lightformer intensity={10} position={[0, 10, -10]} scale={[10, 100, 1]} onUpdate={(self) => self.lookAt(0, 0, 0)} />
          <Lightformer intensity={0.2} onUpdate={(self) => self.lookAt(0, 0, 0)} position={[-5, 1, -1]} rotation-y={Math.PI / 2} scale={[50, 10, 1]} />
          <Lightformer intensity={0.2} onUpdate={(self) => self.lookAt(0, 0, 0)} position={[10, 1, 0]} rotation-y={-Math.PI / 2} scale={[50, 10, 1]} />
          <Lightformer intensity={0.2} onUpdate={(self) => self.lookAt(0, 0, 0)} position={[0, 1, 0]} scale={[10, 100, 1]} />
        </group>
      </Environment>

       </Suspense>
    </>
}