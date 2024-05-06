import React from "react";

import tango from '../../assets/img/tango.png';
import yozzi from '../../assets/img/Yozzi.png';
import forrest from '../../assets/img/forrest.png';
import { Card } from "../Content/style";

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
        <Card >
          {projetos.map((projeto, index) => 
              <div className="item__projeto" key={index}>
                <div className="item__projeto--img">
                  <img src={projeto.imagem} alt="Projeto items" />
                </div>
                <div className='item__projeto--link'>
                  <legend className='item__projeto--legenda-card'>
                    <span>{projeto.title}</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                  </legend>
                  <a href="">Read more</a>
                </div>
              </div>
            )}
        </Card>
      {/* </Slider> */}
    </div>
  );
}