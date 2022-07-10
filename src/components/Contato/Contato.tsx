import React, { FormEvent, useState } from 'react';
import {FormBox} from '../Contato/style'
import axios from 'axios';

interface FormData {
    getAll(): string[]
}


const initialValue: { [key: string]: any } = {
    nome: '',
	email: '',
	tel: '',
	mensagem: '',
}

export function Contato(){

    const [fieldText, setFieldText] = useState(initialValue);

	const handleInputChange = (event: any) => {
		fieldText[event.target.name] = event.target.value;
		setFieldText(fieldText)
	}

	const handleFormSubmit = (event: FormEvent) => {
		event.preventDefault();
        send();
		console.log(fieldText);
	}

    function send(){
        const formData = new FormData();
        Object.keys(fieldText).forEach(key => formData.append(key, fieldText[key]));
        axios.post('/send', formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => alert(response.data));
    }
    
    return (
        <FormBox id="contato">
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" name="nome" placeholder="Nome" id="nome" onChange={handleInputChange} />
                </div>
                <div>
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" name="email" placeholder="E-mail" id="email" onChange={handleInputChange} />
                </div>
                <div>
                    <label htmlFor="tel">Telefone:</label>
                    <input type="tel" name="tel" placeholder="Telefone" id="tel" onChange={handleInputChange} />
                </div>
                <div>
                    <label htmlFor="mensagem">Mensagem:</label>
                    <textarea id="mensagem" name='mensagem' placeholder='Deixa sua mensagem...' onChange={handleInputChange}></textarea>
                </div>
                <button type='submit'>Enviar</button>
            </form>
        </FormBox>
    )
}