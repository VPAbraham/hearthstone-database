import React, { Component } from 'react';
import './FilterBar.scss';
import images from '../../assets/images';
import { mana } from './mana.svg';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCardCollection } from '../../actions/index';
import { getCards } from '../../apiCalls/apiCalls';

class FilterBar extends Component {
  constructor() {
    super()
    this.state = {
      currentFilter: null,
      currentCards: null
    }
  }

  async componentDidMount() {
    let cards = await getCards()
    this.setState({
      currentCards: cards,
    })
    this.props.setCardCollection(cards)
  }

  handleChange = (e) => {
    e.preventDefault()
    const filterParam = e.currentTarget.id
    console.log(filterParam)
    this.setState ({
      currentFilter: filterParam
    })
    console.log(this.state)
  }

  handleCards = async () => {
  }




  render() {
    const {
      common, rare, epic, legendary, uncraftable,
      basicIcon, classicIcon, woodIcon, boomIcon,
      saviorsIcon, shadowsIcon, rumbleIcon, manaIcon
    } = images;

    const pokemonTypes = ['bug', 'dark', 'dragon', 'electric', 
    'fairy', 'fighting','fire', 'flying', 'ghost', 'grass', 'ground', 
    'ice', 'normal', 'poison', 'psychic', 'rock', 'steel', 'water']

    const typeDisplay = pokemonTypes.map(type => {
      return (
        <li filter-id='type' type-id={type}>
          <img src={images.type} alt='type symbol'/>
        </li>
      )
    })

    return (
      <div className='filter-bar'>
        <section className='mana-filter'>
          <h3>Type</h3>
          <div className='filter-divider'></div>
          <ul className='mana-ul-1'>
           {typeDisplay}
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
            <li><img className='rarity-gem' src={common} id='common' alt='common card gem' onClick={((e) => this.handleChange(e))}/>Common</li>
            <li><img className='rarity-gem' src={rare} id='uncommon' alt='uncommon card gem' onClick={((e) => this.handleChange(e))}/>Uncommon</li>
            <li><img className='rarity-gem' src={epic} id='rare' alt='epic card gem' onClick={((e) => this.handleChange(e))}/>Rare</li>
            <li><img className='rarity-gem' src={legendary} id='rare-holo' alt='legendary card gem' onClick={((e) => this.handleChange(e))}/>Rare Holographic</li>
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


export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setCardCollection
  }, dispatch)
)

export default connect(null, mapDispatchToProps)(FilterBar);
