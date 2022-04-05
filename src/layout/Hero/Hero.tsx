import React from 'react';
import profile from '@/assets/images/profile.jpg';
import Image from 'next/image';
import { Container } from './Hero.style';

const Hero = () => {
  return (
    <Container>
      <div className='left'>
        <div>
          <Image src={profile} alt='profile' layout='responsive' />
        </div>
      </div>
      <div className='right'>
        <h3>
          Hi, I&apos;m <span>Rafael</span>
        </h3>
        <h2>Full Stack Developer</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident sint architecto
          cupiditate fuga reiciendis dolorem quaerat ipsam sit praesentium, culpa quibusdam itaque
          quas voluptatum quos explicabo inventore facere minus! Maiores.
        </p>
        <button>about me</button>
      </div>
    </Container>
  );
};

export default Hero;
