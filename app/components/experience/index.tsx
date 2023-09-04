import { Center } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Physics } from '@react-three/rapier'
import { Model } from './Mug'
import Gradient from './gradient'

import Botellas from './botellas'
import { Suspense } from 'react'
import Loader from './Loader'

export default function Experience() {
      return <>
        {/* <Perf position="top-left" /> */}
        {/* <OrbitControls makeDefault enableZoom={false}/> */}
        <Suspense fallback={<Loader />}>
        <ambientLight intensity={0.4} /> 
        <Gradient />
        <Center>
          <Physics gravity={ [ 0, 0, 0 ] }>
            <group>
                <Model/>
            </group>
            <Botellas />
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
       </Suspense>
    </>
}