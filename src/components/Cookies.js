import React from 'react';
import Navbar from './Navbar';
import BasketEasterEggs from '../assets/Cookies/BasketEasterEggs.jpeg';
import BeachBall from '../assets/Cookies/BeachBall.jpeg';
import ChickInEgg from '../assets/Cookies/ChickInEgg.jpeg';
import HatchedEgg from '../assets/Cookies/HatchedEgg.jpeg';
import Smileys from '../assets/Cookies/Smileys.jpeg';
import SummerBasket from '../assets/Cookies/SummerBasket.jpeg';
import Sun from '../assets/Cookies/Sun.jpeg';

export default function Cookies() {
  const CookieImagesArray = [
    Smileys,
    SummerBasket,
    BeachBall,
    Sun,
    HatchedEgg,
    ChickInEgg,
    BasketEasterEggs
  ];
  return (
    <div className='cookies-page'>
      <Navbar />
      <h1>Cookies</h1>
      {CookieImagesArray.map(image => (
        <img src={image} alt='cookie' className='product-image' />
      ))}
    </div>
  );
}
