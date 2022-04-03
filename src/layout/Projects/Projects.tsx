import Image from 'next/image';
import React from 'react';
import project1 from '@/assets/images/project1.png';
import project2 from '@/assets/images/project2.png';
import project3 from '@/assets/images/project3.png';
import project4 from '@/assets/images/project4.png';
import { FiArrowRight } from 'react-icons/fi';

const Projects = () => {
  return (
    <div>
      <div>
        <div>
          <h1>Featured Projects</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <button>View All</button>
      </div>
      <div>
        <div>
          <div>
            <Image src={project1} alt='project' width={100} height={100} layout='fixed' />
          </div>
          <div>
            <h3>Project Name</h3>
            <button>
              Know More <FiArrowRight />
            </button>
          </div>
        </div>
        <div>
          <div>
            <Image src={project2} alt='project' width={100} height={100} layout='fixed' />
          </div>
          <div>
            <h3>Project Name</h3>
            <button>
              Know More <FiArrowRight />
            </button>
          </div>
        </div>
        <div>
          <div>
            <Image src={project3} alt='project' width={100} height={100} layout='fixed' />
          </div>
          <div>
            <h3>Project Name</h3>
            <button>
              Know More <FiArrowRight />
            </button>
          </div>
        </div>
        <div>
          <div>
            <Image src={project4} alt='project' width={100} height={100} layout='fixed' />
          </div>
          <div>
            <h3>Project Name</h3>
            <button>
              Know More <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
