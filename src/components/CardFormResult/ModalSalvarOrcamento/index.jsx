import './styles.css'

export default function ModalSalvarOrcamento(){

    return(
        <div className="modal__salvar-result">
                
                    <input className='input__salvar-orcamento' 
                            type="text" name='name'
                            value=""
                            onChange=""
                            placeholder='Nome do Cliente' />

                    <input className='input__salvar-orcamento' 
                            type="phone" name='telefone'
                            value=""
                            onChange=""
                            placeholder='Telefone do Cliente' />

                    <button className='btn__salvar-orcamento'>Salvar Orçamento</button>

                    </div> 
    )


}