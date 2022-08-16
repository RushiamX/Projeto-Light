import './styles.css'

import IconPlan from '../../assets/images/icon-plan.png'

export default function CardFormResult() {
    return(
        <div className="card__Form-Result">
            <div className="div-title">
                <h4 className="title-card">Resultado</h4>
                <img className="title-image" src={IconPlan} alt="" />

            </div>    

                <div className="group__info">
                    <p className="group__info-tag">Cidade:</p>
                    <p className="group__info-answer">Guarulhos - SP</p>
                </div>  

                <div className="group__info">
                    <p className="group__info-tag">Ligação:</p>
                    <p className="group__info-answer">Monofásica</p>
                </div>  

                <div className="group__info">
                    <p className="group__info-tag">Consumo:</p>
                    <p className="group__info-answer">300 Kw/h</p>
                </div>  

            <div className="result__potencia">
                <h3 className='result__title'>Potência Necessária</h3>
                <p className='result__text'>8,62 Kw/h</p>
            </div>

        </div>
    )

}