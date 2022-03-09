import React from 'react'
import Logo from '../Logo/Logo'

export default function Footer() {
    return (
        <footer className='footerContainer'>
            
            <div className='textContainer'>
                <Logo />
                <h3>You can follow the force here:</h3>
            </div>

            <div className='socialMedia'>
                <a href='https://www.instagram.com/starwars/?hl=es'>
                <i className="fa-brands fa-instagram"></i>
                </a>

                <a href='https://www.facebook.com/StarWars'>
                <i className="fa-brands fa-facebook"></i>
                </a>

                <a href='https://twitter.com/starwars'>
                <i className="fa-brands fa-twitter"></i>
                </a>

                <a href='https://www.youtube.com/user/starwars'>
                <i className="fa-brands fa-youtube"></i>
                </a>

            </div>

        </footer>

    )
}
