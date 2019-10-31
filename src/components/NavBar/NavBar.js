import React from 'react';
import './NavBar.scss';
import images from '../../assets/images';

const NavBar = () => {
  console.log(images)

  return (
    <nav className='nav-bar'>
      <img className='hs-logo' src={images.hsLogo} alt='Hearthstone logo'/>
      <div className='nav-logo'>
        
        <h1>HearthDB</h1>
          <h4>HEARTHSTONE CARD DATABASE & DECK TRACKER</h4>
      </div>
      <div className='nav-search'>
        <label for='card-search' >Search for a card</label>
        <input 
        type='text' 
        id='card-search' 
        name='card-search'
        // placeholder='Input Card Name'
       />
      </div>
    </nav>
  )
}

export default NavBar;