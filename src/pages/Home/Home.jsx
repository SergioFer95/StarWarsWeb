import React from 'react'
import ChangeSaber from './assets/images/changeSaber.jpeg'
import BattleShip from './assets/images/BattleShips.jpg';
import FrontBattle from './assets/images/FrontBattle.jpg';
import Battle from './assets/images/Batlle.webp';
import Grievous from './assets/images/Grievous.webp';
import CloneFace from './assets/images/CloneFace.jpg';
import Grievous2 from './assets/images/Grievous2.jpg';
import Kylo from './assets/images/Kylo.jpg';
import Rey from './assets/images/Rey.jpg';

export default function Home() {
  return (
    <div className="homeBody">

      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={ChangeSaber} className="d-block w-100" alt="pictureCHaracter" />
          </div>
          <div className="carousel-item">
            <img src={Battle} className="d-block w-100" alt="pictureBattle" />
          </div>
          <div className="carousel-item">
            <img src={Grievous} className="d-block w-100" alt="pictureShips" />
          </div>
          <div className="carousel-item">
            <img src={BattleShip} className="d-block w-100" alt="clone" />
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>

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

        <section className='chooseTeam'>
          <div>
            <img src={Kylo} alt='kyloImg' className='kylo'/>
          </div>

          <p>It is time to choose your force´s side</p>

          <div>
            <img src={Rey} alt='reyImg' className='rey'/>
          </div>

        </section>

      </div>

    </div>
  )
}
