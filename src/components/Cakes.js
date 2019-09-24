import React from 'react';
import Navbar from './Navbar';
import Broadway from '../assets/Cakes/Broadway.jpeg';
import ChocolateBox from '../assets/Cakes/ChocolateBox.jpeg';
import Elegant from '../assets/Cakes/Elegant.PNG';
import Fall from '../assets/Cakes/Fall.jpeg';
import GermanChocolate from '../assets/Cakes/GermanChocolate.jpeg';
import MagicRabbit from '../assets/Cakes/MagicRabbit.jpeg';
import MagicRabbit2 from '../assets/Cakes/MagicRabbit2.jpeg';
import Roses from '../assets/Cakes/Roses.jpeg';
import StrawberryCream from '../assets/Cakes/StrawberryCream.jpeg';
import Wedding from '../assets/Cakes/Wedding.jpeg';
import Lime from '../assets/Cakes/LimeCake.jpeg';

export default function Cakes() {
  const CakeImagesArray = [
    Elegant,
    Fall,
    Broadway,
    GermanChocolate,
    StrawberryCream,
    MagicRabbit,
    MagicRabbit2,
    ChocolateBox,
    Wedding,
    Roses,
    Lime
  ];
  return (
    <div className='cakes-page'>
      <Navbar />
      <h1>Cakes</h1>
      {CakeImagesArray.map(image => (
        <img src={image} alt='cake' className='product-image' />
      ))}
    </div>
  );
}
