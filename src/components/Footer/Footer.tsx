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
				<div className="section__contact">
					<h1>Fale Conosco</h1>
					<p>Entre em contato conosco para saber mais sobre nossos serviços e tirar suas dúvidas.</p>
					<div className="contact__details">
						<div className="contact__method">
							<AiOutlineWhatsApp />
							<a href="tel:11941078629">(11) 9 4107-8629</a>
						</div>
						<div className="contact__method">
							<AiOutlineMail />
							<a href="mailto:gui.pramos@hotmail.com">gui.pramos@hotmail.com</a>
						</div>
					</div>
				</div>
				<div className="img--contato">
						<img src={require('../../assets/img/contato.png').default} alt="Guilherme Ramos" />
					</div>
			</div>
				<div className="copyright">
					<p>Copyright © {anoAtual.getFullYear()} by Guilherme Ramos. Todos os Direitos Reservados.</p>
				</div>
			</Container>
		</FooterMain>
	)
}