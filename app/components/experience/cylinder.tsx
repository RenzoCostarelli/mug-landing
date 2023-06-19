import { Cylinder, MeshWobbleMaterial } from "@react-three/drei";

export default function CylinderShape() {
    return <>
        <Cylinder position={[-2, 1, -3]} scale={[0.5, 1.5, 0.5]} rotation={[0, Math.PI / 4, Math.PI / 4]}>
          <MeshWobbleMaterial factor={3} speed={0.5} color="#ff69b4"/>
        </Cylinder>        
    </>
}