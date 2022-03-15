import React, { useState, useEffect } from 'react';
import CoverEpisodeI from '../assets/FilmsCover/Episode-I.jpg';

export default function InfoEpisodeI() {
    const [episode1, setEpisode1] = useState([])

    useEffect(() => {
        fetch('https://swapi.dev/api/films/4/')
        .then(data => data.json())
        .then(data => {console.log(data); setEpisode1(data)})
    },[]);
   

    return (
        <div>
            <section>
                <img src={CoverEpisodeI} alt='EpisodeICover'/>
            </section>

            {episode1.map((epi, index) => {
                return (
                    <section key={index}>
                        <h3>{epi.title}</h3>
                        <p>OPENING: {epi.opening_crawl}</p>
                        <h4>Director: {epi.director}</h4>
                        <h4>Producer: {epi.producer}</h4>
                        <p>Release Date: {epi.release_date}</p>
                    </section>
                )
            })}
        </div>
    )
}
