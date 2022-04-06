import Logo from '@/components/atoms/Logo';
import React from 'react';
import { Container, Left, Center, Right, Wrapper } from './Footer.style';
import { BsFacebook, BsTwitter, BsYoutube } from 'react-icons/bs';
const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo />
        </Left>
        <Center>
          <div>
            <BsFacebook size={25} color='#555454' />
          </div>
          <div>
            <BsTwitter size={25} color='#555454' />
          </div>
          <div>
            <BsYoutube size={25} color='#555454' />
          </div>
        </Center>
        <Right></Right>
      </Wrapper>
    </Container>
  );
};

export default Footer;
