import React from 'react';
import { Container, ExpWrapper, DetailtWrapper } from './Experience.style';

const Experience = () => {
  return (
    <Container>
      <ExpWrapper>
        <span>12</span>
        <br /> Years Experience
      </ExpWrapper>
      <DetailtWrapper>
        <div>
          <span>60+</span>
          <br /> Clients
        </div>
        <div>
          <span>4.8</span>
          <br /> Rates
        </div>
        <div>
          <span>122+</span> <br />
          Completed Projects
        </div>
        <div>
          <span>10</span>
          <br /> Achievements
        </div>
      </DetailtWrapper>
    </Container>
  );
};

export default Experience;
