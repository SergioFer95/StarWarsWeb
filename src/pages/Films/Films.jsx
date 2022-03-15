import React from 'react'
import { Link } from 'react-router-dom';

// IMAGES:
import EpisodeI from './assets/FilmsCover/Episode-I.jpg';
import EpisodeII from './assets/FilmsCover/Episode-II.webp';
import EpisodeIII from './assets/FilmsCover/Episode-III.jpg';
import EpisodeIV from './assets/FilmsCover/Episode-IV.jpg';
import EpisodeV from './assets/FilmsCover/Episode-V.jpg';
import EpisodeVI from './assets/FilmsCover/Episode-VI.jpg';

export default function Films() {
  return (
    <div className='fatherFilmsContainer'>
      <h2 className='titlePage'>- FILMS -</h2>

      <section className='filmsContainer'>
        <Link to='/:EpisodeI'>
          <div className='cardFilm'>
            <div className='cardFilm__img'>
              <img src={EpisodeI} alt='CoverFilm' className='cardFilm__img__image' />
            </div>

            <h4>- EPISODE I -</h4>
            <h3>The Phantom Menace</h3>
          </div>
        </Link>



        <div className='cardFilm'>
          <div className='cardFilm__img'>
            <img src={EpisodeII} alt='CoverFilm' className='cardFilm__img__image' />
          </div>

          <h4>- EPISODE II -</h4>
          <h3>Attack of the Clones</h3>

        </div>

        <div className='cardFilm'>
          <div className='cardFilm__img'>
            <img src={EpisodeIII} alt='CoverFilm' className='cardFilm__img__image' />
          </div>

          <h4>- EPISODE III -</h4>
          <h3>Revenge of the Sith</h3>

        </div>

        <div className='cardFilm'>
          <div className='cardFilm__img'>
            <img src={EpisodeIV} alt='CoverFilm' className='cardFilm__img__image' />
          </div>

          <h4>- EPISODE IV -</h4>
          <h3>A New Hope</h3>

        </div>

        <div className='cardFilm'>
          <div className='cardFilm__img'>
            <img src={EpisodeV} alt='CoverFilm' className='cardFilm__img__image' />
          </div>

          <h4>- EPISODE V - </h4>
          <h3>The Empire Strikes Back</h3>

        </div>

        <div className='cardFilm'>
          <div className='cardFilm__img'>
            <img src={EpisodeVI} alt='CoverFilm' className='cardFilm__img__image' />
          </div>

          <h4>- EPISODE VI -</h4>
          <h3>Return of the Jedi</h3>

        </div>

      </section>

      

    </div>
  )
}
