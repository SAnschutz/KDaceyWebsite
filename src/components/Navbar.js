import React, { useState } from 'react';
import Logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { history } from '../AppRouter';

export default function Navbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const showMenu = () => setIsOpenMenu(true);

  const hideMenu = () => setIsOpenMenu(false);

  const location = window.location.hash;
  return (
    <div className='navbar'>
      {location !== '#/' && (
        <div className='icon'>
          <FontAwesomeIcon
            className='hamburger desktop no-tablet'
            icon={faBars}
            onMouseOver={showMenu}
            onMouseOut={hideMenu}
          />
          <div className='mobile tablet left-arrow'>
            {' '}
            <Link to='/'>
              <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
          </div>

          <div
            className='dropdown-menu'
            onMouseOver={showMenu}
            onMouseOut={hideMenu}
            style={
              isOpenMenu ? { visibility: 'visible' } : { visibility: 'hidden' }
            }
          >
            <Link to='/'>Home</Link>
            <Link to='/cakes'>Cakes</Link>
            <Link to='/cupcakes'>Cupcakes</Link>
            <Link to='/cookies'>Cookies</Link>
            <Link to='/chocolates'>Chocolates</Link>
            <Link to='/contact'>Contact</Link>
          </div>
        </div>
      )}

      {location === '#/' && (
        <div className='name mobile no-tablet'>
          <h1>Kathy Dacey</h1>
        </div>
      )}

      <div className='navbar-logo desktop tablet'>
        <Link to='/'>
          <div className='name'>
            <h1>Kathy</h1>
          </div>
          <img src={Logo} alt='logo' />
          <div className='name'>
            <h1>Dacey </h1>
          </div>{' '}
        </Link>
      </div>
      {location !== '#/' && (
        <Link to='/contact' className='contact-button'>
          Contact Me
        </Link>
      )}
    </div>
  );
}
