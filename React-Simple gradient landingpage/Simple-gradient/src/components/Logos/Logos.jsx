import React from 'react';
import './Logos.css';
import { logos } from '../../utils/constants.js';
const Logos = () => {
  return (
    <section className='logos'>
      <div className='logos__slide'>
        {logos.map((logo, i) => (
          <img key={i} src={logo} alt='logo' className='logos__logo' />
        ))}
        {logos.map((logo, i) => (
          <img key={i} src={logo} alt='logo' className='logos__logo' />
        ))}
      </div>
      <div className='logos__overlay logos__overlay_left'></div>
      <div className='logos__overlay logos__overlay_right'></div>
    </section>
  );
};

export default Logos;
