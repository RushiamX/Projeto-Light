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

{/* <nav className="navbar">
 			<img className="nav-logo" src={sun} alt="sun" />
			 <span className='left'>TEAM LIGHT</span>
			<div className="nav-icon">
		
				<img className="nav-logo" src={headerLogo} alt="sun" />
			</div>
			<ul>
				<li className="nav-item">
					<Link to="/calculation" className="nav-link">
					Calculadora
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/login" className="nav-link">
						Login
					</Link>
				</li>
			</ul>
		</nav> */}

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
