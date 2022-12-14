import React from 'react'
import './styles.css'
import ClockBtn from '../../assets/images/clock-history.png'
import CalculatorBtn from '../../assets/images/calculator.png'
import {Link} from 'react-router-dom'


export default function FooterLogged() {
  return (
    
      <div className='FooterL'>
        <Link className='btnFooter' to='/History'>
          <img className='image__clock' src={ClockBtn} alt="histórico" title='Histórico de Cálculos' />
        </Link>
        <Link className='btnFooter' to='/Calculation'>
          <img className='image__calc' src={CalculatorBtn} alt="calculadora" title='Calcular novamente' />
        </Link>
      </div>

  )
}
