
import './styles.css'

export default function CardFormCadastro({children}){
    return(
        <div className="card__Form-Cadastro">
            <h2 className='form__title'>CADASTRO</h2>
            <input className='input__cadastro' type="text" placeholder='Nome Completo'/>
            <input className='input__cadastro' type="phone" placeholder='Telefone'/>
            <input className='input__cadastro' type="email" placeholder='E-Mail'/>
            <input className='input__cadastro' type="password" placeholder='Senha'/>
            <button className='btn__cadastro'>Cadastrar</button>
            <p className='text__tenho-conta'>Já tenho conta</p>
            {children}
        </div>
    )

}