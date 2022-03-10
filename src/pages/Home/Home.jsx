import React from 'react'
import HomeCarousel from '../../components/Carousel/HomeCarousel';

import FrontBattle from './assets/images/FrontBattle.jpg';
import CloneFace from './assets/images/CloneFace.jpg';
import Grievous2 from './assets/images/Grievous2.jpg';
import Kylo from './assets/images/Kylo.jpg';
import Rey from './assets/images/Rey.jpg';

export default function Home() {
  return (
    <div className="homeBody">

      <HomeCarousel />

      <div className='homeContent'>

        <section className='cardContent'>
          <div>
            <img src={FrontBattle} alt='battle' className='cardContent__img' />
          </div>

          <div className='cardContent__text'>
            <h3>Welcome to STAR WARS universe.</h3>
            <p>Discover all you need to become a famous jedy or maybe you preffer to become a famous sith, next to the dark side.</p>
          </div>
        </section>

        <section className='cardContent'>
          <div className='cardContent__text'>
            <p>Meet the heroes. Take part in the universe's struggle for separatist liberation.</p>
          </div>

          <div>
            <img src={CloneFace} alt='battle' className='cardContent__img' />
          </div>
        </section>

        <section className='cardContent'>
          <div>
            <img src={Grievous2} alt='battle' className='cardContent__img' />
          </div>

          <div className='cardContent__text'>
            <p>Or meet the villains and fight Republic oppression alongside the driods.</p>
          </div>
        </section>

        <section>
          USUARIOS Y SUS OPINIONES (llamada api, etc) TENEMOS QUE HACER UN COMPONENTE PROPIO DE ESTE APARTADO, NO CREARLO EN LA HOME DIRECTAMENTE!!!
        </section>

        <section className='chooseTeam'>
          <div>
            <img src={Kylo} alt='kyloImg' className='kylo'/>
          </div>

          <p>Now it is time to choose your force´s side</p>

          <div>
            <img src={Rey} alt='reyImg' className='rey'/>
          </div>

        </section>

      </div>

    </div>
  )
}
