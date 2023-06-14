import { useMatcapTexture, Center, Text3D, OrbitControls, Environment } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useControls } from 'leva'

export default function Experience() {

    const materialProps = useControls({
        thickness: { value: 5, min: 0, max: 20 },
        roughness: { value: 0, min: 0, max: 1, step: 0.1 },
        clearcoat: { value: 1, min: 0, max: 1, step: 0.1 },
        clearcoatRoughness: { value: 0, min: 0, max: 1, step: 0.1 },
        transmission: { value: 1, min: 0.9, max: 1, step: 0.01 },
        ior: { value: 1.25, min: 1, max: 2.3, step: 0.05 },
        envMapIntensity: { value: 25, min: 0, max: 100, step: 1 },
        color: '#ffffff',
        attenuationTint: '#ffe79e',
        attenuationDistance: { value: 0.40, min: 0, max: 1 }
      })
      const envProps = useControls({ background: false })
      const [ matcapTexture ] = useMatcapTexture('7B5254_E9DCC7_B19986_C8AC91', 256)
    return <>
        <Perf position="top-left" />
        <OrbitControls makeDefault />
        <Center>
            <Text3D font="./fonts/helvetiker_regular.typeface.json">
                MUG
                {/* <meshMatcapMaterial matcap={ matcapTexture } /> */}
                <meshPhysicalMaterial {...materialProps} />
            </Text3D>
            <Environment {...envProps} files="./adams_place_bridge_1k.hdr" />
        </Center>
            <group rotation={[0, 0, Math.PI / 4]}>
                <mesh position={[0, 0, -10]} material-color="hotpink">
                <planeGeometry args={[20, 2]} />
                </mesh>
                <mesh position={[0, 0, -10]} material-color="hotpink">
                <planeGeometry args={[2, 20]} />
                </mesh>
            </group>
    </>
}