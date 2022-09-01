import './styles.css'
import { Link, useNavigate } from 'react-router-dom';

import React from 'react';

export default function CardLogin() {
    const navigate = useNavigate();

    const [form, setForm] = React.useState({
        email: '',
        password: ''
    });

    const [warning, setWarning] = React.useState({
        show: false,
        message: ''
    });

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        let users = [];
        if (localStorage.getItem('users')) {
            users = JSON.parse(localStorage.getItem('users'));
            const user = users.find(u => u.email === form.email && u.password === form.password);
            if (user) {
                users.push(user);
                localStorage.setItem('token', btoa(user.email));
                setWarning({ show: false, message: '' });
                navigate('/Calculation');
            } else {
                setWarning({ show: true, message: 'Usuário ou senha inválidos' });
            }
        } else {
            setWarning({ show: true, message: 'Não existe usuários cadastrados' });
            setTimeout(() => {
                setWarning({ show: false, message: '' });
            }, 10000);
        }
    }
    return (
        <form onSubmit={handleSubmit} className='form__login'>
            <div className="card__Login">
                <h2 className='form__title'>Login</h2>
                <input className='input__login' type="email" name='email' placeholder='E-MAIL' value={form.email} onChange={handleChange} />
                <input className='input__login' type="password" name='password' placeholder='SENHA' value={form.password}
                    onChange={handleChange} />
                <button className='btn__login'>Entrar</button>
                {warning.show && <span className='warning'>{warning.message}</span>}
                <Link className='text__nao-tenho-conta' to='/SignUp'>
                    <p>Não tem conta? <br></br> <span className='text_cadastre-se'>Cadastre-se aqui</span> </p>
                </Link>
            </div>
        </form>
    )

}