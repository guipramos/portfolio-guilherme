import React from 'react';
import { Accordion, GridTitle, Preject, Service } from '../Content/style';
import { Container } from '../Header/style';
import bgSobre from '../../assets/img/banner_eu.png';
import { BgSobre } from './style';

import AccordionPackage from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { SimpleSlider } from '../Slide/SimpleSlider';
// import { ButtonComponent } from '../Button/Button';

const acordeon = [
	{
			title: "Institucional",
			texto: "Criação de site institucional para a sua empresa.",
	},
	{
			title: "Wordpress",
			texto: "Desenvolvimento de Temas , Customização de Templates, Correções, Atualizações em seu site.",
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
								<h1 className='title__about'>UM POUCO SOBRE MIM</h1>

								<p>Desenvolvedor Front-End, formado em Tecnologia da Internet pelo Senac com mais de 3 anos de experiência na área.</p>
								<p>Tenho experiência na área de desenvolvimento, criando Landing pages, sites institucionais e manutenção de páginas. Experiência com as seguintes tecnologias:</p>
								<p>Linguagens: HTML, CSS, Sass, Gulp, JavaScript e ReactJS</p>
								<p>Ferramenta: Wordpress</p>
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
			<Preject id='projetos'>
				<Container>
					<h3 className='title'>Projetos</h3>
					<SimpleSlider />
					{/* <ButtonComponent /> */}
				</Container>
			</Preject>
		</>
	);
}