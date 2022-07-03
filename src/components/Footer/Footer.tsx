import React, { FormEvent, useState } from 'react';
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';
import { Container } from '../Header/style';
import {FooterMain, FormBox} from './style';

const initialValue: { [key: string]: any } = {
	nome: '',
	email: '',
	tel: '',
	mensagem: '',
}

export function Footer(){

	const [fieldText, setFieldText] = useState(initialValue);

	const anoAtual = new Date;	

	const handleInputChange = (event: any) => {
		fieldText[event.target.name] = event.target.value;
		setFieldText(fieldText)
	}

	const handleFormSubmit = (event: FormEvent) => {
		event.preventDefault();
		console.log(fieldText);
	}

	return(
		<FooterMain>
			<Container>
				<div className='grid__layout'>
					<div>
						<h1>Vamos conversar!</h1>
						<p>
							Entre em contato para saber sobre nossos serviços. 
							Estamos sempre à disposição para tirar suas dúvidas 
							ou se quiser fazer uma sugestão ou deixar sua crítica, 
							utilize um dos nossos meios de contato:
						</p>
						<div className="icon__contato">
							<AiOutlineWhatsApp/><a href="tel:11941078629">(11)9 4107-8629</a>
							<AiOutlineMail /><a href="mailto:gui.pramos@hotmail.com">gui.pramos@hotmail.com</a>
						</div>
					</div>
					<FormBox>
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
				</div>
				<div className="copyright">
					<p>Copyright © {anoAtual.getFullYear()} by Guilherme Ramos. All Rights Reserved.</p>
				</div>
			</Container>
		</FooterMain>
	)
}