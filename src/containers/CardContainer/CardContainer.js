import React   from 'react';
import Card from '../../components/Card/Card';
import './CardContainer.scss';
import loadingImg from '../../assets/images/loading.gif'
import { connect } from 'react-redux';


export const CardContainer = (props) => {
  let selectedCards = props.cards.map(card => {

    const { name, imageUrl, nationalPokedexNumber,
      hp, attacks, resistances, weaknesses, rarity,
      types, set, artist } = card

    return (<Card
      name={name || 'N/A'}
      imageUrl={imageUrl || 'N/A'}
      pokedexNum={nationalPokedexNumber || 'N/A'}
      hp={hp || 'N/A'}
      types={types || 'N/A'}
      attacks={attacks || 'N/A'}
      resistances={resistances || 'N/A'}
      weaknesses={weaknesses || 'N/A'}
      rarity={rarity || 'N/A'}
      key={imageUrl}
      set={set}
      artist={artist}
    />)
    });

  return(
    <section className='card-container'>
      {props.isLoading &&
      <img src={loadingImg} alt='loading spinner'/>
      }
      {!props.isLoading &&
       selectedCards
      }
    </section>
  )
}

export const mapStateToProps =( { cards, isLoading } ) => ({
  cards,
  isLoading
})

export default connect(mapStateToProps)(CardContainer);