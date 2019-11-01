import React, { Component } from 'react';
import './FilterBar.scss';
import images from '../../assets/images';
import { mana } from './mana.svg';

class FilterBar extends Component {
  constructor() {
    super()
    this.state = {}
  }


  render() {
    const {
      common, rare, epic, legendary, uncraftable,
      basicIcon, classicIcon, woodIcon, boomIcon,
      saviorsIcon, shadowsIcon, rumbleIcon, manaIcon
    } = images;

    return (
      <div className='filter-bar'>
        <section className='mana-filter'>
          <h3>Mana</h3>
          <div className='filter-divider'></div>
          <ul className='mana-ul-1'>
            <li style={{backgroundImage: `url('${mana}')`}}>0</li>
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
            <h3>Rarity</h3>
            <div className='filter-divider'></div>
          <ul>
            <li><img className='rarity-gem' src={common} alt='common card gem'/></li>
            <li><img className='rarity-gem' src={rare} alt='rare card gem'/></li>
            <li><img className='rarity-gem' src={epic} alt='epic card gem'/></li>
            <li><img className='rarity-gem' src={legendary} alt='legendary card gem'/></li>
            <li><img className='rarity-gem' src={uncraftable} alt='uncraftable card gem'/></li>
          </ul>
        </section>
        <section className='set-filter'>
          <h3>Set</h3>
          <div className='filter-divider'></div>
          <ul>
            <li><p>Basic</p><img src={basicIcon} alt='basic set icon'/></li>
            <li><p>Classic</p><img src={classicIcon} alt='classic set icon'/></li>
            <li><p>The Witchwood</p><img src={woodIcon} alt='witchwoods set icon'/></li>
            <li><p>The Boomsday Project</p><img src={boomIcon} alt='boomsday set icon'/></li>
            <li><p>Rastakhan's Rumble</p><img src={rumbleIcon} alt='rumble set icon'/></li>
            <li><p>Saviors of Uldum</p><img src={saviorsIcon} alt='saviors set icon'/></li>
            <li><p>Rise of Shadows</p><img src={shadowsIcon} alt='shadows set icon'/></li>
          </ul>
        </section>
      </div>
    )
  }
}

export default FilterBar