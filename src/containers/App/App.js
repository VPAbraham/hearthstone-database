import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.scss';
import images from '../../assets/images';
import NavBar from '../../components/NavBar/NavBar';
import FilterBar from '../FilterBar/FilterBar';
import ClassBar from '../../components/ClassBar/ClassBar';
import CardContainer from '../CardContainer/CardContainer';
import { connect } from 'react-redux';

class App extends Component {

  async componentDidMount() {
  }

  render() {
    const { hsBack } = images;
    return (
      <Router>
        <section>
          <NavBar />
          <img className='background-image' src={hsBack} alt='background poster'/>
          <ClassBar />
          <FilterBar />
          <CardContainer />  
        </section>
      </Router>    
    )
  }
}

export default App;
