import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

// IMAGES IMPORTED:
import ChangeSaber from './assets/images/changeSaber.jpeg'
import BattleShip from './assets/images/BattleShips.jpg';

import Battle from './assets/images/Batlle.webp';
import Grievous from './assets/images/Grievous.webp';

export default function HomeCarousel() {
    return (
        <Carousel className='carouselAdded'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={ChangeSaber}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Grievous}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={BattleShip}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Battle}
                    alt="Fourth slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}
