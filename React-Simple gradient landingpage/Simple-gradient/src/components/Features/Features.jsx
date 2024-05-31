import React from 'react';
import './Features.css';
import { features } from '../../utils/constants';
const Features = () => {
  return (
    <section className='features'>
      <div className='features__heading-container'>
        <h2 className='h2 features__heading'>
          Lorem ipsum, dolor sit
          <span className='h2 features__heading-gradient'>SmartNotes</span>
        </h2>
        <p className='text-reg features__subheading'>
          {' '}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis fuga sit
          sapiente, vero quia, maxime magnam tempora nemo, nam pariatur neque quam rem
          quibusda mlitia. Officiis, eligendi deserunt.
        </p>
      </div>
      <div className='features__feature-container'>
        {features.map((obj, i) => (
          <div className={`feature ${obj.gridArea}`} key={i}>
            <img src={obj.image} alt={obj.heading} className='feature__icon' />
            <p className='text-reg feature__heading'>{obj.heading}</p>{' '}
            <p className='text-reg feature__description'>{obj.description}</p>
          </div>
        ))}
      </div>
      <div className='features__overlay-gradient'></div>
    </section>
  );
};

export default Features;
