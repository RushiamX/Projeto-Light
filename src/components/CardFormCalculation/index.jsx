import './style.css'

import iconCalc from '../../assets/images/icon-calc.png'
import iconConpass from '../../assets/images/icon-conpass.png'
import iconInclination from '../../assets/images/icon-inclination.png'
import iconLamp from '../../assets/images/icon-lamp.png'
import iconLight from '../../assets/images/icon-light.png'
import iconSearch from '../../assets/images/icon-search.png'
import iconTemperatura from '../../assets/images/icon-temperatura.png'

export default function CardFormCalculation({ children }) {




    return(
        <div className="card__Form-Calculation">
            <div className="div-title">
                <h4 className="title-card">Cálculo</h4>
            </div>  

            <div className="input__group">
            <input className='input__calculation' type="text" placeholder='DIGITE A CIDADE'/>
            <img className='input__image' src={iconSearch} alt="" />
            </div>

            <div className="input__group">
            <input className='input__calculation' type="text" placeholder='LIGAÇÃO'/>
            <img className='input__image' src={iconLamp} alt="" />
            </div>

            <div className="input__group">
            <input className='input__calculation' type="text" placeholder='CONSUMO MENSAL kW/h'/>
            <img className='input__image' src={iconLight} alt="" />
            </div>

            <div className="input__group">
            <input className='input__calculation' type="text" placeholder='TEMPERATURA MÁXIMA DA CIDADE'/>
            <img className='input__image' src={iconTemperatura} alt="" />
            </div>

            <div className="input__group">
            <input className='input__calculation' type="text" placeholder='ORIENTAÇÃO DO TELHADO'/>
            <img className='input__image' src={iconConpass} alt="" />
            </div>

            <div className="input__group">
            <input className='input__calculation' type="text" placeholder='INCLINAÇÃO DO TELHADO'/>
            <img className='input__image' src={iconInclination} alt="" />
            </div>
            
            <button className='btn__calculation'>
                <a ClassName='button__link-calculation' target="_blank" href='/Calculation'>CALCULAR </a>
                <img className='input__image' src={iconCalc} alt="" />
                </button>
            {children}
        </div>
    )

}