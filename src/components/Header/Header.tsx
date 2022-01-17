import React from 'react';
import { Container } from './style';
import { Menu } from '../Menu/Menu';
import "./style.ts";

export function Header(){
    return (
        <header className="gr-header">
            <Container>
                <div className="gr-menu-mobile">
                    <div className="gr-menu-pai">
                        <div className="dg-icon-menu-mobile">
                            <span className="bar1"></span>
                            <span className="bar2"></span>
                            <span className="bar3"></span>
                        </div>
                    </div>
                    <div className="container gr-relative-search">
                        <div className="gr-header-top">
                            <div className="gr-logo-header">
                                LOGO
                            </div>
                            <Menu/>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
}