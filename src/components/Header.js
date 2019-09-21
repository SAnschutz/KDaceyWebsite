import React from 'react';
import LogoWithName from '../assets/LogoWithName.svg';
import Navbar from './Navbar';
export default function Header() {
  return (
    <div>
      <Navbar />
      <div className='header'>
        <img src={LogoWithName} alt='logo' />
      </div>
    </div>
  );
}
