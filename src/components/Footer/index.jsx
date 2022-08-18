import React from 'react'
import './styles.css'
import greenLeaf from '../../assets/images/energySaving.png'
import dhLogo from '../../assets/images/dh.png'
import teamLight from '../../assets/images/teamLight.png'

export default function Footer() {
  return (
    <div className='Footer'>
      <img className='footer__greenLeaf' src={greenLeaf} alt="folha verde" />
      <div className="footer__title-group">
        <img className='footer__logo' src={dhLogo} alt="logo dh" />
        <p className='footer__text'>Powered By Team Light - Front End 2022</p>
      </div>
      
    </div>
  );
};
