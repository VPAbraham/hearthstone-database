import React from 'react';
import './CardInfo.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export const CardInfo = (props) => {
  const { selCard } = props;
  console.log(selCard)
  return (
    <section className='card-info'>
      
      <h1>Card Data for {selCard.name}</h1>
      <div className='info-container'>
        <img src={selCard.imageUrl} alt='card image'/>
        <div>
          <p>Pokedex No. {selCard.pokedexNum}</p>
          <p>HP: {selCard.hp}</p>
          {/* <p>Attacks: {selCard.attacks}</p> */}
          <p>Rarity: {selCard.rarity}</p>
          <p>Set: {selCard.set}</p>
          <p>Art by: {selCard.artist}</p>
          {/* <p>Type: {selCard.types[0] || 'n/a'}</p> */}
      

        </div>
      </div>
      <Link to='/'>
        <button>Return to Main Page</button>
      </Link>
    </section>
  )
}


export const mapStateToProps = ({ selCard }) => ({
  selCard
})
export default connect(mapStateToProps)(CardInfo);