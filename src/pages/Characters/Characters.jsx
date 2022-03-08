import React, { useState, useEffect } from 'react'

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

          if (!character.image) {
            return character.style.display = 'none';
          }

          return (
            <section key={character.id} className='charactersContainer__infoContainer'>
              <img src={character.image} alt='characterImage' className='infoContainer__pic' />
              <h2 className='infoContainer__name'>{character.name}</h2>
            </section>
          )
        })}

      </div>
    </>
  )
}
