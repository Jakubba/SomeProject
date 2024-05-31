import React from 'react';
import './App.css';

//fonts
import '../../fonts/fonts.css';

//images
import doubleQuote from '../../assets/double-quote.svg';

//components
import Page from '../Page/Page.jsx';
import Header from '../Header/Header.jsx';
import Navigation from '../Navigation/Navigation.jsx';
import Hero from '../Hero/Hero.jsx';
import Logos from '../Logos/Logos.jsx';
import Testimonial from '../Testimonial/Testimonial.jsx';
import Features from '../Features/Features.jsx';
import Video from '../Video/Video.jsx';
import Pricing from '../Pricing/Pricing.jsx';
import FAQ from '../FAQ/FAQ.jsx';
import CTA from '../CTA/CTA.jsx';
import Footer from '../Footer/Footer.jsx';
import Accordion from '../Accordion/Accordion.jsx';
function App() {
  return (
    <>
      <Page>
        <Header>
          <Navigation />
          <Hero />
        </Header>
        <Logos />
        <Testimonial>
          <h5 className='h5 testimonial__heading'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita deleniti
            aut impedit ipsum odio ut at. Repudiandae mollitia nihil quo natus hic
            veritatis. Vel ducimus non aut ut accusamus facere! Pariatur, odit quasi.
          </h5>
          <div className='testimonial__author-section'>
            <p className='text-reg testimonial__author'>John Doe</p>
            <p className='text-reg testimonial__organization'>John Deer</p>
          </div>
          <img src={doubleQuote} alt='double quote' className='testimonial__quotes' />
        </Testimonial>
        <Features />
        <Testimonial>
          <h5 className='h5 testimonial__heading'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita deleniti
            aut impedit ipsum odio ut at. Repudiandae mollitia nihil quo natus hic
            veritatis. Vel ducimus non aut ut accusamus facere! Pariatur, odit quasi.
          </h5>
          <div className='testimonial__author-section'>
            <p className='text-reg testimonial__author'>John Doe</p>
            <p className='text-reg testimonial__organization'>John Deer</p>
          </div>
          <img src={doubleQuote} alt='double quote' className='testimonial__quotes' />
        </Testimonial>
        <Video />
        <Testimonial>
          <h5 className='h5 testimonial__heading'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita deleniti
            aut impedit ipsum odio ut at. Repudiandae mollitia nihil quo natus hic
            veritatis. Vel ducimus non aut ut accusamus facere! Pariatur, odit quasi.
          </h5>
          <div className='testimonial__author-section'>
            <p className='text-reg testimonial__author'>John Doe</p>
            <p className='text-reg testimonial__organization'>John Deer</p>
          </div>
          <img src={doubleQuote} alt='double quote' className='testimonial__quotes' />
        </Testimonial>
        <Pricing />
        <Testimonial>
          <h5 className='h5 testimonial__heading'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita deleniti
            aut impedit ipsum odio ut at. Repudiandae mollitia nihil quo natus hic
            veritatis. Vel ducimus non aut ut accusamus facere! Pariatur, odit quasi.
          </h5>
          <div className='testimonial__author-section'>
            <p className='text-reg testimonial__author'>John Doe</p>
            <p className='text-reg testimonial__organization'>John Deer</p>
          </div>
          <img src={doubleQuote} alt='double quote' className='testimonial__quotes' />
        </Testimonial>
        <FAQ>
          <Accordion></Accordion>
        </FAQ>
        <Testimonial>
          <h5 className='h5 testimonial__heading'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita deleniti
            aut impedit ipsum odio ut at. Repudiandae mollitia nihil quo natus hic
            veritatis. Vel ducimus non aut ut accusamus facere! Pariatur, odit quasi.
          </h5>
          <div className='testimonial__author-section'>
            <p className='text-reg testimonial__author'>John Doe</p>
            <p className='text-reg testimonial__organization'>John Deer</p>
          </div>
          <img src={doubleQuote} alt='double quote' className='testimonial__quotes' />
        </Testimonial>
        <CTA />
        <Footer />
      </Page>
    </>
  );
}

export default App;
