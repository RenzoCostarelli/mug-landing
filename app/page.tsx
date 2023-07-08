import Image from 'next/image'
import styles from './page.module.scss'
import Hero from './components/hero'
import SnapScroller from './components/snap-scroller'
import VideoSection from './components/video'
import SplitMarquee from './components/split-marquee'
export default function Home() {
  return (<>
    <header className={styles.header_container}>
      <Hero />
    </header>
    {/* AGREGAR SECCION DOS COLUMNAS IMAGEN A LA DERECHA, 
    TEXTO A LA IZQUIERDA CON SCROLL, LA IMAGEN QUEDA FIJA 
    HASTA QUE TERMINA EL SCROLL */}

    {/* MARQUESINA DE TEXTO INFINITO */}

    {/* VIDEO */}

    {/* SECCION IMAGEN IZQ TEXTO DER */}
    {/* SECCION IMAGEN DER TEXTO IZQ */}
    {/* SECCION IMAGEN IZQ TEXTO DER */}
    <main className={styles.main}>
      <section>
        <SnapScroller />
      </section>
      <section>
        <SplitMarquee />
      </section>
      <section>
        <VideoSection />
      </section>
      <section className='h100' style={{backgroundColor: 'white'}}></section>
    </main>
    </>
  )
}
