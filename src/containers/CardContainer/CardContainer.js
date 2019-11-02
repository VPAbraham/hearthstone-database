import React, { Component } from 'react';
import Card from '../../components/Card/Card';
import './CardContainer.scss';


const CardContainer = ({ currentCards }) => {
  console.log(currentCards) 
  let selectedCards = currentCards.map(card => {
    return (<Card
      cardId={card.cardId || 'N/A'}
      dbfId={card.dbfId || 'N/A'}
      cardSet={card.cardSet || 'N/A'}
      name={card.name || 'N/A'}
      img={card.img}
      playerClass={card.playerClass || 'N/A'}
      type={card.type || 'N/A'}
      text={card.text || 'No flavor text available'}
      key={card.cardId}
    />)
    }) 
    console.log(selectedCards)
  return(
    <section className='card-container'>
      {selectedCards}
    </section>
  )
}


export default CardContainer;