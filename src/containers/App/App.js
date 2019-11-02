import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.scss';
import images from '../../assets/images';
import NavBar from '../../components/NavBar/NavBar';
import FilterBar from '../FilterBar/FilterBar';
import ClassBar from '../../components/ClassBar/ClassBar';
import { getCards } from '../../apiCalls/apiCalls';
import CardContainer from '../CardContainer/CardContainer';
class App extends Component {
  constructor() {
    super()
    this.state = {
      currentCards: [],
    }
  }
  async componentDidMount() {
    await getCards()
    // const selectedCards = await getCardsBySet('');
    this.setState({
      // currentCards: selectedCards
    })
  }

  render() {
    const { hsBack } = images;
    return (
      <Router>
        <section>
          <NavBar />
          <img className='background-image' src={hsBack} alt='background poster'/>

          {/* <nav>
            <ul>
              <li>
                <Link to='/' exact>Home</Link>
              </li>
              <li>
                <Link to='/basic'>Basic</Link>
              </li>
              <li>
                <Link to='/classic'>Classic</Link> 
              </li>
              <li>
                <Link to='/boomsday'>The Boomsday Project</Link>
              </li>
              <li>
                <Link to='/rumble'>Rastakhan's Rumble</Link>
              </li>
              <li>
                <Link to='/rOS'>Rise of Shadows</Link>
              </li>
              <li>
                <Link to='/uldum'>Saviors of Uldum</Link>
              </li>
              <li>
                <Link to='/witchwood'>The Witchwood</Link>
              </li>
            </ul>
          </nav> */}
          <ClassBar />
          <FilterBar />
          <CardContainer key='' currentCards={this.state.currentCards}/>  
        </section>
      </Router>    
    )
  }
}

export default App;
