import './styles.css'

import IconPlan from '../../assets/images/icon-plan.png'
import React, { useState } from 'react';
import ModalSalvarOrcamento from './ModalSalvarOrcamento';
import { useNavigate, Link } from 'react-router-dom';

import { calculaPotencia } from '../../pages/Form-Calculation/calculaPotencia.js';

export default function CardFormResult() {

    const navigate = useNavigate();

    const [dadosAtuais, setDadosAtuais] = React.useState({});
    const [showModalOrcamento, setShowModalOrcamento] = React.useState(false);
    const [potenciaResultante, setPotenciaResultante] = React.useState();

    const calculoAtual = JSON.parse(localStorage.getItem('calculoAtual'));


    React.useEffect(() => {
        if(calculoAtual){

        setDadosAtuais(calculoAtual)

        let calc = calculaPotencia(parseInt(calculoAtual.consumo),
        calculoAtual.ligacao,
        parseFloat(calculoAtual.cidadeObj.ANNUAL/1000), 
        parseInt(calculoAtual.temperatura), 
        parseInt(calculoAtual.inclinacao), 
        calculoAtual.orientacao);

        setPotenciaResultante(calc.toFixed(3))

        }else{
            navigate('/Calculation');
        }
    }, []);

        return (
            <div className="card__form-result-full">
    
                <div className="card__Form-Result">
                    <div className="div-title">
                        <h4 className="title-card">Resultado</h4>
                        <img className="title-image" src={IconPlan} alt="" />
                    </div>
    
                    <div className="form-result__group-itens">
                        <div className="group__info">
                            <p className="group__info-tag">Consumo Mensal: </p>
                            <p className="group__info-answer">{dadosAtuais.consumo} Kw/h</p>
                        </div>
                        <div className="group__info">
                            <p className="group__info-tag">Ligação: </p>
                            <p className="group__info-answer">{dadosAtuais.ligacao}</p>
                        </div>
                        <div className="group__info">
                            <p className="group__info-tag">Cidade: </p>
                            <p className="group__info-answer">{dadosAtuais.cidade}</p>
                        </div>
                    </div>
    
                    <div className="form-result__result-components">
                        <div className='result'>
                            <div className="result__group">
                                <h3 className='result__title'>Potência Necessária: </h3>
                                <p className='result__text'>{potenciaResultante} kwp</p>
                            </div>
                            <div className="result__group">
                                <h3 className='result__title'>Valor do Orçamento: </h3>
                                <p className='result__text'>R$ {(potenciaResultante * 3100).toFixed(2)}</p>
                            </div>
                            {/* <div className="result__equipamento">
                                <h3 className='select_equip'>Selecionar Equipamento</h3>
                            </div> */}
                        </div>
                        <div className="result__salvar">
                            <h3 className='salvar_orcamento' onClick={() => setShowModalOrcamento(!showModalOrcamento)}>
                                Salvar Orçamento
                            </h3>
                        </div>
                    </div>
    
                </div>
    
                {showModalOrcamento &&  <ModalSalvarOrcamento 
                dadosAtuais={dadosAtuais} 
                setDadosAtuais={setDadosAtuais}
                potenciaResultante={potenciaResultante} />}
    
             </div>
        );
    
};