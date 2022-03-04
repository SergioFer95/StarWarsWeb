import React from 'react';
import StarWarsLogo from './assets/logo/starWarsLogo.png';

export default function Logo() {
  return (
    <div className="logoContainer">
        <img src={StarWarsLogo} alt='StarWarsLogo' className='logoContainer__img'/>
    </div>
  )
}
