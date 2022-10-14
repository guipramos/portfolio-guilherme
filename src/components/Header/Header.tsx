import React from 'react';
import { Container } from './style';
import "./style.ts";
import whats from '../../assets/img/whatsapp.png'
import Navbar from '../Nav/Navbar';

export function Header(){
    return (
        <div>
            <Container>
                <a href="https://api.whatsapp.com/send?phone=5511941078629&text=Bom%20dia!%20Quero%20solicitar%20um%20or%C3%A7amento." className='btn__whats' target="_blank">
                    <img src={whats} alt="" />
                </a>
                <Navbar />
            </Container>
        </div>
    );
}