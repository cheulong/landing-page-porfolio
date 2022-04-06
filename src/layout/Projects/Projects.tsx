import Image from 'next/image';
import React from 'react';
import project1 from '@/assets/images/project1.png';
import project2 from '@/assets/images/project2.png';
import project3 from '@/assets/images/project3.png';
import project4 from '@/assets/images/project4.png';
import { FiArrowRight } from 'react-icons/fi';
import { Container, TitleContainer, Wrapper, Box, BoxBody, BoxImage } from './Projects.style';

const Projects = () => {
  return (
    <Container>
      <TitleContainer>
        <div>
          <h1>Featured Projects</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <button>View All</button>
      </TitleContainer>
      <Wrapper>
        <Box>
          <BoxImage>
            <Image src={project1} alt='project' layout='responsive' />
          </BoxImage>
          <BoxBody>
            <h3>Project Name</h3>
            <button>
              Know More <FiArrowRight />
            </button>
          </BoxBody>
        </Box>
        <Box>
          <BoxImage>
            <Image src={project2} alt='project' layout='responsive' />
          </BoxImage>
          <BoxBody>
            <h3>Project Name</h3>
            <button>
              Know More <FiArrowRight />
            </button>
          </BoxBody>
        </Box>
        <Box>
          <BoxImage>
            <Image src={project3} alt='project' layout='responsive' />
          </BoxImage>
          <BoxBody>
            <h3>Project Name</h3>
            <button>
              Know More <FiArrowRight />
            </button>
          </BoxBody>
        </Box>
        <Box>
          <BoxImage>
            <Image src={project4} alt='project' layout='responsive' />
          </BoxImage>
          <BoxBody>
            <h3>Project Name</h3>
            <button>
              Know More <FiArrowRight />
            </button>
          </BoxBody>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default Projects;
