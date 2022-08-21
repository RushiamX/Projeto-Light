import './styles.css'

export default function ModalCidades(props){

    const handleCity = (cityChosen) => {
        console.log(cityChosen)
        props.setForm({
            ...props.form,
            cidade: cityChosen
        });
    }

    return(
        <div className='modal__cidades'>
            {props.cidades.map(item => (
                    <p className='item__cidade'
                    onClick={ () => handleCity(item.NAME + " - " + item.STATE)} 
                    key={item.NAME + item.STATE}>{item.NAME} - {item.STATE}</p>
                    ))} 
        </div>
    )
}