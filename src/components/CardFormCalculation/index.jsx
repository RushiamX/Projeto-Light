import './style.css'

export default function CardFormCalculation({ children }) {
    return(
        <div className="card__Form-Calculation">
            <div className="div-title">
                <h4 className="title-card">Cálculo</h4>
            </div>  
            
            <input className='input__calculation' type="text" placeholder='DIGITE A CIDADE'/>
            <input className='input__calculation' type="text" placeholder='LIGAÇÃO'/>
            <input className='input__calculation' type="text" placeholder='CONSUMO MENSAL kW/h'/>
            <input className='input__calculation' type="text" placeholder='TEMPERATURA MÁXIMA DA CIDADE'/>
            <input className='input__calculation' type="text" placeholder='ORIENTAÇÃO DO TELHADO'/>
            <input className='input__calculation' type="text" placeholder='INCLINAÇÃO DO TELHADO'/>
            <button className='btn__calculation'><a ClassName='button__link' target="_blank" href='/Calculation'>CALCULAR </a></button>
            {children}
        </div>
    )

}