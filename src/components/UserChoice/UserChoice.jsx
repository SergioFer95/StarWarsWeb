import React, { useState } from 'react'

// IMAGES:
import Kylo from './assets/images/Kylo.jpg';
import Rey from './assets/images/Rey.jpg';
import KyloReverse from './assets/images/KyloReverse.jpg';
import ReyReverse from './assets/images/ReyReverse.jpg';

export default function UserChoice() {
  let [sideSelection, setSideSelection] = useState('Now is your turn to choose your own side of the force')

  let [rey, setRey] = useState(Rey)

  let [kylo, setKylo] = useState(Kylo)

  let darkSide = () =>{
    setSideSelection(sideSelection = 'Marvelous, you´ve got DARK SIDE inside you!')
    setRey(rey = KyloReverse)
  }

  let lightSide = () =>{
    setSideSelection(sideSelection = 'Thanks to the force, the LIGHT SIDE is inside you')
    setKylo(kylo = ReyReverse)
    darkSide = null;
  }


  return (

    <section className='ChoiceContainer'>
        <div className='ChoiceContainer__imageContainer' onClick={darkSide}>
            <img src={kylo} alt='KyloImage' 
            className='ChoiceContainer__imageContainer__img--red'
            />
        </div>

        <div className='ChoiceContainer__choiceText'>
            <p className='ChoiceContainer__choiceText__paragraph'>{sideSelection}</p>
        </div>

        <div className='ChoiceContainer__imageContainer' onClick={lightSide}>
            <img src={rey} alt='ReyImage' 
            className='ChoiceContainer__imageContainer__img--blue'
            />
        </div>
    </section>
  )
}
