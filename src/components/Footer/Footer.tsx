import React from 'react';
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';
// import { Contato } from '../Contato/Contato';
import { Container } from '../Header/style';
import {FooterMain } from './style';

export function Footer(){
	
	const anoAtual = new Date();	

	return(
		<FooterMain>
			<Container>
				<div className='grid__layout'>
					<div>
						<h1>Vamos conversar!</h1>
						<p>
							Entre em contato para saber sobre nossos serviços. 
							Estou sempre à disposição para tirar suas dúvidas 
							{/* ou se quiser fazer uma sugestão ou deixar sua crítica, 
							utilize um dos nossos meios de contato: */}
						</p>
						<div className="icon__contato">
							<AiOutlineWhatsApp/><a href="tel:11941078629">(11)9 4107-8629</a>
							<AiOutlineMail /><a href="mailto:gui.pramos@hotmail.com">gui.pramos@hotmail.com</a>
						</div>
					</div>
					<div className="img--contato">
						<img src={require('../../assets/img/contato.png').default} alt="Guilherme Ramos" />
					</div>
					{/* <Contato /> */}
				</div>
				<div className="copyright">
					<p>Copyright © {anoAtual.getFullYear()} by Guilherme Ramos. All Rights Reserved.</p>
				</div>
			</Container>
		</FooterMain>
	)
}