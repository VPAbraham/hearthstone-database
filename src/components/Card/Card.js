import React from 'react';
import './Card.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setSelectedCard } from '../../actions';
import { Link } from 'react-router-dom';


export const Card = (props) => {
  const { name, imageUrl, pokedexNum,
    hp, attacks, resistances, weaknesses, rarity,
    types, set, artist, setSelectedCard } = props;

    const selectCard = () => {
      setSelectedCard(props)
      console.log(props)
    }

  return(
    <Link to='/cardinfo'>
      <div className='card' onClick={((e) => selectCard(e))}>
        <h1>{name}</h1>
        <p>Pokedex No. {pokedexNum}</p>
        <p>Type: {types}</p>
        <p>Rarity: {rarity}</p>
        <button>See More Details</button>
        <img src={imageUrl} alt={name}/>
      </div>
    </Link>
  )
}


export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setSelectedCard
  }, dispatch)
)
export default connect(null, mapDispatchToProps)(Card);