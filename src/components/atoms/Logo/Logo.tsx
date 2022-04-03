import Image from 'next/image';
import React from 'react';
import logo from '@/assets/images/logo.svg';

const Logo = () => {
  return <Image src={logo} alt='logo' width={50} height={50} layout='fixed' />;
};

export default Logo;
