import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom';
import sun from "../../assets/images/sun.icon.png";


export default function NavBar() {
    return (
   <nav className="navbar">
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
          </nav> 
      );
  }
  