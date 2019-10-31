import React from 'react';
import Card from '../Card/Card'

const Classic = ({ setData }) => {
  console.log(setData)
  const setCards = setData.map(card => {
    return (
      <Card 
      cardId={card.cardId}
      name={card.name}
      class={card.playerClass}
      cost={card.cost}
      img={card.img}
      rarity={card.rarity}
      text={card.text}
      type={card.type}
      faction={card.faction}
      mechanics={card.mechanics}
      />
    )
  })

  return (
    <section>
      <h2>Classic</h2>
      {setCards}
    </section>  
  )
}
export default Classic;