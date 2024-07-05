import React from 'react';
import './styles/pokeFooter.css'

const PokeFooter = () => {
  return (
    <div className='pokefooter'>
    <div className='pokefooter__red'>
     <figure className='pokefooter__img'>
         <img src="../../../assets/pokedex.png" alt="pokedex image" />
         </figure>
    </div>
    <div className='pokefooter__black'>
       <div className='pokefooter__outcircle'>
          <div className='pokefooter__incircle'></div>
       </div>
    </div>
 </div>
  )
}

export default PokeFooter;