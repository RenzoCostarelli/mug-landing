'use client'

import { DepthOfField, EffectComposer } from '@react-three/postprocessing'
import Experience from '../experience'
import s from './hero.module.scss'
import { Canvas } from '@react-three/fiber'

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
                        position: [ 0, 0, 3 ]
                    } }
                >
                    <Experience />
                    <EffectComposer multisampling={0}>
                        <DepthOfField target={[0, 0, 4]} focalLength={0.4} bokehScale={10} height={700} />
                    </EffectComposer>
                </Canvas>
            </div>       
            <div className={s.grid}>
                <div className={s.top}>
                    <div className={`${s.left} ${s.rotate90}`}>
                        <div className={`fw-bold align-left ${s.left_text}`}>
                            <span>Lorem ipsum dolor sit.</span>
                        </div>
                    </div>
                    <div className={s.right}>
                        <div className={`fw-bold align-right ${s.right_text}`}>
                            <span>Lorem ipsum dolor sit.</span>
                        </div>
                    </div>
                </div>
                <div className={s.center}>
                    {/* <h1>MUG</h1> */}
                </div>
                <div className={s.bottom}>
                    <div className={s.left}>
                        <div className={`fw-bold align-left ${s.left_text}`}>
                            <span>Lorem ipsum dolor sit.</span>
                        </div>
                    </div>
                    <div className={s.right}>
                        <div className={s.circle}>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="200px" height="200px" viewBox="0 0 200 200" enableBackground="new 0 0 200 200" xmlSpace="preserve">
                            <defs>
                                <path id="circlePath" d=" M 100, 100 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "/>
                            </defs>
                            <circle cx="150" cy="100" r="75" fill="none"/>
                            <g>
                                <use xlinkHref="#circlePath" fill="none"/>
                                <text fill="#000">
                                    <textPath xlinkHref="#circlePath">Esta es la web del MUG La web del MUG  + + + + </textPath>
                                </text>
                            </g>
                        </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}