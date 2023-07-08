'use client'
import s from './snap-scroller.module.scss'
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from 'next/image';

export default function SnapScroller () {
    const sectionRef = useRef(null);
    const columnRef = useRef(null);
    const snapColumnRef = useRef(null);
    const boxRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        
        const areas = gsap.utils.toArray('.text_area:not(:first-child)')
        const photos:any = gsap.utils.toArray('.desktop_photo:not(:first-child)')
        const photosInner:any = gsap.utils.toArray('.inner_img')
        
        gsap.set(photos, {yPercent:101})

        ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom bottom",
            pin: snapColumnRef.current
        })

        areas.forEach( (area: any, index) => {
            let headline = area.querySelector('h1')
            ScrollTrigger.create({
                trigger: headline,
                start: 'top 80%',
                end: 'top 50%',
                animation: gsap.to(photos[index], {yPercent:0}),
                scrub: true,
                markers: false
            })
            ScrollTrigger.create({
                trigger: headline,
                start: 'top 80%',
                end: 'top 50%',
                animation: gsap.to(photosInner[index], {yPercent:-15}),
                scrub: true,

            })
        })
    }, []);
    
    return <>
        <div className={s.vertical_scroller} ref={sectionRef}>
            <div className={s.cols_container}>
                <div className={`${s.column} ${s.left_column}`} ref={columnRef}>
                    <div className={`${s.desktop_content}`}>
                        <div className={`${s.desktop_content_section} text_area`}>
                            <div className={`${s.mobile_image}`}>
                                <Image
                                    src="/images/mug1.jpg"
                                    alt="Mug team"
                                    fill
                                    // sizes="100vw"
                                    style={{
                                        objectFit: 'cover',
                                    }}
                                />
                            </div>
                            <h1>Qué es el MUG?</h1>
                            <p>Red is a color often associated with strong emotions such as passion, love, and anger. It's a bold and attention-grabbing color that can evoke feelings of excitement, warmth, and energy.</p>
                        </div>
                        <div className={`${s.desktop_content_section} text_area`}>
                            <div className={`${s.mobile_image}`}>
                                <Image
                                    src="/images/mug2.jpg"
                                    alt="Mug team"
                                    fill
                                    // sizes="100vw"
                                    style={{
                                        objectFit: 'cover',
                                    }}
                                />
                            </div>
                            <h1>Cómo es el MUG?</h1>
                            <p>Green is a color that is often associated with nature, growth, and harmony. It is a calming and relaxing color that can evoke feelings of balance, stability, and freshness.</p>
                        </div>
                        <div className={`${s.desktop_content_section} text_area`}>
                            <div className={`${s.mobile_image}`}>
                                <Image
                                    src="/images/mug3.jpg"
                                    alt="Mug team"
                                    fill
                                    // sizes="100vw"
                                    style={{
                                        objectFit: 'cover',
                                    }}
                                />
                            </div>
                            <h1>Cuando es el MUG?</h1>
                            <p>Pink is a color that is often associated with femininity, romance, and sweetness. It is a softer and more delicate shade of red that can evoke feelings of warmth, love, and nurturing.</p>
                            <p>Pink is a color that is often associated with femininity, romance, and sweetness. It is a softer and more delicate shade of red that can evoke feelings of warmth, love, and nurturing.</p>
                    </div>
                        <div className={`${s.desktop_content_section} text_area`}>
                            <div className={`${s.mobile_image}`}>
                            <Image
                                    src="/images/mug4.jpg"
                                    alt="Mug team"
                                    fill
                                    // sizes="100vw"
                                    style={{
                                        objectFit: 'cover',
                                    }}
                                />
                            </div>
                            <h1>Por qué es el MUG?</h1>
                            <p>Blue is a color that is often associated with calmness, trust, and reliability. It is a peaceful and serene color that can evoke feelings of stability, security, and professionalism.</p>
                        </div>
                    </div>
                </div>
                <div className={`${s.snap_column} ${s.right_coolumn}`} ref={snapColumnRef}>
                    <div className={`${s.desktop_photos}`}>
                        <div className={`${s.box} ${s.red} desktop_photo`} ref={boxRef}>
                            <Image
                                src="/images/mug1blur.jpg"
                                alt="Mug team"
                                fill
                                className={`${s.background_image}`}
                                style={{
                                    objectFit: 'cover',
                                }}
                            />
                            <div className={`${s.inner_image} inner_img`}>
                                <Image
                                    src="/images/mug1.jpg"
                                    alt="Mug team"
                                    fill
                                    // sizes="100vw"
                                    style={{
                                        objectFit: 'cover',
                                    }}
                                />
                            </div>
                        </div>
                        <div className={`${s.box} ${s.green} desktop_photo`} ref={boxRef}>
                            <Image
                                src="/images/mug2blur.jpg"
                                alt="Mug team"
                                fill
                                className={`${s.background_image}`}
                                style={{
                                    objectFit: 'cover',
                                }}
                            />
                          <div className={`${s.inner_image} inner_img`}>
                                <Image
                                    src="/images/mug2.jpg"
                                    alt="Mug team"
                                    fill
                                    // sizes="100vw"
                                    style={{
                                        objectFit: 'cover',
                                    }}
                                />
                            </div>     
                        </div>
                        <div className={`${s.box} ${s.pink} desktop_photo`} ref={boxRef}>
                            <Image
                                src="/images/mug3blur.jpg"
                                alt="Mug team"
                                fill
                                className={`${s.background_image}`}
                                style={{
                                    objectFit: 'cover',
                                }}
                            />
                            <div className={`${s.inner_image} inner_img`}>
                                <Image
                                    src="/images/mug3.jpg"
                                    alt="Mug team"
                                    fill
                                    // sizes="100vw"
                                    style={{
                                        objectFit: 'cover',
                                    }}
                                />
                            </div>
                        </div>
                        <div className={`${s.box} ${s.blue} desktop_photo`} ref={boxRef}>
                            <Image
                                src="/images/mug4blur.jpg"
                                alt="Mug team"
                                fill
                                // sizes="100vw"
                                className={`${s.background_image}`}
                                style={{
                                    objectFit: 'cover'
                                }}
                            />
                            <div className={`${s.inner_image} inner_img`}>
                                <Image
                                    src="/images/mug4.jpg"
                                    alt="Mug team"
                                    fill
                                    // sizes="100vw"
                                    style={{
                                        objectFit: 'cover',
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}