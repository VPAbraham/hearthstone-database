import React from 'react';
import './ClassBar.scss';
import images from '../../assets/images';


const ClassBar = () => {
  const { druidImg, hunterImg, mageImg, paladinImg, priestImg, rogueImg, shamanImg, warlockImg, warriorImg} = images
  return(
    <section className='class-bar'>
      <ul className='class-selector'>
        <li className='class-icon'>
          <img className='class-img' src={druidImg} />
        </li>
        <li className='class-icon'>
          <img className='class-img' src={hunterImg} />
        </li>
        <li className='class-icon'>
          <img className='class-img' src={mageImg} />

        </li>
        <li className='class-icon'>
          <img className='class-img' src={paladinImg} />

        </li>
        <li className='class-icon'>
          <img className='class-img' src={priestImg} />

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