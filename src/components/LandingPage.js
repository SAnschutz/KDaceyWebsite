import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import defaultImage from '../assets/Cupcakes/Lemon.jpeg';
import CakeImage from '../assets/Cakes/LimeCake.jpeg';
import CupcakeImage from '../assets/Cupcakes/Sprinkles.jpeg';
import CookieImage from '../assets/Cookies/Smileys.jpeg';
import ChocolateImage from '../assets/Chocolates/PenguinOreos.jpeg';

export default function LandingPage() {
  const [image, setImage] = useState(defaultImage);

  return (
    <div>
      <Navbar />
      <div
        className='landing-page-body'
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className='links'>
          <Link
            to='/cakes'
            onMouseOver={() => setImage(CakeImage)}
            onMouseOut={() => setImage(defaultImage)}
          >
            Cakes
          </Link>
          <Link
            to='/cupcakes'
            onMouseOver={() => setImage(CupcakeImage)}
            onMouseOut={() => setImage(defaultImage)}
          >
            Cupcakes
          </Link>
          <Link
            to='/cookies'
            onMouseOver={() => setImage(CookieImage)}
            onMouseOut={() => setImage(defaultImage)}
          >
            Cookies
          </Link>
          <Link
            to='/chocolates'
            onMouseOver={() => setImage(ChocolateImage)}
            onMouseOut={() => setImage(defaultImage)}
          >
            Chocolates
          </Link>
        </div>
      </div>
    </div>
  );
}
