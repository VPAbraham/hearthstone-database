import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.scss';
import images from '../../assets/images';
import NavBar from '../../components/NavBar/NavBar';
import FilterBar from '../FilterBar/FilterBar';
import CardContainer from '../CardContainer/CardContainer';
// import CardInfo from '../CardInfo/CardInfo';

import { connect } from 'react-redux';

export class App extends Component {

  render() {
    const { hsBack, backGround } = images;
    return (
      <div className='App'>
        <section className='App-main'>
          <NavBar />
          <img className='background-image' src={backGround} alt='background poster'/>
          <FilterBar />
          <CardContainer />  
        </section>
        {/* <Route exact path='/cardinfo/:pokedex' component={CardInfo}/> */}
      </div>
    )
  }
}

export default App;
