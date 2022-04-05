import React from 'react';
import { MdOutlineDraw } from 'react-icons/md';
import { FiArrowRight } from 'react-icons/fi';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { RiRulerLine } from 'react-icons/ri';
import { Container, Box } from './Work.style';
import Colors from 'src/constans/color';
const Work = () => {
  return (
    <Container>
      <Box>
        <MdOutlineDraw size={60} color={Colors.RED} />
        <h3>UI Design</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, tenetur.</p>
        <button>
          KNOW MORE <FiArrowRight />
        </button>
      </Box>
      <Box>
        <HiOutlineClipboardList size={60} color={Colors.RED} />
        <h3>Product Design</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, tenetur.</p>
        <button>
          KNOW MORE <FiArrowRight />
        </button>
      </Box>
      <Box>
        <RiRulerLine size={60} color={Colors.RED} />
        <h3>Branding</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, tenetur.</p>
        <button>
          KNOW MORE <FiArrowRight />
        </button>
      </Box>
    </Container>
  );
};

export default Work;
