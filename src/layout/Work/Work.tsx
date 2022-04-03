import React from 'react';
import { MdOutlineDraw } from 'react-icons/md';
import { FiArrowRight } from 'react-icons/fi';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { RiRulerLine } from 'react-icons/ri';
const Work = () => {
  return (
    <div>
      <div>
        <MdOutlineDraw />
        <h3>UI Design</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, tenetur.</p>
        <button>
          KNOW MORE <FiArrowRight />
        </button>
      </div>
      <div>
        <HiOutlineClipboardList />
        <h3>Product Design</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, tenetur.</p>
        <button>
          KNOW MORE <FiArrowRight />
        </button>
      </div>
      <div>
        <RiRulerLine />
        <h3>Branding</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, tenetur.</p>
        <button>
          KNOW MORE <FiArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Work;
