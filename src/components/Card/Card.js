import React from 'react';
import './Card.scss';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setSelectedCard } from '../../actions';
import { Link } from 'react-router-dom';


export const Card = (props) => {
  const { name, imageUrl, pokedexNum, rarity,
    types, setSelectedCard } = props;


  return(
    <Link to='/cardinfo'>
      <div className='card-border'>
        <div className='card' onClick={(() => setSelectedCard(props))}>
          <h1>{name}</h1>
          <p>Pokedex No. {pokedexNum}</p>
          <p>Type: {types}</p>
          <p>Rarity: {rarity}</p>
          <button>See More Details</button>
          <img src={imageUrl} alt={name}/>
        </div>
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

Card.propTypes = {
  setSelectedCard: PropTypes.func,
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  pokedexNum: PropTypes.string,
  rarity: PropTypes.string,
  types: PropTypes.array,
  set: PropTypes.func,
}