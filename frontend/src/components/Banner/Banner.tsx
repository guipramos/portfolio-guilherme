import React from 'react';
import { Container } from '../Header/style';
import bg from '../../assets/img/banner-principal-temp.png'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BannerImg, GridTitle, SocialMidia } from './style';

export function Banner(){
    return (
        <>
            <BannerImg style={{ backgroundImage: `url(${bg})` }}>
                <Container>
                    <GridTitle>
                        <div>
                            <h1 className='title'>Oi! Me chamo Guilherme Ramos</h1>
                            <h2 className='subtitle'>Desenvolvedor Front end</h2>
                            <p>
                                Desenvolvedor front end, trabalhando na área de desenvolvimento há 3 anos, 
                                <span>com especialização em wordpress, html, css e javascript.</span>
                            </p>
                        </div>
                    </GridTitle>
                    <SocialMidia>
                        <a href="https://www.linkedin.com/in/guihpramos" target="_blank" rel="noreferrer"><AiFillLinkedin/></a>
                        <a href="https://github.com/guipramos" target="_blank" rel="noreferrer"><AiFillGithub/></a>
                    </SocialMidia>
                </Container>
            </BannerImg>
        </>
    );
}