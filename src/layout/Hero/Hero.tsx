import React from 'react';
import profile from '@/assets/images/profile.jpg';
import Image from 'next/image';

const Hero = () => {
  return (
    <div>
      <Image src={profile} alt='profile' width={100} height={100} layout='fixed' />
      <div>
        <h1>
          Hi, I'm <span>Rafael</span>
        </h1>
        <h2>
          I'm a <span>Full Stack Developer</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident sint architecto
          cupiditate fuga reiciendis dolorem quaerat ipsam sit praesentium, culpa quibusdam itaque
          quas voluptatum quos explicabo inventore facere minus! Maiores.
        </p>
        <button>about me</button>
      </div>
    </div>
  );
};

export default Hero;
