import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

// CAROUSEL IMAGES:
import ChangeSaber from './assets/images/changeSaber.jpeg'
import BattleShip from './assets/images/BattleShips.jpg';
import Grievous from './assets/images/Grievous.jpg';
import Yoda from './assets/images/YodaBattle.jpg';

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
                    src={Yoda}
                    alt="Fourth slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}
