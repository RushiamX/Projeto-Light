import './style.css'
import React, {useState } from 'react';
import ClockBtn from '../../assets/images/clock-history.png'


export default function CardFromHistory({ children }) {     

    const [orcamentos, setOrcamentos] = React.useState([]);

    const [warning, setWarning] = React.useState({
        show: false,
        message: ''
    });


    const orc = JSON.parse(localStorage.getItem('orcamentosRealizados'));

    React.useEffect(() => {
       if(orc){
           setOrcamentos(orc)
           setWarning({
            show: false,
            message: ''
        });
       }else{
        setWarning({
            show: true,
            message: 'Nenhum Orçamento Realizado'
        });
       }
    }, []);


    return (
        <div className="card__history">
            <div className="div-title_history">
                <h6 className="title-card_history">histórico de uso</h6>
                <img className='image__clock_history' src={ClockBtn} alt="histórico" />
            </div>

            {warning.show && <p className='warning__history'>{warning.message}</p>}

            {orcamentos.map(item => (
            <div className='card-dados-history'
            key={item.dataTime}>
                <p className="dados-history">Cliente: {item.nomeCliente}</p>
                <p className="dados-history">Telefone: {item.telefoneCliente}</p>
                <p className="dados-history">Cidade: {item.dadosOrcamento.cidade}</p>
                <p className="dados-history">Data:  {item.dataTime}</p>
                <p className="dados-history">Potência:  {item.potenciaResultante} kwp</p>
                <p className="dados-history">Valor: R$ {item.valorOrcamento}</p>
            </div>
                ))}

            {children}
        </div>
    )

}