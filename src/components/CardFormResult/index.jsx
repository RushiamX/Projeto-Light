import './styles.css'

import IconPlan from '../../assets/images/icon-plan.png'
import React, {useState } from 'react';


export default function CardFormResult() {

        const [dadosAtuais, setDadosAtuais] = React.useState({
        });

        const calculoAtual = JSON.parse(localStorage.getItem('calculoAtual'));

    React.useEffect(() => {
        setDadosAtuais(calculoAtual)

    }, []);





    return(
        <div className="card__Form-Result">

            <div className="div-title">
                <h4 className="title-card">Resultado</h4>
                <img className="title-image" src={IconPlan} alt="" />

            </div>    

            <div className="form-result__group-itens">
                <div className="group__info">
                    <p className="group__info-tag">Cidade:</p>
                    <p className="group__info-answer">{dadosAtuais.cidade}</p>
                </div>  

                <div className="group__info">
                    <p className="group__info-tag">Ligação:</p>
                    <p className="group__info-answer">{dadosAtuais.ligacao}</p>
                </div>  

                <div className="group__info">
                    <p className="group__info-tag">Consumo:</p>
                    <p className="group__info-answer">{dadosAtuais.consumo} Kw/h</p>
                </div>  

            </div>

        <div className="form-result__result-components">

            <div className="result__potencia">
                <h3 className='result__title'>Potência Necessária</h3>
                <p className='result__text'>8,62 Kw/h</p>
            </div>

            <div className="result__valor">
                <h3 className='result__title'>Valor do Orçamento</h3>
                <p className='result__text'>R$ 25.000,00</p>
            </div>

        </div>

        </div>
    )

}