import React, { Component } from 'react';
import './FilterBar.scss';
import images from '../../assets/images';
import { mana } from './mana.svg';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCardCollection, setFilterType, setFilterCriteria } from '../../actions/index';
import { getCards } from '../../apiCalls/apiCalls';

class FilterBar extends Component {
  constructor() {
    super()
    this.state = {
      currentFilter: null,
      currentCards: null,
      filterType: null,
      filterCriteria: null
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
    const filterType = e.currentTarget.className
    const filterCriteria = e.currentTarget.id
    this.props.setFilterCriteria(filterCriteria)
    this.props.setFilterType(filterType)
  
  }

  filterClickHandler = async (e) => {
    e.preventDefault();
    
  }




  render() {
    const {
      common, rare, uncommon, rareholo,
      basicIcon, classicIcon, woodIcon, boomIcon,
      saviorsIcon, shadowsIcon, rumbleIcon, manaIcon
    } = images;

    const pokemonTypes = ['bug', 'dark', 'dragon', 'electric', 
    'fairy', 'fighting','fire', 'flying', 'ghost', 'grass', 'ground', 
    'ice', 'normal', 'poison', 'psychic', 'rock', 'steel', 'water']

    const typeDisplay = pokemonTypes.map(type => {
      return (
        <li >
          <img className='types' id={type} src={images[type]} alt='type symbol' onClick={((e) => this.handleChange(e))}/>
        </li>
      )
    })

    const rarityDisplay = ['common', 'uncommon', 'rare', 'rareholo'].map(rarity => {
      const imgSrc = eval(rarity)
      return (
        <li>
          <img className='rarity' id={rarity} src={imgSrc} alt='rarity gem' onClick={((e) => this.handleChange(e))}/>
        </li>
      )
    })

    const pokemonSets = ['base1', 'base2', 'base3', 'base4', 'base5', 'gym1', 'gym2']

    const setDisplay = pokemonSets.map(set => {
      const imgSrc = ('https://images.pokemontcg.io/' + set + '/symbol.png')
      console.log(imgSrc)
      return (
        <li className='set' id={set} onClick={((e) => this.handleChange(e))}>
          <p>{set}</p>
          <img  src={imgSrc}  alt='set icon'/>
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
        </section>
        <section className='rarity-filter'>
            <h3>Rarity</h3>
            <div className='filter-divider'></div>
          <ul>
            {rarityDisplay}
          </ul>
        </section>
        <section className='set-filter'>
          <h3>Set</h3>
          <div className='filter-divider'></div>
          <ul>
            {setDisplay}
          </ul>
        </section>
      </div>
    )
  }
}


export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setCardCollection,
    setFilterCriteria,
    setFilterType
  }, dispatch)
)

export default connect(null, mapDispatchToProps)(FilterBar);
