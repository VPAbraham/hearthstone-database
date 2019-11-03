import React from 'react';
import './Card.scss';

const Card = (props) => {
  const { name, imageUrl, pokedexNum,
    hp, attacks, resistances, weaknesses, rarity,
    types, set, artist } = props

    const valueChecker = (propVal) => {
      if(propVal) {
        return propVal[0]
      } else {
        return 'N/A'
      }
    }

  return(
    <div className='card'>
      <h1>{name}</h1>
      <p>Pokedex No. {pokedexNum}</p>
      <p>Type: {valueChecker(types)}</p>
      <p>Rarity: {rarity}</p>
      <img src={imageUrl} alt={name}/>
    </div>
  )
}

export default Card;