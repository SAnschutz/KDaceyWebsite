import React from 'react';

import LogoImage from '../assets/Logo.svg';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to='/'>
      <img src={LogoImage} alt='cupcake' className='logo' />
    </Link>
  );
}
