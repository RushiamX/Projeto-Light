import React from 'react'
import './styles.css'
import { useNavigate, Link } from 'react-router-dom';

export default function ModalSalvarOrcamento(props){

    const navigate = useNavigate();

    const[formSalvar, setFormSalvar] = React.useState({
        nomeCliente: '',
        telefoneCliente: '',
        dataTime: '',
        potenciaTotal: '',
        valorOrcamento: '',
        potenciaResultante: '',
        dadosOrcamento: {}
    });

    const [warning, setWarning] = React.useState({
        show: false,
        message: ''
    });

    const dataHora = new Date();
    const day = dataHora.getDate().toString();
    const month = dataHora.getMonth()+1;
    const year = dataHora.getFullYear().toString();
    const hora = dataHora.getHours().toString();
    const minutes = dataHora.getMinutes().toString();
    const horaOrcamento = day +"/"+ month+"/"+year+" - "+hora+":"+minutes


    React.useEffect(() => {
        setFormSalvar({
            ...formSalvar,
            dataTime: horaOrcamento,
            potenciaTotal: "350 KW/h",
            valorOrcamento: (props.potenciaResultante * 3100).toFixed(2),
            potenciaResultante: props.potenciaResultante,
            dadosOrcamento: props.dadosAtuais
        });
    }, []);

    const handleChange = (event) => {
        event.preventDefault();
        setFormSalvar({
            ...formSalvar,
            [event.target.name]: event.target.value
        });

    }

 const handleSubmit = (event) =>{
    event.preventDefault();
    if (formSalvar.nomeCliente === '' || formSalvar.telefoneCliente === '') {
    setWarning({
        show: true,
        message: 'Preencha todos os campos corretamente'
    });
    setTimeout(() => {
        setWarning({
            show: false,
            message: ''
        });
    }, 3000);
    return;
} else {
    let orcamentosRealizados = [];
    if (localStorage.getItem('orcamentosRealizados')) {
        orcamentosRealizados = JSON.parse(localStorage.getItem('orcamentosRealizados'));
    };   
    orcamentosRealizados.push(formSalvar);
    localStorage.setItem('orcamentosRealizados', JSON.stringify(orcamentosRealizados));

    setTimeout(() => {
        localStorage.removeItem('calculoAtual');
        navigate('/History');
    }, 500);
}


 }

    return(
        <div className="modal__salvar-result">
    
                <form className='form__salvar-orcamento'
                    onSubmit={handleSubmit}>
                    <input className='input__salvar-orcamento' 
                            type="text" name='nomeCliente'
                            value={formSalvar.nomeCliente}
                            onChange={handleChange}
                            placeholder='Nome do Cliente' />

                    <input className='input__salvar-orcamento' 
                            type="phone" name='telefoneCliente'
                            value={formSalvar.telefoneCliente}
                            onChange={handleChange}
                            placeholder='Telefone do Cliente' />

                    <button className='btn__salvar-orcamento'>Salvar Orçamento</button>
                    {warning.show && <p className='warning__salvar-orcamento'>{warning.message}</p>}
                </form>

        </div> 
    )


}