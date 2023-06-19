import s from './video.module.scss'

export default function VideoSection () {
    return <>
        <div className={s.video_area}>
            <div className={s.overlay}></div>
            <video className={s.video} src="/videos/videoTest.mp4" autoPlay loop muted>
                Tu navegador no admite el elemento <code>video</code>.
            </video>
        </div>
    </>
}