import Footer from '@/components/molecules/Footer';
import Navbar from '@/components/organism/Navbar';
import React, { ReactChild } from 'react';

const Layout = ({ children }: { children: ReactChild }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
