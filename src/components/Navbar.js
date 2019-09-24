import React, { useState } from 'react';
import { history } from '../AppRouter';
import Logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const showMenu = () => setIsOpenMenu(true);

  const hideMenu = () => setIsOpenMenu(false);

  return (
    <div className='navbar'>
      {history.location.pathname !== '/' && (
        <div className='icon'>
          <FontAwesomeIcon
            className='hamburger'
            icon={faBars}
            onMouseOver={showMenu}
            onMouseOut={hideMenu}
          />
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

      <div className='navbar-logo'>
        <div className='name'>
          <h1>Kathy</h1>
        </div>
        <Link to='/'>
          <img src={Logo} alt='logo' />
        </Link>

        <div className='name'>
          <h1>Dacey </h1>
        </div>
      </div>
      {history.location.pathname !== '/' && (
        <Link to='/contact' className='contact-button'>
          Contact Me
        </Link>
      )}
    </div>
  );
}
