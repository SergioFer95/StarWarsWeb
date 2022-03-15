import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Characters() {
  const [characters, setCharacters] = useState([]);

  const baseUrl = 'https://akabab.github.io/starwars-api/api';

  useEffect(() => {
    let mounted = true;
    fetch(`${baseUrl}/all.json`)
      .then(data => data.json())
      .then(data => setCharacters(data))
    return function cleanUp() {
      mounted = false;
    }
  }, [])



  return (
    <>
      <h2 className='titlePage'>- CHARACTERS -</h2>
      <div className='charactersContainer'>

        {characters.filter((clear) => {
          return clear.name !== 'Lobot'
            || 'Mon Mothama' || 'Roos Tarpals'
            || 'Shmi Skywalker' || 'Ratts Tyerell'
            || 'Gasgano' || 'Saesee Tiin'
            || 'Yarael Poof' || 'Cordé' || 'Luminara Unduli'
            || 'San Hill' || 'Sly Moore'
        }).map((character) => {
          return (
            <section key={character.id} className='charactersContainer__infoContainer'>
              <img src={character.image} alt='characterImage' className='infoContainer__pic' />

              <Link to={`SingleCharacter/${character.id}`} className='infoContainer__link'>
                <h2 className='infoContainer__name'>{character.name}</h2>
              </Link>

            </section>
          )
        })}

      </div>
    </>
  )
}
