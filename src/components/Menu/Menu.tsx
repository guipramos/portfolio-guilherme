import React from 'react';
import {Nav} from '../Menu/style';
import { BiSearchAlt } from 'react-icons/bi';
import "./style.ts";

export function Menu(){
    return (
        <Nav>
            <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/">Sobre</a></li>
                <li><a href="/">Serviços</a></li>
                <li><a href="/">Projetos</a></li>
                <li><a href="/">Contato</a></li>
            </ul>
            <button><BiSearchAlt /></button>
        </Nav>
    );
}