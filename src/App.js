import React, { Component } from 'react';
import './App.css';
import Classic from './Classic/Classic';
import Basic from './Basic/Basic';
import Boomsday from './Boomsday/Boomsday';
import RoS from './RoS/RoS';
import Rumble from './Rumble/Rumble';
import Uldum from './Uldum/Uldum';
// import Woods from './Woods/Woods;'

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
  componentDidMount() {
    fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
        "x-rapidapi-key": "5f79c75fb8msh667198defcb0eb4p19a6e3jsnd10cd6e77216"
      }
    })
      .then(response => response.json())
      .then(data => 
        this.setState({
          basic: data.Basic,
          classic: data.Classic,
          woods: data['The Witchwood'],
          boomsday: data['The Boomsday Project'],
          rumble: data['Rastakhan\'s Rumble'],
          rOS: data['Rise of Shadows'],
          uldum: data['Saviors of Uldum']
        })
      )

    fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
        "x-rapidapi-key": "5f79c75fb8msh667198defcb0eb4p19a6e3jsnd10cd6e77216"
      }
    })
      .then(response => response.json())
      .then(data => console.log(data))
    
  }

  render() {
    return (
      <section>
        <h1>Main Page</h1>
        <Basic setData={this.state.basic} />
        <Classic setData={this.state.classic} />
        <Boomsday setData={this.state.boomsday} />
        <Rumble setData={this.state.rumble} />
        <RoS setData={this.state.rOS} />
        <Uldum setData={this.state.uldum} />

      </section>  
    )
  }
}

export default App;
