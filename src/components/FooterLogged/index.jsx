import React from 'react'
import './styles.css'
import ClockBtn from '../../assets/images/clock-history.png'
import CalculatorBtn from '../../assets/images/calculator.png'


export default function FooterLogged() {
  return (
    
      <div className='FooterL'>
        <a className='btnFooter' href="">
          <img className='image__clock' src={ClockBtn} alt="historico" />
        </a>
        <a className='btnFooter' href="">
          <img className='image__calc' src={CalculatorBtn} alt="calculadora" />
        </a>
      </div>

  )
}
