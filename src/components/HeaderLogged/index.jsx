import React from 'react'
import './styles.css'
import headerLogo from '../../assets/images/save_energy.png'
import btnLeft from '../../assets/images/icon-left-arrow.png'
import btnLogout from '../../assets/images/icon-exit.png'


export default function HeaderLogged() {
  return (
    <div className='HeaderLogged'>
      <a href="#" className="header__btn">
        <img  src={btnLeft} alt="" className='img'/>
      </a>
      <div className='header__'>
      <img className="header__logo" src={headerLogo} alt="" />
      <p className='header__title'>Team Light</p>
      </div>
      <a href="#" className="header__btn">
        <img src={btnLogout} alt="" className='img'/>
      </a>

    </div>
  )
}
