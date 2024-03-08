'use client';
import React, { useContext, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useThemeContext } from '../theme-context';

const Template = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { theme, setTheme } = useThemeContext();

  return (
    <div data-theme={theme}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Template;
