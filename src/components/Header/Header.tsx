import React from 'react';
import { Container } from './style';
import "./style.ts";
import Navbar from '../Nav/Navbar';

export function Header(){
    return (
        <div>
            <Container>
                <div className="container gr-relative-search">
                </div>
                <Navbar />
            </Container>
        </div>
    );
}