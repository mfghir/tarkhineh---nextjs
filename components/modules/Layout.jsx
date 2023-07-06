import LocalFont from 'next/font/local';
import Footer from '../templates/Footer';
import Navbar from '../templates/Navbar';

import { useDispatch, useSelector } from 'react-redux';
import {
  setPhoneNumber,
  verifyPhoneNumber,
} from '@/redux/phoneVerificationSlice';
import { useState } from 'react';
import LoginPage from '../templates/LoginPage';

const estedad = LocalFont({
  src: [
    {
      path: '../../public/font/Estedad-Black.ttf',
      weight: '900',
    },
    {
      path: '../../public/font/Estedad-ExtraBold.ttf',
      weight: '800',
    },
    {
      path: '../../public/font/Estedad-Bold.ttf',
      weight: '700',
    },
    {
      path: '../../public/font/Estedad-SemiBold.ttf',
      weight: '600',
    },
    {
      path: '../../public/font/Estedad-Medium.ttf',
      weight: '500',
    },
    {
      path: '../../public/font/Estedad-Regular.ttf',
      weight: '400',
    },
    {
      path: '../../public/font/Estedad-Light.ttf',
      weight: '300',
    },
    {
      path: '../../public/font/Estedad-ExtraLight.ttf',
      weight: '200',
    },
    {
      path: '../../public/font/Estedad-Thin.ttf',
      weight: '100',
    },
  ],
  display: 'swap',
  variable: '--font-estedad',
});

const Layout = ({ children }) => {
  const buttonClicked = useSelector(state => state.button);

  return (
    <div className={`${estedad.variable} font-sans relative`}>
      {buttonClicked ? (
        <div className='absolute top-0 left-0 w-full h-screen z-50 '>
        <LoginPage />
        </div>
      ) : ''}
        <>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </>
      
    </div>
  );
};

export default Layout;
