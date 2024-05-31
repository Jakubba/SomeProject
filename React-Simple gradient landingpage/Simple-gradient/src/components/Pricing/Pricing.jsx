import React, { useState } from 'react';
import './Pricing.css';
import pricingData from '../../utils/constants';
import PricingCard from '../PricingCard/PricingCard';
const Pricing = () => {
  const [planPeriod, setPlanPeriod] = useState('/ Monthly');

  const planPeriodToogle = () => {
    planPeriod === '/ Monthly' ? setPlanPeriod('/ Yearly') : setPlanPeriod('/ Monthly');
  };
  return (
    <section className='pricing'>
      <div className='pricing__heading-section'>
        <h3 className='h3 pricing__heading'>Pricing & Plans</h3>
        <p className='text-reg pricing__subheading'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. hil sunt ratione ut
          voluptate, veniam facilis reiciendis deserunt? Harum dolorum architecto
        </p>
      </div>
      <div className='pricing__billing-section'>
        <p className='text-med pricing__period-text'>Monthly</p>
        <label className='toggle'>
          <input type='checkbox' className='toggle__input' />
          <span className='toggle__circle' onClick={planPeriodToogle}></span>
        </label>
      </div>
      <p className='text-med pricing__period-text'>Yearly</p>
      <span className='text-small pricing__savings'>Save 25%</span>
      <div className='pricing__title-section'>
        {pricingData.map((obj, i) => (
          <PricingCard key={i} {...obj} planPeriod={planPeriod} />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
