import './styles.css'
import { useNavigate, Link } from 'react-router-dom';
import * as React from 'react';

export default function CardFormCadastro() {

    const navigate = useNavigate();

    const [form, setForm] = React.useState({
        name: '',
        phone: '',
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
        if (form.name === '' || form.phone === '' || form.email === '' || form.password === '') {
            setWarning({
                show: true,
                message: 'Preencha todos os campos'
            });
            setTimeout(() => {
                setWarning({
                    show: false,
                    message: ''
                });
            }, 3000);
            return;
        }



        let users = []
        if (localStorage.getItem('users')) {
            users = JSON.parse(localStorage.getItem('users'));
        }
        const user = users.find(u => u.email === form.email);
        if (user) {
            setWarning({
                show: true,
                message: 'E-mail já cadastrado'
            });
            setTimeout(() => {
                setWarning({
                    show: false,
                    message: ''
                });
            }, 3000);
        } else {
            users.push(form);
            localStorage.setItem('users', JSON.stringify(users));
            setForm({
                name: '',
                phone: '',
                email: '',
                password: ''
            });
            setTimeout(() => {
                navigate('/Login');
            }, 10000);
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="card__Form-Cadastro">
                <h2 className='form__title'>CADASTRO</h2>
                <input className='input__cadastro' type="text" name='name'
                    value={form.name}
                    onChange={handleChange} placeholder='Nome Completo' />

                <input className='input__cadastro' type="phone" name='phone'
                    value={form.phone}
                    onChange={handleChange} placeholder='Telefone' />

                <input className='input__cadastro' type="email" name='email'
                    value={form.email}
                    onChange={handleChange} placeholder='E-Mail' />

                <input className='input__cadastro' type="password" name='password'
                    value={form.password}
                    onChange={handleChange} placeholder='Senha' />

                {warning.show && <span className='warning'>{warning.message}</span>}

                <button className='btn__cadastro'>Cadastrar</button>
                <Link className='text__tenho-conta' to='/Calculation'>
                    <span>Já tenho conta</span>
                </Link>
            </div>
=======


        let users = []
        if (localStorage.getItem('users')) {
            users = JSON.parse(localStorage.getItem('users'));
        }
        const user = users.find(u => u.email === form.email);
        if (user) {
            setWarning({
                show: true,
                message: 'E-mail já cadastrado'
            });
            setTimeout(() => {
                setWarning({
                    show: false,
                    message: ''
                });
            }, 3000);
        } else {
            users.push(form);
            localStorage.setItem('users', JSON.stringify(users));
            setForm({
                name: '',
                phone: '',
                email: '',
                password: ''
            });
            setTimeout(() => {
                navigate('/Login');
            }, 10000);
        }
    }
    return (
        <form onSubmit={handleSubmit}>
        <div className="card__Form-Cadastro">
            <h2 className='form__title'>CADASTRO</h2>
            <input className='input__cadastro' type="text" name='name'
                value={form.name}
                onChange={handleChange} placeholder='Nome Completo' />

            <input className='input__cadastro' type="phone" name='phone'
                value={form.phone}
                onChange={handleChange} placeholder='Telefone' />

            <input className='input__cadastro' type="email" name='email'
                value={form.email}
                onChange={handleChange} placeholder='E-Mail' />

            <input className='input__cadastro' type="password" name='password'
                value={form.password}
                onChange={handleChange} placeholder='Senha' />

            {warning.show && <span className='warning'>{warning.message}</span>}
            
            <button className='btn__cadastro'>Cadastrar</button>
            <Link className='text__tenho-conta' to='/Login'>
                    <span>Já tenho conta</span>
            </Link>   
        </div>

        </form>
    )

}