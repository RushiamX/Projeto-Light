import React from 'react'
import './styles.css'

export default function ModalSalvarOrcamento(props){

    const[formSalvar, setFormSalvar] = React.useState({
        nomeCliente: '',
        telefoneCliente: '',
        dataTime: '',
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
    console.log(formSalvar)
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