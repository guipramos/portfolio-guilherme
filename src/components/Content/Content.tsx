import React from 'react';
import { Accordion, GridTitle, Preject, Service } from '../Content/style';
import { Container } from '../Header/style';
import bgSobre from '../../assets/img/banner_eu.png';
import tango from '../../assets/img/tango.png';
import { BgSobre } from './style';

import AccordionPackage from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ButtonComponent } from '../Button/Button';

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

const projetos = [
	{
			title: "Tango Leadership brand",
			ano: "2021",
			url: "https://tangoleadershipcoaching.com/",
	},
	{
			title: "Tango Leadership brand",
			ano: "2021",
			url: "https://tangoleadershipcoaching.com/",
	},
	{
			title: "Tango Leadership brand",
			ano: "2021",
			url: "https://tangoleadershipcoaching.com/",
	},
]

export function Content(){
	return(
		<>
			<BgSobre style={{ backgroundImage: `url(${bgSobre})` }}>
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
			<Service>
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
			<Preject>
				<Container>
					<h3 className='title'>Projetos</h3>
					<div className="projetos__grupo">
						{projetos.map((projeto) => 
							<div className="item__projeto">
								<div className="item__projeto--img">
									<img src={tango} alt="Projeto item" />
								</div>
								<a href={projeto.url} className='item__projeto--link' target="_blank">
									<legend className='item__projeto--legenda-card'>
											<span>{projeto.title}</span>
											<span>Ano: {projeto.ano}</span>
									</legend>
									<span>Clique para conhecer um pouco do projeto</span>
								</a>
							</div>
						)}
					</div>
					<ButtonComponent />
				</Container>
			</Preject>
		</>
	);
}