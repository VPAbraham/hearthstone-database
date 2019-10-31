import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.scss';
import images from '../../assets/images';
import NavBar from '../../components/NavBar/NavBar';
import FilterBar from '../FilterBar/FilterBar';
import ClassBar from '../../components/ClassBar/ClassBar';
import Classic from '../../Classic/Classic';
import Basic from '../../Basic/Basic';
import Boomsday from '../../Boomsday/Boomsday';
import RoS from '../../RoS/RoS';
import Rumble from '../../Rumble/Rumble';
import Woods from '../../Woods/Woods';
import Uldum from '../../Uldum/Uldum';

class App extends Component {
  constructor() {
    super()
    this.state = {
      basic: [],
      classic: [],
      woods: [],
      boomsday: [],
      rumble: [],
      rOS: [],
      uldum: []
    }
  }
  // componentDidMount() {
  //   fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards", {
  //     "method": "GET",
  //     "headers": {
  //       "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
  //       "x-rapidapi-key": "5f79c75fb8msh667198defcb0eb4p19a6e3jsnd10cd6e77216"
  //     }
  //   })
  //     .then(response => response.json())
  //     .then(data => 
  //       this.setState({
  //         basic: data.Basic,
  //         classic: data.Classic,
  //         woods: data['The Witchwood'],
  //         boomsday: data['The Boomsday Project'],
  //         rumble: data['Rastakhan\'s Rumble'],
  //         rOS: data['Rise of Shadows'],
  //         uldum: data['Saviors of Uldum']
  //       })
  //     )

  //   fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards", {
  //     "method": "GET",
  //     "headers": {
  //       "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
  //       "x-rapidapi-key": "5f79c75fb8msh667198defcb0eb4p19a6e3jsnd10cd6e77216"
  //     }
  //   })
  //     .then(response => response.json())
  //     .then(data => console.log(data))
    
  // }

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
          <FilterBar />
          <ClassBar />
          <Switch>
            <Route path='/basic'>
              <Basic setData={this.state.basic} />
            </Route>  
            <Route path='/classic'>
              <Classic setData={this.state.classic} />
            </Route>
            <Route path='/boomsday'>  
              <Boomsday setData={this.state.boomsday} />
            </Route>
            <Route path='/rumble'>  
              <Rumble setData={this.state.rumble} />
            </Route>
            <Route path='/rOS'>  
              <RoS setData={this.state.rOS} />
            </Route>
            <Route path='/uldum'>  
              <Uldum setData={this.state.uldum} />
            </Route>
            <Route path='/witchwood'>  
              <Woods setData={this.state.woods} />
            </Route>  
          </Switch>    
        </section>
      </Router>    
    )
  }
}

export default App;
