import React from 'react';
import { history } from '../AppRouter';

import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='navbar'>
      {history.location.pathname !== '/' && (
        <Link to='/' className='navbar-link home-button'>
          Home
        </Link>
      )}
      <Link to='/contact' className='navbar-link contact-button'>
        Contact Me
      </Link>
    </div>
  );
}
