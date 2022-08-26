import './style.css'

import React, { useState, useEffect } from 'react';

import iconCalc from '../../assets/images/icon-calc.png'
import iconConpass from '../../assets/images/icon-conpass.png'
import iconInclination from '../../assets/images/icon-inclination.png'
import iconLamp from '../../assets/images/icon-lamp.png'
import iconLight from '../../assets/images/icon-light.png'
import iconSearch from '../../assets/images/icon-search.png'
import iconTemperatura from '../../assets/images/icon-temperatura.png'

import cidadesJson from '../../jsonFiles/irradiacaoMunicipal.json'

import { useNavigate, Link } from 'react-router-dom';


export default function CardFormCalculation({ children }) {

    let cidadeSelecionada = [];
    let cidades = cidadesJson;

    const navigate = useNavigate();

    const tipoLigacoes = ["Monofásico", "Bifásico", "Trifásico"];
    const orientacoes = ["Norte", "Nordeste", "Noroeste", "Leste", "Sul", "Sudeste", "Sudoeste", "Oeste"];
    const inclinacoes = [5, 10, 15, 20, 25, 30];

    const [form, setForm] = React.useState({
        cidade: '',
        ligacao: '',
        consumo: '',
        temperatura: '',
        orientacao: '',
        inclinacao: '',
        cidadeObj: {}
    });

    const [city, setCity] = React.useState([]);

    const [warning, setWarning] = React.useState({
        show: false,
        message: ''
    });



    const removeAccents = (value) => {
        return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

    }

    React.useEffect(() => {
        if (form.cidade.length > 2) {

            cidadeSelecionada = [];
            cidades.forEach(element => {
            if (removeAccents(element.NAME).includes(removeAccents(form.cidade))) {
                    cidadeSelecionada.push(element);
                }
            })

            if (cidadeSelecionada.length < 15) {
                setCity(cidadeSelecionada);
            }

        } else {
            cidadeSelecionada = [];
        }

        if(form.cidade.includes('-')){
            let cidadadeFinal = form.cidade.slice(0 , form.cidade.length-5)
            let estadoFinal   = form.cidade.slice(form.cidade.length-2)

            cidades.forEach(element => {
                if (removeAccents(element.NAME) === removeAccents(cidadadeFinal) 
                && removeAccents(element.STATE) === removeAccents(estadoFinal)) {
                        handleCity(element.NAME, element)
                    }
            })
        }
    }, [form.cidade]);


    const handleCity = (cityChosen,cidade) => {
        setForm({
            ...form,
            cidadeObj: cidade
        });

        console.log(form.cidadeObj.NAME)
    }


    const handleChange = (event) => {
        event.preventDefault();
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });

    }


    const handleSubmit = (event) => {
        event.preventDefault();

        if (form.cidade === '' || form.cidadeObj.NAME === undefined ||
            form.consumo === '' || form.inclinacao === '' ||
            form.ligacao === '' || form.orientacao === '' ||
            form.temperatura === '') {
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
            localStorage.setItem('calculoAtual', JSON.stringify(form))
            navigate('/Result');

        }

    }

    return (

        <form onSubmit={handleSubmit} >
            <div className="card__Form-Calculation">

                <div className="div-title">
                    <h4 className="title-card">Cálculo</h4>
                </div>

                <div className="input__group">
                    <input
                        list='listaCidades'
                        className='input__calculation'
                        type="text"
                        placeholder='DIGITE A CIDADE'
                        name='cidade'
                        value={form.cidade}
                        onChange={handleChange} />
                        <datalist id="listaCidades">
                        {city.map(item => (
                        <option className='item__cidade'
                        key={item.NAME + item.STATE}>{item.NAME} - {item.STATE}</option>
                        ))} 
                        </datalist>



                    <img className='input__image' src={iconSearch} alt="" />
                </div>

                <div className="input__group">
                    <select className='input__calculation'
                        type="text"
                        name='ligacao'
                        value={form.ligacao}
                        onChange={handleChange}>
                        <option value=''>TIPO DE LIGAÇÃO</option>
                        {tipoLigacoes.map(ligacao => (
                            <option key={ligacao} value={ligacao}>{ligacao}</option>
                        ))}
                    </select>
                    <img className='input__image' src={iconLight} alt="" />
                </div>

                <div className="input__group">
                    <input className='input__calculation'
                        type="NUMBER"
                        placeholder='CONSUMO MENSAL kW/h'
                        name='consumo'
                        value={form.consumo}
                        onChange={handleChange} />

                    <img className='input__image' src={iconLamp} alt="" />
                </div>

                <div className="input__group">
                    <input className='input__calculation'
                        type="number"
                        placeholder='TEMPERATURA MÁXIMA'
                        name='temperatura'
                        value={form.temperatura}
                        onChange={handleChange} />

                    <img className='input__image' src={iconTemperatura} alt="" />
                </div>

                <div className="input__group">
                    <select className='input__calculation'
                        type="text"
                        name='orientacao'
                        value={form.orientacao}
                        onChange={handleChange}>
                        <option value=''>ORIENTAÇÃO</option>
                        {orientacoes.map(orientacao => (
                            <option key={orientacao} value={orientacao}>{orientacao}</option>
                        ))}
                    </select>
                    <img className='input__image' src={iconConpass} alt="" />
                </div>

                <div className="input__group">
                    <select className='input__calculation'
                        type="text"
                        name='inclinacao'
                        value={form.inclinacao}
                        onChange={handleChange}>
                        <option value=''>INCLINAÇÃO DO TELHADO</option>
                        {inclinacoes.map(inc => (
                            <option key={inc} value={inc}>{inc}</option>
                        ))}
                    </select>
                    <img className='input__image' src={iconInclination} alt="" />
                </div>

                {warning.show && <p className='warning-calculo'>{warning.message}</p>}

                <button className='btn__calculation'>
                    <a className='button__link-calculation'>CALCULAR </a>
                    <img className='input__image' src={iconCalc} alt="" />
                </button>


                {children}
            </div>
        </form>
    )

}