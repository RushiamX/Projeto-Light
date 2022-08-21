import React from 'react'
import './styles.css'
import greenLeaf from '../../assets/images/energySaving.png'
import dhLogo from '../../assets/images/dh.png'
import teamLight from '../../assets/images/teamLight.png'
import footerLogo from '../../assets/images/footer-logo.svg'

export default function Footer() {
  return (
    <div className='Footer'>

      {/* <img className='footer__greenLeaf' src={greenLeaf} alt="folha verde" /> */}
      {/* <div className="footer__title-group"> */}
      {/* </div> */}
        <img className='footer__logo' src={footerLogo} alt="logo dh" />
        {/* <p className='footer__text'>Powered By Team Light - Front End 2022</p> */}

    </div>
  );
};
