import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import images from '../../assets/images';
import NavBar from '../../components/NavBar/NavBar';
import FilterBar from '../FilterBar/FilterBar';
import CardContainer from '../CardContainer/CardContainer';
import CardInfo from '../CardInfo/CardInfo';

export class App extends Component {

  render() {
    const { backGround } = images;
    return (
      <div className='App'>
          <NavBar />
          <img className='background-image' src={backGround} alt='background poster'/>
        <Route exact path='/'>
          <FilterBar />
          <CardContainer />  
        </Route>
        <Route exact path='/cardinfo'>
          <CardInfo />
        </Route>
      </div>
    )
  }
}

export default App;
