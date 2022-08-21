import './styles.css'

export default function ModalCidades(props){

    const handleCity = (cityChosen,cidade) => {
        props.setForm({
            ...props.form,
            cidade: cityChosen
        });
        props.setCidadeEscolhida(cidade)
    }

    return(
        <div className='modal__cidades'>
            {props.cidades.map(item => (
                    <p className='item__cidade'
                    onClick={ () => handleCity(item.NAME + " - " + item.STATE,item)} 
                    key={item.NAME + item.STATE}>{item.NAME} - {item.STATE}</p>
                    ))} 
        </div>
    )
}