import React, { Component } from 'react';
import './FilterBar.scss';
import images from '../../assets/images';

class FilterBar extends Component {
  constructor() {
    super()
    this.state = {}
  }


  render() {
    return (
      <div className='filter-bar'>
        <section className='mana-filter'>
          <h3>Mana</h3>
          <div className='filter-divider'></div>
          <ul className='mana-ul-1'>
            <li>0</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
          <ul className='mana-ul-2'>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9+</li>
          </ul>
        </section>
        <section className='rarity-filter'>
          
        </section>
        <section className='set-filter'>

        </section>
      </div>
    )
  }
}

export default FilterBar