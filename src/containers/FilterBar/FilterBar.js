import React, { Component } from 'react';
import './FilterBar.scss';
import PropTypes from 'prop-types'
import images from '../../assets/images';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCardCollection, setFilterType, setFilterCriteria, toggleLoading } from '../../actions/index';
import { getCards } from '../../apiCalls/apiCalls';

export class FilterBar extends Component {

  async componentDidMount() {
    this.props.toggleLoading(true);
    let cards = await getCards();
    this.props.setCardCollection(cards);
    this.props.toggleLoading(false)
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
    await this.handleChange(e);
    const { filterType, filterCriteria } = this.props;
    this.props.toggleLoading(true);
    const newCards = await getCards(filterType, filterCriteria)
    this.props.setCardCollection(newCards)
    this.props.toggleLoading(false)
  }


  render() {
    const {
      common, rare, uncommon, rareholo
    } = images;

    const pokemonTypes = ['bug', 'dark', 'dragon', 'electric', 
    'fairy', 'fighting','fire', 'flying', 'ghost', 'grass', 'ground', 
    'ice', 'normal', 'poison', 'psychic', 'rock', 'steel', 'water']

    const typeDisplay = pokemonTypes.map(type => {
      return (
        <li key={type}>
          <img className='types' id={type} src={images[type]} alt='type symbol' onClick={((e) => this.filterClickHandler(e))}/>
        </li>
      )
    })

    const rarityDisplay = ['common', 'uncommon', 'rare', 'rareholo'].map(rarity => {
      const imgSrc = eval(rarity)
      return (
        <li key={rarity}>
          <img className='rarity' id={rarity} src={imgSrc} alt='rarity gem' onClick={((e) => this.filterClickHandler(e))}/>
        </li>
      )
    })

    const pokemonSets = ['base1', 'base2', 'base3', 'base4', 'base5', 'gym1', 'gym2']

    const setDisplay = pokemonSets.map(set => {
      const imgSrc = ('https://images.pokemontcg.io/' + set + '/symbol.png')
      return (
        <li className='set' id={set} key={set} onClick={((e) => this.filterClickHandler(e))}>
          <p>{set}</p>
          <img  src={imgSrc}  alt='set icon'/>
        </li>
      )
    })

    return (
      <div className='filter-bar'>
        <button onClick={((e) => this.filterClickHandler(e))}>CLEAR FILTERS</button >
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


export const mapStateToProps = ({ filterCriteria, filterType }) => ({
  filterCriteria,
  filterType
})

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setCardCollection,
    setFilterCriteria,
    setFilterType,
    toggleLoading
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);

FilterBar.propTypes = {
  setCardCollection: PropTypes.func.isRequired,
  setFilterCriteria: PropTypes.func.isRequired,
  setFilterType: PropTypes.func.isRequired,
  toggleLoading: PropTypes.func.isRequired,
  filterCriteria: PropTypes.string.isRequired,
  filterType: PropTypes.string.isRequired
}