import React from 'react';
import Logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header'>
      <div className='header-links'>
        <Link to='/'>Home</Link>

        <Link to='/contact'>Contact Me</Link>
      </div>
      <div className='header-logo'>
        <img src={Logo} alt='cupcake' />
      </div>
      <div className='header-name'>
        <h1>Kathy Dacey</h1>
      </div>
    </div>
  );
}
