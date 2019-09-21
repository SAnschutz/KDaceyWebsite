import React, { useState } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import CakeImage from '../assets/Cakes/Fall.jpeg';

export default function LandingPage() {
  const [image, setImage] = useState();

  const displayCakeImage = () => {
    setImage({ link: CakeImage, alt: 'Fall-themed decorated cake' });
  };
  const displayCupcakeImage = () => console.log('cupcake');
  const displayCookieImage = () => console.log('cookie');
  const displayChocolatesImage = () => console.log('chocolates');

  const clearImage = () => setImage();
  return (
    <div>
      <Header />
      <div className='landing-page-body'>
        <div className='links'>
          <Link
            to='/cakes'
            onMouseOver={displayCakeImage}
            onMouseOut={clearImage}
          >
            Cakes
          </Link>
          <Link
            to='/cupcakes'
            onMouseOver={displayCupcakeImage}
            onMouseOut={clearImage}
          >
            Cupcakes
          </Link>
          <Link
            to='/cookies'
            onMouseOver={displayCookieImage}
            onMouseOut={clearImage}
          >
            Cookies
          </Link>
          <Link
            to='/chocolates'
            onMouseOver={displayChocolatesImage}
            onMouseOut={clearImage}
          >
            Chocolates
          </Link>
        </div>
        {image && (
          <img
            src={image.link}
            alt={image.alt}
            className='landing-page-product-image'
          />
        )}
      </div>
    </div>
  );
}
