import React from 'react'
import logo from './assets/logo/starWarsLogo.png';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>

            <nav>
                <Link to='/'>Home</Link>
                <Link to='Characters'>Characters</Link>
                <Link to='Films'>Films</Link>
                <Link to='Contact'>Contact</Link>
            </nav>
            
            <img src={logo} alt='logo' />
        </header>
    )
}
