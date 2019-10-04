import React, { useState } from 'react';
import Logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const showMenu = () => setIsOpenMenu(true);
  const hideMenu = () => setIsOpenMenu(false);

  const toggleShowMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const location = window.location.hash;

  return (
    <div className='navbar'>
      <div className='navbar-content'>
        <div className='nav-icon'>
          {location !== '#/' && (
            <div>
              <FontAwesomeIcon
                className='hamburger'
                icon={faBars}
                onMouseOver={showMenu}
                onMouseOut={hideMenu}
                onClick={toggleShowMenu}
              />
              <div
                className='dropdown-menu'
                onMouseOver={showMenu}
                onMouseOut={hideMenu}
                style={
                  isOpenMenu
                    ? { visibility: 'visible' }
                    : { visibility: 'hidden' }
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
        </div>

        <div className='navbar-logo'>
          <Link to='/'>
            <div className='name'>
              <h1>Kathy</h1>
            </div>
            <img src={Logo} alt='logo' />
            <div className='name'>
              <h1>Dacey </h1>
            </div>
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
