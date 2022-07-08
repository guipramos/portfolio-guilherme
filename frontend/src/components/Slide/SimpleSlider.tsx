import React, { Component } from "react";
import Slider from "react-slick";

import tango from '../../assets/img/tango.png';
import yozzi from '../../assets/img/Yozzi.png';
import forrest from '../../assets/img/forrest.png';

const projetos = [
	{
		imagem: tango,
		title: "Tango Leadership brand",
		ano: "2021",
		url: "https://tangoleadershipcoaching.com/",
	},
	{
		imagem: yozzi,
		title: "Yozzi leadership",
		ano: "2021",
		url: "https://yozzileadership.com/",
	},
	{
		imagem: forrest,
		title: "Forrest Coaching & Consulting",
		ano: "2021",
		url: "https://forrestcoach.com/",
	},
]

export function SimpleSlider(){
    // const settings = {
    //   dots: true,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 3,
    //   slidesToScroll: 3
    // };

    return (
      <div>
        {/* <Slider {...settings}> */}
            <div className="projetos__grupo">
                {projetos.map((projeto) => 
                    <div className="item__projeto">
                        <div className="item__projeto--img">
                            <img src={projeto.imagem} alt="Projeto item" />
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
        {/* </Slider> */}
      </div>
    );
}