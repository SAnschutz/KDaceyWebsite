import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import CakeImage from '../assets/Cakes/LimeCake.jpeg';
import CupcakeImage from '../assets/Cupcakes/Sprinkles.jpeg';
import CookieImage from '../assets/Cookies/Smileys.jpeg';
import ChocolateImage from '../assets/Chocolates/PenguinOreos.jpeg';

export default function LandingPage() {
  const [image, setImage] = useState(null);

  return (
    <div>
      <Navbar />
      <div
        className='landing-page-body'
        style={image && { backgroundImage: `url(${image})` }}
      >
        <div className='links'>
          <Link
            to='/cakes'
            onMouseOver={() => setImage(CakeImage)}
            onMouseOut={() => setImage(null)}
          >
            Cakes
          </Link>
          <Link
            to='/cupcakes'
            onMouseOver={() => setImage(CupcakeImage)}
            onMouseOut={() => setImage(null)}
          >
            Cupcakes
          </Link>
          <Link
            to='/cookies'
            onMouseOver={() => setImage(CookieImage)}
            onMouseOut={() => setImage(null)}
          >
            Cookies
          </Link>
          <Link
            to='/chocolates'
            onMouseOver={() => setImage(ChocolateImage)}
            onMouseOut={() => setImage(null)}
          >
            Chocolates
          </Link>
        </div>
      </div>
    </div>
  );
}
