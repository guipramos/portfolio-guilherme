import React from 'react';
import { Accordion, GridTitle, Project, Service } from '../Content/style';
import { Container } from '../Header/style';
import bgSobre from '../../assets/img/banner_eu.png';
import { BgSobre } from './style';

import AccordionPackage from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { SimpleSlider } from '../Slide/SimpleSlider';

const acordeon = [
	{
			title: "Institucional",
			texto: "Criamos sites institucionais personalizados para sua empresa, destacando sua marca e alcançando seus objetivos de negócios. Trabalhamos com você para criar um site atraente, fácil de navegar e otimizado para mecanismos de busca, aumentando sua presença online e atraindo novos clientes.",
	},
	{
			title: "Wordpress",
			texto: "Oferecemos manutenção e atualização em seu site, garantindo que ele esteja sempre funcionando corretamente e atualizado. Nossa equipe de especialistas trabalhará com você para entender suas necessidades e manter o site em sintonia com sua marca e objetivos de negócios.",
	},
	{
			title: "Landing Page",
			texto: "Produção de LPS customizadas",
	},
]

export function Content(){
	return(
		<>
			<BgSobre style={{ backgroundImage: `url(${bgSobre})` }} id='sobre'>
				<Container>
						<GridTitle>
						<div>
							<h1 className='title__about'>SOBRE MINHA CARREIRA</h1>
							<p>Sou desenvolvedor Front-End com formação em Tecnologia da Internet pelo Senac e mais de três anos de experiência na área. Tenho experiência em criação de landing pages, sites institucionais e manutenção de páginas, usando as seguintes tecnologias:</p>
							<ul>
								<li>HTML</li>
								<li>CSS</li>
								<li>Sass</li>
								<li>Gulp</li>
								<li>JavaScript</li>
								<li>ReactJS</li>
							</ul>
							<p>Também possuo experiência com a ferramenta Wordpress.</p>
						</div>
						</GridTitle>
				</Container>
			</BgSobre>
			<Service id='servicos'>
				<Container>
					<h3 className='title'>Serviços</h3>
					<Accordion>
						{acordeon.map( (item) => 
							<AccordionPackage>
								<AccordionSummary
									key={item.title}
									expandIcon={<ExpandMoreIcon />}
									aria-controls="panel1a-content"
									id="panel1a-header"
								>
								<Typography>{item.title}</Typography>
								</AccordionSummary>
								<AccordionDetails>
										<Typography>{item.texto}</Typography>
								</AccordionDetails>
							</AccordionPackage>
						)}
					</Accordion>
				</Container>
			</Service>
			<Project id='projetos'>
				<Container>
					<h3>Projetos recente</h3>
          <h4>Meu portfólio</h4>
					<SimpleSlider />
					{/* <ButtonComponent /> */}
				</Container>
			</Project>
		</>
	);
}