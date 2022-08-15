import './style.css'

export default function CardFormCalculation({ children }) {
    return(
        <div className="card__Form-Calculation">
            <div className="div-title">
                <h4 className="title-card">Cálculo</h4>
            </div>  
            
            <input className='input__calculation' type="text" placeholder='DIGITE A CIDADE'/>
            <input className='input__calculation' type="text" placeholder='LIGAÇÃO'/>
            <input className='input__calculation' type="text" placeholder='CONSUMO MENSAL'/>
            <input className='input__calculation' type="text" placeholder='TEMPERATURA MEDIA DA CIDADE'/>
            <input className='input__calculation' type="text" placeholder='CONSUMO MENSAL'/>
            <input className='input__calculation' type="text" placeholder='TEMPERATURA MEDIA DA CIDADE'/>
            <button className='btn__calculation'><a ClassName='button__link' target="_blank" href='/Calculation'>CALCULAR </a></button>
            {children}
        </div>
    )

}