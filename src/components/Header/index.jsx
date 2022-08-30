import React from 'react'
import './styles.css'
import headerLogo from '../../assets/images/save_energy.png'
import iconLeft from '../../assets/images/icon-left-arrow.png'
import iconExit from '../../assets/images/icon-exit.png'


export default function Header() {
  return (
	<div className='Header'>
		<div className="group__header-logo">
			<img className="header__logo" src={headerLogo} alt="Logo da Equipe" />
			<h2 className='header__title'>Team Light</h2>
		</div>

    </div>	
	);
};
