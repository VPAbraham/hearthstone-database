import React from 'react';
import './Card.scss';

export const Card = (props) => {
  const { name, imageUrl, pokedexNum,
    hp, attacks, resistances, weaknesses, rarity,
    types, set, artist } = props;

  return(
    <div className='card'>
      <h1>{name}</h1>
      <p>Pokedex No. {pokedexNum}</p>
      <p>Type: {types}</p>
      <p>Rarity: {rarity}</p>
      <img src={imageUrl} alt={name}/>
    </div>
  )
}

export default Card;