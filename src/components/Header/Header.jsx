import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

export default function Header() {
    return (
        <>
            <Logo />

            <nav className='navContainer'>
                <Link to='/'
                    className='navContainer__link'>
                    Home
                </Link>

                <Link to='Characters' className='navContainer__link'>
                Characters
                </Link>

                <Link to='Films' className='navContainer__link'>
                Films
                </Link>

                <Link to='Contact' className='navContainer__link'>
                Contact
                </Link>
            </nav>

        </>
    )
}
