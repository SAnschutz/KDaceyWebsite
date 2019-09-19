import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//images
//Cakes
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

//Cupcakes
import Flamingos from '../assets/Cupcakes/Flamingos.jpeg';
import Lemon from '../assets/Cupcakes/Lemon.jpeg';
import Mocha from '../assets/Cupcakes/Mocha.jpeg';
import Shoes from '../assets/Cupcakes/Shoes.jpeg';
import Sprinkles from '../assets/Cupcakes/Sprinkles.jpeg';

//Chocolates
import Bark from '../assets/Chocolates/Bark.jpeg';
import ChristmasDipped from '../assets/Chocolates/ChristmasDipped.jpeg';
import ChristmasChocolates from '../assets/Chocolates/ChristmasDipped.jpeg';
import PenguinOreos from '../assets/Chocolates/PenguinOreos.jpeg';
import Stirrer from '../assets/Chocolates/Stirrer.jpeg';

//Cookies
import BasketEasterEggs from '../assets/Cookies/BasketEasterEggs.jpeg';
import BeachBall from '../assets/Cookies/BeachBall.jpeg';
import ChickInEgg from '../assets/Cookies/ChickInEgg.jpeg';
import HatchedEdd from '../assets/Cookies/HatchedEgg.jpeg';
import Smileys from '../assets/Cookies/Smileys.jpeg';
import SummerBasket from '../assets/Cookies/SummerBasket.jpeg';
import Sun from '../assets/Cookies/Sun.jpeg';

export default function Carousel() {
  const options = {
    adaptiveHeight: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    variableWidth: true,
    fade: true
  };

  return (
    <div>
      <Slider options={options} className='carousel'>
        <div className='image-frame'>
          <img
            src={GermanChocolate}
            alt='German Chocolate Cake'
            className='carousel-image'
          />
        </div>
        <div className='image-frame'>
          <img
            src={PenguinOreos}
            alt='Chocolate covered Oreos with Penguin features'
            className='carousel-image'
          />
        </div>
        <div className='image-frame'>
          <img
            src={Wedding}
            alt='Tiered cake with icing roses'
            className='carousel-image'
          />
        </div>
        <div className='image-frame'>
          <img
            src={StrawberryCream}
            alt='Cake with white icing and strawberry filling on top'
            className='carousel-image'
          />
        </div>
        <div className='image-frame'>
          <img
            src={ChristmasChocolates}
            alt='Christmas assortment of chocolate dipped items'
            className='carousel-image'
          />
        </div>
        <div className='image-frame'>
          <img
            src={Flamingos}
            alt='Flamingo cupcakes'
            className='carousel-image'
          />
        </div>
        <div className='image-frame'>
          <img
            src={Fall}
            alt='Fall themed cake with pumpkins and leaves'
            className='carousel-image'
          />
        </div>
        <div className='image-frame'>
          <img
            src={Broadway}
            alt='Broadway Themed Cake'
            className='carousel-image'
          />
        </div>
      </Slider>
    </div>
  );
}
