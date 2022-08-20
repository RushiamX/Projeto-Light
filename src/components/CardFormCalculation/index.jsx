import './style.css'

import iconCalc from '../../assets/images/icon-calc.png'
import iconConpass from '../../assets/images/icon-conpass.png'
import iconInclination from '../../assets/images/icon-inclination.png'
import iconLamp from '../../assets/images/icon-lamp.png'
import iconLight from '../../assets/images/icon-light.png'
import iconSearch from '../../assets/images/icon-search.png'
import iconTemperatura from '../../assets/images/icon-temperatura.png'

export default function CardFormCalculation({ children }) {


    const tipoLigacoes = ["Monofásico", "Bifásico", "Trifásico"];
    const orientacoes = ["Norte", "Sul", "Leste", "Oeste"];
    const inclinacoes= [30,32,34,36,38,40,42,45];



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
            <select className='input__calculation' type="text">
            <option value=''>TIPO DE LIGAÇÃO...</option>
                    {tipoLigacoes.map(ligacao => (
                        <option key={ligacao} value={ligacao}>{ligacao}</option>
                        ))}
            </select>
            <img className='input__image' src={iconLight} alt="" />
            </div>

            <div className="input__group">
            <input className='input__calculation' type="NUMBER" placeholder='CONSUMO MENSAL kW/h'/>
            <img className='input__image' src={iconLamp} alt="" />
            </div>

            <div className="input__group">
            <input className='input__calculation' type="text" placeholder='TEMPERATURA MÁXIMA'/>
            <img className='input__image' src={iconTemperatura} alt="" />
            </div>

            <div className="input__group">
            <select className='input__calculation' type="text">
            <option value=''>ORIENTACÃO...</option>
                    {orientacoes.map(orientacao => (
                        <option key={orientacao} value={orientacao}>{orientacao}</option>
                        ))}
            </select>
            <img className='input__image' src={iconConpass} alt="" />
            </div>

            <div className="input__group">
            <select className='input__calculation' type="text">
            <option value=''>INCLINAÇÃO DO TELHADO...</option>
                    {inclinacoes.map(inc => (
                        <option key={inc} value={inc}>{inc}</option>
                        ))}
            </select>
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