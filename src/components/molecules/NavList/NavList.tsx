import Icon from '@/components/atoms/Icon';
import Link from 'next/link';
import React from 'react';
import { NavbarListStyle } from './NavList.style';

const NavList = ({ isFooter = false }: { isFooter?: boolean }) => {
  return (
    <NavbarListStyle>
      <li>
        <Link href='/'>
          <a>HOME</a>
        </Link>
      </li>
      <li>
        <Link href='/'>
          <a>PROJECT</a>
        </Link>
      </li>
      <li>
        <Link href='/'>
          <a>ABOUT</a>
        </Link>
      </li>
      <li>
        <Link href='/'>
          <a>CONTACT</a>
        </Link>
      </li>
      <li>
        <Link href='/'>
          <a>
            OTHER PAGE <Icon />
          </a>
        </Link>
      </li>
    </NavbarListStyle>
  );
};

export default NavList;
