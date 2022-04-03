import React from 'react';
import profile from '@/assets/images/profile.jpg';
import Image from 'next/image';
import { Container } from './Hero.style';

const Hero = () => {
  return (
    <Container>
      <Image src={profile} alt='profile' width={100} height={100} layout='fixed' />
      <div>
        <h1>
          Hi, I&apos;m <span>Rafael</span>
        </h1>
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
