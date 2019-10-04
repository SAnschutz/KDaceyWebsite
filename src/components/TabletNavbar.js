import React, { useState } from 'react';
import Logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const location = window.location.hash;

  return (
    <div className='navbar'>
      <div className='navbar-content'>
        {location !== '#/' && (
          <div className='nav-icon'>
            <Link to='/'>
              <FontAwesomeIcon className='back-arrow' icon={faArrowLeft} />
            </Link>
          </div>
        )}

        <div className='navbar-logo'>
          <Link to='/'>
            <div className='name'>
              <h1>Kathy Dacey</h1>
            </div>
            <img src={Logo} alt='logo' />
          </Link>
        </div>

        {location !== '#/' && (
          <div className='button-div'>
            <div className='button'>
              <Link to='/contact' className='contact-button'>
                Contact Me
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
