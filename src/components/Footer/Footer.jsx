import React from 'react'
import Logo from '../Logo/Logo'

export default function Footer() {
    return (
        <footer className='footerContainer'>
            
            <div className='textContainer'>
                <Logo />
                <h3 className='textAndLogo__text'>You can follow the force here:</h3>
            </div>

            <div className='socialMedia'>
                <a href='https://www.instagram.com/starwars/?hl=es'>
                <i class="fa-brands fa-instagram"></i>
                </a>

                <a href='https://www.facebook.com/StarWars'>
                <i class="fa-brands fa-facebook"></i>
                </a>

                <a href='https://twitter.com/starwars'>
                <i class="fa-brands fa-twitter"></i>
                </a>

                <a href='https://www.youtube.com/user/starwars'>
                <i class="fa-brands fa-youtube"></i>
                </a>

            </div>

        </footer>

    )
}
