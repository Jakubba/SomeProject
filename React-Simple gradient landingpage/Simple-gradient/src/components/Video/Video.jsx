import React from 'react';
import './Video.css';
//images
import video from '../../assets/video.png';
import TLgradient from '../../assets/video.png';
import Brgradient from '../../assets/video.png';
const Video = () => {
  return (
    <section className='video'>
      <div className='video__container'>
        <img src={video} alt='video' className='video__image' />
        <button className='video__play'></button>
        <div className='video__overlay'></div>
      </div>
      <img
        src={TLgradient}
        alt='gradient'
        className='video-gradient video__tl-gradient'
      />
      <img
        src={Brgradient}
        alt='gradient'
        className='video-gradient video__tl-gradient'
      />
    </section>
  );
};

export default Video;
