import React   from 'react';
import Card from '../../components/Card/Card';
import './CardContainer.scss';
import loadingImg from '../../assets/images/loading.gif'
import { connect } from 'react-redux';


const CardContainer = (props) => {
  const { cards } = props;
  console.log(cards)

  let selectedCards = props.cards.map(card => {

    const { name, imageUrl, nationalPokedexNumber,
      hp, attacks, resistances, weaknesses, rarity,
      types, set, artist } = card

    return (<Card
      name={name || 'N/A'}
      imageUrl={imageUrl || 'N/A'}
      pokedexNum={nationalPokedexNumber || 'N/A'}
      hp={hp || 'N/A'}
      types={types}
      attacks={attacks || 'NA'}
      resistances={resistances || 'N/A'}
      weaknesses={weaknesses || 'N/A'}
      rarity={rarity || 'N/A'}
      key={imageUrl}
    />)
    }) 
  return(
    <section className='card-container'>
      {/* <img src={loadingImg} alt='loading spinner'/> */}
      {selectedCards}
    </section>
  )
}

export const mapStateToProps =( { cards, filterType } ) => ({
  cards,
  filterType
})

export default connect(mapStateToProps)(CardContainer);