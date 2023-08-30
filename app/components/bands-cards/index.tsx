import { Band } from '@/app/types/bands'
import s from './bands-cards.module.scss'
import Image from 'next/image'

const dummyData: Band[] = [
    {
      img_url: '/images/mug1.jpg',
      link_url: 'https://example.com/groove_master',
      title: 'Groove Master',
      description: 'Feel the funk and groove with the master!',
    },
    {
      img_url: '/images/mug1.jpg',
      link_url: 'https://example.com/funkadelic_beats',
      title: 'Funkadelic Beats',
      description: 'Get ready for some mind-bending funky beats!',
    },
    {
      img_url: '/images/mug1.jpg',
      link_url: 'https://example.com/groovy_soulz',
      title: 'Groovy Soulz',
      description: 'A fusion of soul and groove that moves your soul!',
    },
    {
      img_url: '/images/mug1.jpg',
      link_url: 'https://example.com/groove_masters',
      title: 'The Groove Masters',
      description: 'These masters of groove will keep you dancing all night.',
    },
    {
      img_url: '/images/mug1.jpg',
      link_url: 'https://example.com/funky_fusion',
      title: 'Funky Fusion',
      description: 'Experience the perfect fusion of funk and grooves!',
    },
    {
      img_url: '/images/mug1.jpg',
      link_url: 'https://example.com/groove_machine',
      title: 'Groove Machine',
      description: 'Get on the dance floor and let the machine groove you!',
    },
    {
      img_url: '/images/mug1.jpg',
      link_url: 'https://example.com/funk_revolution',
      title: 'Funk Revolution',
      description: 'Join the revolution of funky rhythms and moves!',
    },
    {
      img_url: '/images/mug1.jpg',
      link_url: 'https://example.com/groove_sensation',
      title: 'Groove Sensation',
      description: 'A sensation of groove that electrifies the crowd!',
    },
    {
      img_url: '/images/mug1.jpg',
      link_url: 'https://example.com/funky_vibes',
      title: 'Funky Vibes',
      description: 'Vibes so funky, they`ll make you move instantly!',
    },
  ];

  function BandsCards({ bandData }: { bandData: Band }) {
    const { img_url, link_url, title, description } = bandData;
  
    return (
      <>
        <div className={s.card}>
          <div className={s.card_picture}>
            <Image
              className={s.image}
                src={img_url}
                alt={title}
                fill
                // sizes="100vw"
                style={{
                    objectFit: 'cover',
                }}
            />
            {/* <img src={img_url} alt={title} /> */}
          </div>
          <div className={s.card_info}>
            <h2 className={s.title}>{title}</h2>
            {/* <p>{description}</p> */}
            <a className={s.purchase_button} href={link_url}>Escuchar</a>
            <div className={s.play_icon}>
              <svg viewBox="-3 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" className={s.svg}>
                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="Icon-Set-Filled" transform="translate(-419.000000, -571.000000)" fill="#ffffff">
                          <path d="M440.415,583.554 L421.418,571.311 C420.291,570.704 419,570.767 419,572.946 L419,597.054 C419,599.046 420.385,599.36 421.418,598.689 L440.415,586.446 C441.197,585.647 441.197,584.353 440.415,583.554" id="play"/>
                      </g>
                  </g>
              </svg>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default function Bands() {
    return (
      <div className={`${s.bands_section}`}>
        <h1>BANDAS</h1>
        <div className={s.cards_container}>
          {dummyData.map((band) => (
            <BandsCards key={band.title} bandData={band} />
          ))}
        </div>
        <div className={s.lema}>La unión es movimiento y el movimiento es groove</div>
      </div>
    );
  }

