import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function SingleCharacterInfo() {
    const [singleCharacter, setSingleCharacter] = useState([]);
    const { id } = useParams();

    const baseUrlSingleInfo = 'https://akabab.github.io/starwars-api/api';

    useEffect(() => {
        fetch(`${baseUrlSingleInfo}/id/${id}.json`)
            .then(data => data.json())
            .then(data => setSingleCharacter(data))
    },[id])

    return (
        <div className='singleCharacterContainer'>
            <h2>Character Information</h2>
            {singleCharacter.map((singleInfo) => {
                return (
                    <section className='singleCharacterInfo' key={singleInfo.id}>
                        <h3>{singleInfo.name}</h3>
                        <p>Gender: {singleInfo.gender}</p>
                        <p>Homeworld: {singleInfo.homeworld}</p>
                        <p>species: {singleInfo.species}</p>

                        <h3>Affiliations:</h3>
                        <p>affiliations {singleInfo.affiliations}</p>

                        <h3>Masters:</h3>
                        <p>masters {singleInfo.masters}</p>

                        <h3>Apprentices:</h3>
                        <p>apprentices {singleInfo.apprentices}</p>
                    </section>
                )
            })}


        </div>
    )
}
