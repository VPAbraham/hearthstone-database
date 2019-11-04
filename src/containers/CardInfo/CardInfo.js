import React from 'react';
import './CardInfo.scss';
import { connect } from 'react-redux';

export const CardInfo = (props) => {
  const { selCard } = props;
  console.log(selCard)
  return (
    <section className='card-info'>
      <h1>-- This is card info for {selCard.name}--</h1>
    </section>
  )
}


export const mapStateToProps = ({ selCard }) => ({
  selCard
})
export default connect(mapStateToProps)(CardInfo);