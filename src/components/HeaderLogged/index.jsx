import React from 'react'
import './styles.css'
import headerLogo from '../../assets/images/save_energy.png'
import btnLeft from '../../assets/images/icon-left-arrow.png'
import btnLogout from '../../assets/images/icon-exit.png'
import {Link, useNavigate } from 'react-router-dom'



export default function HeaderLogged() {

  const toback = () =>{
    window.history.back()
  }; 

  const navigate = useNavigate();
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');

    navigate('/');
  }

  return (
    <div className='HeaderLogged'>
      <Link className="header__btn" to=''>
        <img  src={btnLeft}  className='img__left' onClick={toback} alt='Voltar a tela anterior' title='Voltar'/>
      </Link>
      <div className='header__'>
        <img className="header__logo" src={headerLogo} alt="Logo da equipe" />
        <p className='header__title'>Team Light</p>
      </div>
      <Link className="header__btn" to=''>
        <img src={btnLogout} className='img__logout' onClick={logout} alt='Logout' title='Logout'/>
      </Link>

    </div>
  )
  }
