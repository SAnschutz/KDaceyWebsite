import React from 'react';
import Navbar from './Navbar';
import Flamingos from '../assets/Cupcakes/Flamingos.jpeg';
import Lemon from '../assets/Cupcakes/Lemon.jpeg';
import Mocha from '../assets/Cupcakes/Mocha.jpeg';
import Shoes from '../assets/Cupcakes/Shoes.jpeg';
import Sprinkles from '../assets/Cupcakes/Sprinkles.jpeg';

export default function Cupcakes() {
  const CupcakeImagesArray = [Sprinkles, Mocha, Lemon, Shoes, Flamingos];
  return (
    <div className='cupcakes-page'>
      <Navbar />
      <h1>Cupcakes </h1>
      {CupcakeImagesArray.map(image => (
        <img src={image} alt='cookie image' className='product-image' />
      ))}
    </div>
  );
}
