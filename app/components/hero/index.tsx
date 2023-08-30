'use client'
import { DepthOfField, EffectComposer } from '@react-three/postprocessing'
import Experience from '../experience'
import s from './hero.module.scss'
import { Canvas } from '@react-three/fiber'
import UI from '../ui'

export default function Hero() {
    
    return <>
       {/* VIDEO O GRADIENTE ANIMADO DE FONDO */}
        <div className={s.hero}>
            <div className={s.canvas_container}>
                <Canvas
                    gl={{ antialias: false }} 
                    dpr={[1, 1.5]}
                    camera={ {
                        fov: 45,
                        near: 0.1,  
                        far: 100,
                        position: [ 0, 0, 5 ]
                    } }
                >
                    <Experience />
                    {/* <EffectComposer multisampling={0}>
                        <DepthOfField target={[0, 0, 4]} focalLength={0.4} bokehScale={10} height={700} />
                    </EffectComposer> */}
                </Canvas>
            </div>       
           
        </div>
    </>
}