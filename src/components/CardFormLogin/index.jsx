
import './styles.css'

export default function CardLogin({children}){
    return(
        <div className="card__Login">
            <h2 className='form__title'>Login</h2>
            <input className='input__login' type="email" placeholder='E-Mail'/>
            <input className='input__login' type="password" placeholder='Senha'/>
            <button className='btn__login'><a href='/Calculation'>Entrar</a></button>
            <a className='text__nao-tenho-conta' href="/SingUp">Não tem conta? Cadastre-se Aqui</a>
            {children}
        </div>
    )

}