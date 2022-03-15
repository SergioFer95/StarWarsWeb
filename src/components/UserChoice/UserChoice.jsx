import React from 'react'

// IMAGES:
import Kylo from './assets/images/Kylo.jpg';
import Rey from './assets/images/Rey.jpg';

export default function UserChoice() {
  return (

    <section className='ChoiceContainer'>
        <div className='ChoiceContainer__imageContainer'>
            <img src={Kylo} alt='KyloImage' 
            className='ChoiceContainer__imageContainer__img'
            />
        </div>

        <div className='ChoiceContainer__choiceText'>
            <p className='ChoiceContainer__choiceText__paragraph'>Now it's your turn to choose your own side of the force</p>
        </div>

        <div className='ChoiceContainer__imageContainer'>
            <img src={Rey} alt='ReyImage' 
            className='ChoiceContainer__imageContainer__img'
            />
        </div>
    </section>
  )
}
