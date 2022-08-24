import React from 'react'
import './styles.css'
import headerLogo from '../../assets/images/save_energy.png'
import btnLeft from '../../assets/images/icon-left-arrow.png'
import btnLogout from '../../assets/images/icon-exit.png'
import { Link } from 'react-router-dom'



export default function HeaderLogged() {

  const toback = () =>{
    window.history.back()
  }; 

  return (
    <div className='HeaderLogged'>
      <Link className="header__btn" to=''>
        <img  src={btnLeft}  className='img__left' onClick={toback}/>
      </Link>
      <div className='header__'>
        <img className="header__logo" src={headerLogo} alt="" />
        <p className='header__title'>Team Light</p>
      </div>
      <Link className="header__btn" to='/Login'>
        <img src={btnLogout} alt="" className='img__logout'/>
      </Link>

    </div>
  )
}
