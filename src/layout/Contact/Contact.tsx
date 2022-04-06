import React from 'react';
import { Container, ContactButton, TextContainer } from './Contact.style';

const Contact = () => {
  return (
    <Container>
      <TextContainer>
        <h1>Let&apos; work together on your next project</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut nemo tempore quis fugiat
          aspernatur! Aut.
        </p>
      </TextContainer>
      <ContactButton>
        <button>Contact</button>
      </ContactButton>
    </Container>
  );
};

export default Contact;
