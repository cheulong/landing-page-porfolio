import React from 'react';
import Logo from '@/components/atoms/Logo';
import NavList from '@/components/molecules/NavList';
import { Container } from './Navbar.style';

const Navbar = () => {
  return (
    <Container>
      <Logo />
      <NavList />
    </Container>
  );
};

export default Navbar;
