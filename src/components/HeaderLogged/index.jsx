import React from 'react'
import './styles.css'
import headerLogo from '../../assets/images/save_energy.png'


export default function HeaderLogged() {
  return (
    <div className='Header'>
      <img className="header__logo" src={headerLogo} alt="" />
      <p className='header__title'>Team Light</p>
    </div>
  )
}
