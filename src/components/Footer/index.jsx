import React from 'react'
import './styles.css'
import footerLogo from '../../assets/images/footer-logo.svg'

export default function Footer() {
  return (
    <div className='Footer'>

      <img className='footer__logo' src={footerLogo} alt="logo dh" />

    </div>
  );
};
