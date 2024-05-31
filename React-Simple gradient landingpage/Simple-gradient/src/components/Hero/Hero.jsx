import React from 'react';
import './Hero.css';

import arrow from '../../assets/arrow.svg';
import abstractShapes from '../../assets/abstract-shapes.png';
const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero__column'>
        <h1 className='h1 hero__heading'>
          <span className='gero__heading-gradinet'>Intelligent</span>
          cloud-based{''}
          <span className='gero__heading-gradinet'>note-taking</span>
          and collaboration tool
        </h1>
        <p className='text-reg hero__subheading'>
          Experience the power of smart note-taking and transform the way you work today.
        </p>
        <div className='hero__input-container'>
          <input className='hero__input' type='email' placeholder='Enter your email' />
          <button className='text-reg hero__submit'>
            Sign up
            <img src={arrow} alt='' className='hero__arrow' />
          </button>
        </div>
      </div>
      <div className='hero__column'>
        <img src={abstractShapes} alt='abstract shapes' className='hero__graphic' />
      </div>
    </section>
  );
};

export default Hero;
