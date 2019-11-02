import React from 'react';
import './Card.scss';

const Card = (props) => {
  console.log(props)
  const { name, cardId, dfbId, cardSet, img, playerClass, type, text } = props

  return(
    <div className='card'>
      <h1>{name}</h1>
      <p>Class:{playerClass}</p>
      <p>Type: {type}</p>
      <p>Card Set: {cardSet}</p>
      <p>Flavor Text:{text}</p>
      <p>{img}</p>
      <img src={img} alt={name}/>
    </div>
  )
}

export default Card;