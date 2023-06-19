import { MeshWobbleMaterial, RoundedBox } from "@react-three/drei";

export default function Box() {
    return <>
        <RoundedBox
            position={[-2, -1.5, -2]}
            args={[1, 1, 1]} // Width, height, depth. Default is [1, 1, 1]
            radius={0.05} // Radius of the rounded corners. Default is 0.05
            smoothness={4} // The number of curve segments. Default is 4
            creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
            // All THREE.Mesh props are valid
          >           
            <MeshWobbleMaterial factor={0.5} speed={0.5} color="#ff69b4"/>
        </RoundedBox>
    </>
}