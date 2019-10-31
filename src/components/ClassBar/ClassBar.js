import React from 'react';
import './ClassBar.scss';
import images from '../../assets/images';


const ClassBar = () => {
  const { druidImg, hunterImg, mageImg, paladinImg, priestImg, rogueImg, shamanImg, warlockImg, warriorImg} = images
  return(
    <section className='class-bar'>
      <h4>Choose A Class</h4>
      <ul className='class-selector'>
        <li className='class-icon'>
          <img className='class-img' src={druidImg} alt='Druid class icon'/>
        </li>
        <li className='class-icon'>
          <img className='class-img' src={hunterImg} alt='Hunter class icon'/>
        </li>
        <li className='class-icon'>
          <img className='class-img' src={mageImg} alt='Mage class icon'/>
        </li>
        <li className='class-icon'>
          <img className='class-img' src={paladinImg} alt='Paladin class icon'/>

        </li>
        <li className='class-icon'>
          <img className='class-img' src={priestImg} alt='pri'/>

        </li>
        <li className='class-icon'>
          <img className='class-img' src={rogueImg} />

        </li>
        <li className='class-icon'>
          <img className='class-img' src={shamanImg} />

        </li>
        <li className='class-icon'>
          <img className='class-img' src={warlockImg} />

        </li>
        <li className='class-icon'>
          <img className='class-img' src={warriorImg} />

        </li>
      </ul>
    </section>
  )
}

export default ClassBar;