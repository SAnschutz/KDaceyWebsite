import React, { useState, useEffect, useLayoutEffect } from 'react';
import MobileNavbar from './MobileNavbar';
import TabletNavbar from './TabletNavbar';
import DesktopNavbar from './DesktopNavbar';

export default function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='navbar'>
      {windowWidth <= 700 && <MobileNavbar />}
      {windowWidth > 700 && windowWidth <= 1025 && <TabletNavbar />}
      {windowWidth > 1025 && <DesktopNavbar />}
    </div>
  );
}
