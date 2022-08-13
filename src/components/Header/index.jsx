import React from 'react'
import './styles.css'
import headerLogo from '../../assets/images/save_energy.png'
import iconLeft from '../../assets/images/icon-left-arrow.png'
import iconExit from '../../assets/images/icon-exit.png'


export default function Header() {
  return (
    <div className='Header'>
      <img className="header__icon-left" src={iconLeft} alt="" />
      <img className="header__logo" src={headerLogo} alt="" />
      <h2 className='header__title'>Team Light</h2>
      <img className="header__icon-exit" src={iconExit} alt="" />

    </div>
  )
}
