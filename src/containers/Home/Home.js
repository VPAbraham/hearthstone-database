import React from 'react';
import './Home.scss';
import CardContainer  from '../CardContainer/CardContainer';
import FilterBar from '../FilterBar/FilterBar';

const Home = () => {
  return(
    <div className='home'>
      <FilterBar />
      <CardContainer />
    </div>
  )
}

export default Home;