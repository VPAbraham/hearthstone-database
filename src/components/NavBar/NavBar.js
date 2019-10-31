import React from 'react';
import './NavBar.scss';

export const NavBar = () => {

  return (
    <nav className='NavBar'>
      <div>
        <h1>HearthDB</h1>
          <h4>HEARTHSTONE CARD DATABASE AND DECK TRACKER</h4>
      </div>
      <ul className='nav-items'>
        <li>Build a Deck</li>
        <li>Clear Deck</li>
        <li>Make a Deck</li>
        <li>Deck a Deck</li>
      </ul>
    </nav>
  )
}