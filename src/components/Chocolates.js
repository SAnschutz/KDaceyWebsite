import React, { useEffect } from 'react';
import Navbar from './Navbar';

import Bark from '../assets/Chocolates/Bark.jpeg';
import ChristmasDipped from '../assets/Chocolates/ChristmasDipped.jpeg';
import ChristmasOreos from '../assets/Chocolates/ChristmasOreos.jpeg';
import PenguinOreos from '../assets/Chocolates/PenguinOreos.jpeg';
import Stirrer from '../assets/Chocolates/Stirrer.jpeg';

export default function Chocolates() {
  const ChocolateImagesArray = [
    PenguinOreos,
    ChristmasDipped,
    ChristmasOreos,
    Bark,
    Stirrer
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='chocolates-page'>
      <Navbar />
      <h1>Chocolates</h1>
      {ChocolateImagesArray.map(image => (
        <img src={image} alt='chocolate candies' className='product-image' />
      ))}
    </div>
  );
}
