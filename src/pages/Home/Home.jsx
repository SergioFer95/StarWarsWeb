import React from 'react'
import ChangeSaber from './assets/images/changeSaber.jpeg'
import BattleShip from './assets/images/BattleShips.jpg';
import FrontBattle from './assets/images/FrontBattle.jpg';
import Battle from './assets/images/Batlle.webp';
import Grievous from './assets/images/Grievous.webp';
import CloneFace from './assets/images/CloneFace.jpg';

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
            <img src={FrontBattle} alt='battle' />
          </div>

          <div>
            <h3>Welcome to STAR WARS universe.</h3>
            <p>Discover all you need to become a famous jedy or maybe you preffer to become a famous sith, next to the dark side.</p>
          </div>
        </section>

        <section className='cardContent'>
          <div>
            <p>Meet the heroes. He partakes in the universe's struggle for separatist liberation.</p>
          </div>

          <div>
            <img src={CloneFace} alt='battle' />
          </div>
        </section>

      </div>

    </div>
  )
}
