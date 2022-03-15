import React from 'react'
import HomeCarousel from '../../components/Carousel/HomeCarousel';

import FrontBattle from './assets/images/FrontBattle.jpg';
import CloneFace from './assets/images/CloneFace1.jpg';
import Grievous2 from './assets/images/Grievous21.jpg';
import UserOpinions from '../../components/UserOpinions/UserOpinions';
import UserChoice from '../../components/UserChoice/UserChoice';
// import Kylo from './assets/images/Kylo.jpg';
// import Rey from './assets/images/Rey.jpg';

export default function Home() {
  return (
    <div className="homeBody">

      <HomeCarousel />

      <div className='homeContent'>

        <section className='cardContent'>
          <div className='cardContent__contentImg'>
            <img src={FrontBattle} alt='battle' className='cardContent__contentImg__img' />
          </div>

          <div className='cardContent__text'>
            <h3 className='cardContent__text__welcome'>Welcome to STAR WARS universe.</h3>
            <p className='cardContent__text__paragraph'>Discover all you need to become a famous jedy or maybe you preffer to become a famous sith, next to the dark side.</p>
          </div>
        </section>

        <section className='cardContent'>
          <div className='cardContent__text'>
            <p className='cardContent__text__paragraph--one'>Meet the heroes. Take part in the universe's struggle for separatist liberation.</p>
          </div>

          <div className='cardContent__contentImg'>
            <img src={CloneFace} alt='battle' className='cardContent__contentImg__img' />
          </div>
        </section>

        <section className='cardContent'>
          <div className='cardContent__contentImg'>
            <img src={Grievous2} alt='battle' className='cardContent__contentImg__img' />
          </div>

          <div className='cardContent__text'>
            <p className='cardContent__text__paragraph--one'>Or meet the villains and fight Republic oppression alongside the driods.</p>
          </div>
        </section>
        
      </div>

      <UserOpinions />

      <UserChoice />

    </div>
  )
}
