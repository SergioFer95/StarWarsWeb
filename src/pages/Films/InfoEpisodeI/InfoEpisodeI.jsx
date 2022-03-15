import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CoverEpisodeI from '../assets/FilmsCover/Episode-I.jpg';

export default function InfoEpisodeI() {
    const [episode1, setEpisode1] = useState([])

    useEffect(() => {
        fetch('https://swapi.dev/api/films/4/')
            .then(data => data.json())
            .then(data => setEpisode1(data))
        });
   

    return (
        <div>
            <section>
                <img src={CoverEpisodeI} alt='EpisodeICover'/>
            </section>

            {episode1.map((episode) => {
                return (
                    <section key={episode.episode_id}>
                        <h3>{episode.title}</h3>
                        <p>OPENING: {episode.opening_crawl}</p>
                        <h4>Director: {episode.director}</h4>
                        <h4>Producer: {episode.producer}</h4>
                        <p>Release Date: {episode.release_date}</p>
                    </section>
                )
            })}
        </div>
    )
}
