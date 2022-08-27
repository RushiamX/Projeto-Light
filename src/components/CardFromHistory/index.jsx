import './style.css'
import React, {useState } from 'react';
import ClockBtn from '../../assets/images/clock-history.png'


export default function CardFromHistory({ children }) {



    const [dadosAtuais, setDadosAtuais] = React.useState({
    });

    const calculoAtual = JSON.parse(localStorage.getItem('calculoAtual'));

    React.useEffect(() => {
        setDadosAtuais(calculoAtual)

    }, []);



    return (
        <div className="card__history">
            <div className="div-title_history">
                <h6 className="title-card_history">histórico de uso</h6>
                <img className='image__clock_history' src={ClockBtn} alt="historico" />
            </div>
            <div className='card-dados'>
                <p className="dados-history">Ligaçõa: {dadosAtuais.ligacao}</p>
                <p className="dados-history">Consumo Mensal: {dadosAtuais.consumo}</p>
                <p className="dados-history">Potência Necessária: 8.62 KwP</p>
                <p className="dados-history">{dadosAtuais.cidade}</p>
                <p className="dados-history">12/07/2022</p>
            </div>
            {children}
        </div>
    )

}