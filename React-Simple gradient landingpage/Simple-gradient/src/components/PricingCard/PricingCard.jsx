import React from 'react';
import './PricingTitle.css';
const PricingTitle = ({
  plan,
  planIcon,
  planPrice,
  planPeriod,
  bullets,
  CallToAction,
}) => {
  const dark = darkMode ? 'dark' : '';
  const price =
    planPeriod === '/ Monthly' ? '$' + planPrice : '$' + planPrice * 12 * 0.75;
  return (
    <div className={`pricing__card ${dark}`}>
      <div className='plan-section'>
        <img src={planIcon} className='plan-section__icon' alt={plan} />
        <p className='text-small plan-section_text'></p>
      </div>
      <div className='pricing-section'>
        <h2 className='h2 pricing-section__price'>{planPrice ? price : 'Custom'}</h2>
        <p className={`text-teg pricing-section__period ${dark}`}>
          {planPrice ? planPeriod : ''}
        </p>
      </div>
      <div className='bullet-section'>
        {bullets.map((bullet, i) => {
          return (
            <p key={i} className='text-reg bullet-section__text'>
              {bullet}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default PricingTitle;
