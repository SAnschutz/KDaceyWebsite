import React, { useState } from 'react';
import Navbar from './Navbar';
import LogoWithName from '../assets/LogoWithName.svg';
import { Link } from 'react-router-dom';
import CakeImage from '../assets/Cakes/Fall.jpeg';

export default function LandingPage() {
  return (
    <div className='landing-page-body'>
      <Navbar />
      <img src={LogoWithName} alt='logo' className='logo' />
      <div className='text'>
        <h2>All items made to order! </h2>
        <p>
          Browse a selection of my previous creations below, then contact me to
          discuss other design possibilities and get a quote for your custom
          order!
        </p>
      </div>
      <div className='links'>
        <Link to='/cakes'>Cakes</Link>
        <Link to='/cupcakes'>Cupcakes</Link>
        <Link to='/cookies'>Cookies</Link>
        <Link to='/chocolates'>Chocolates</Link>
      </div>
    </div>
  );
}
