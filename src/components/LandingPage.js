import React from 'react';
import Header from './Header';
import Carousel from './Carousel';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div>
      <Header />
      <div className='landing-page-body'>
        <div className='links'>
          <ul>
            <li>
              {' '}
              <Link to='/cakes'>Cakes</Link>
            </li>
            <li>
              <Link to='/cupcakes'>Cupcakes</Link>
            </li>
            <li>
              {' '}
              <Link to='/cookies'>Cookies</Link>
            </li>
            <li>
              {' '}
              <Link to='/chocolates'>Chocolate-dipped</Link>
            </li>
          </ul>
        </div>
        <div className='carousel-container'>
          <Carousel />
        </div>
      </div>
    </div>
  );
}
