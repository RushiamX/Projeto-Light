import React from 'react'
import './styles.css'
import UserBtn from '../../assets/images/user.png'
import ClockBtn from '../../assets/images/clock-history.png'
import CalculatorBtn from '../../assets/images/calculator.png'


export default function FooterLogged() {
  return (
    
      <div className='FooterL'>
        <a className='btnFooter' href="">
          <img src={UserBtn} alt="user" />
        </a>
        <a className='btnFooter' href="">
          <img src={ClockBtn} alt="historico" />
        </a>
        <a className='btnFooter' href="">
          <img src={CalculatorBtn} alt="calculadora" />
        </a>
      </div>

  )
}
