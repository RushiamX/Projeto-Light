import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom';
import sun from "../../assets/images/sun.icon.png";
import headerLogo from '../../assets/images/save_energy.png'
import iconLeft from '../../assets/images/icon-left-arrow.png'
import iconExit from '../../assets/images/icon-exit.png'


export default function Header() {
  return (
		<div>
		<div className='Header'>
    	<img className="header__icon-left" src={iconLeft} alt="" />
			<div className="group__header-logo">
			<img className="header__logo" src={headerLogo} alt="" />
			<h2 className='header__title'>Team Light</h2>
			</div>
		<img className="header__icon-exit" src={iconExit} alt="" />

    </div>
		</div>	
	);
}
