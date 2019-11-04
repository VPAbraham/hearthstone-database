import React from 'react';
import './NavBar.scss';
import images from '../../assets/images';
import { Link } from 'react-router-dom';


const NavBar = () => {

  return (
    <nav className='nav-bar'>
      <Link to='/'>
        <img className='hs-logo' src={images.pokeballLogo} alt='Hearthstone logo'/>
      </Link>
      <div className='nav-logo'>
        
        <h1>PokemonDB</h1>
          <h4>POKEMON CARD DATABASE & DECK TRACKER</h4>
      </div>
      <div className='nav-search'>
        <label >Search for a card</label>
        <input 
        type='text' 
        id='card-search' 
        name='card-search'
        placeholder='Sorry, this feature is under construction'
       />
      </div>
        <img className='construction' src='https://cdn.bulbagarden.net/upload/thumb/d/db/XY_Worker_A.png/171px-XY_Worker_A.png' alt='under construction icon'/>
    </nav>
  )
}

export default NavBar;