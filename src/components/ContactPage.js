import React from 'react';
import Navbar from './Navbar';
import LogoWithName from '../assets/LogoWithName.svg';

export default function ContactPage() {
  return (
    <div className='contact-page'>
      <Navbar />
      <div className='contact-page-content'>
        {' '}
        <p>
          To discuss design options and get a custom quote, please e-mail me at{' '}
          <a href='mailto:sanschutz@yahoo.com'>my_email@gmail.com</a>
        </p>
        <img src={LogoWithName} alt='logo' className='logo' />
      </div>
    </div>
  );
}
