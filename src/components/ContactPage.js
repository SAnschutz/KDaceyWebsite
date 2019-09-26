import React from 'react';
import Navbar from './Navbar';
import Logo from '../assets/Logo2BorderPink.svg';

export default function ContactPage() {
  return (
    <div className='contact-page'>
      <Navbar />
      <div className='contact-page-content'>
        <p>All items are made to order, based on your specific requests.</p>
        <p>
          To discuss design options and get a custom quote, please e-mail me at{' '}
          <a href='mailto:kdacey1@gmail.com'>kdacey1@gmail.com</a>
        </p>
      </div>
    </div>
  );
}
