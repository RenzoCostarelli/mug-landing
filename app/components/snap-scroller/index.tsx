'use client'
import s from './snap-scroller.module.scss'
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SnapScroller () {
    const columnRef = useRef(null);
    const snapColumnRef = useRef(null);
    const boxRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.create({
            trigger: columnRef.current,
            start: "top top",
            end: "bottom bottom",
            pin: boxRef.current
        })
    }, []);
    return <>
        <div className={s.vertical_scroller}>
            <div className={s.cols_container}>
                <div className={s.column} ref={columnRef}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, porro numquam! Nihil laborum labore quaerat eveniet tempora quam provident amet minus ut assumenda. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti tempora hic quas totam ex explicabo autem, voluptatibus neque minima laudantium assumenda culpa ab ad deserunt quos? Error qui labore eveniet id exercitationem commodi, explicabo sit modi dicta illo nobis earum. Aut ad adipisci tempore, delectus culpa reprehenderit excepturi placeat dolorem.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi itaque aut placeat corrupti? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, porro numquam! Nihil laborum labore quaerat eveniet tempora quam provident amet minus ut assumenda.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, porro numquam! Nihil laborum labore quaerat eveniet tempora quam provident amet minus ut assumenda.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi itaque aut placeat corrupti? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, porro numquam! Nihil laborum labore quaerat eveniet tempora quam provident amet minus ut assumenda.</p>
                </div>
                <div className={s.snap_column} ref={snapColumnRef}>
                    <div className={s.box} ref={boxRef}></div>
                </div>
            </div>
        </div>
    </>
}