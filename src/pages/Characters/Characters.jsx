import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Characters() {
  const [characters, setCharacters] = useState([]);

  const baseUrl = 'https://akabab.github.io/starwars-api/api';

  useEffect(() => {
    fetch(`${baseUrl}/all.json`)
      .then(data => data.json())
      .then(data => setCharacters(data))
  })

  return (
    <>
      <h2 className='titlePage'>- CHARACTERS -</h2>
      <div className='charactersContainer'>
        {characters.map((character) => {


          if (character.image === undefined) {
            return (character.style.display = 'none');
          }

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
