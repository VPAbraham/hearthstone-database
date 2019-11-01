import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.scss';
import images from '../../assets/images';
import NavBar from '../../components/NavBar/NavBar';
import FilterBar from '../FilterBar/FilterBar';
import ClassBar from '../../components/ClassBar/ClassBar';
import { getAllCards, getCardsByClass } from '../../apiCalls/apiCalls';
class App extends Component {
  constructor() {
    super()
    this.state = {
      cards: [],
      selectedSet: null
    }
  }
  componentDidMount() {
    getCardsByClass('Hunter')
  }

  render() {
    const { hsBack } = images;

    return (
      <Router>
        <section>
          <NavBar />
          <img className='background-image' src={hsBack} alt='background image'/>

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
          <Switch>
            <Route path='/basic'>
            </Route>  
            <Route path='/classic'>
            </Route>
            <Route path='/boomsday'>  
            </Route>
            <Route path='/rumble'>  
            </Route>
            <Route path='/rOS'>  
            </Route>
            <Route path='/uldum'>  
            </Route>
            <Route path='/witchwood'>  
            </Route>  
          </Switch>    
        </section>
      </Router>    
    )
  }
}

export default App;
