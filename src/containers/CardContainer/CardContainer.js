import React   from 'react';
import Card from '../../components/Card/Card';
import './CardContainer.scss';


const CardContainer = ({ currentCards }) => {
  console.log(currentCards) 
  let selectedCards = currentCards.map(card => {
    const { name, imageUrl, nationalPokedexNumber,
      hp, attacks, resistances, weaknesses, rarity,
      types, set, artist } = card
    return (<Card
      name={name || 'N/A'}
      imageUrl={imageUrl || 'N/A'}
      pokedexNum={nationalPokedexNumber || 'N/A'}
      hp={hp || 'N/A'}
      attacks={attacks || 'NA'}
      resistances={resistances || 'N/A'}
      weaknesses={weaknesses || 'N/A'}
      rarity={rarity || 'N/A'}
      key={imageUrl}
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