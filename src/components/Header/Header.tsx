import React from 'react';
import "./style.ts";

export function Header(){
    return (
        <header className="gr-header">
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
                        <div className="gr-nav">
                            <ul>
                                <li><a href="/">Inicio</a></li>
                                <li><a href="/">Sobre</a></li>
                                <li><a href="/">Serviços</a></li>
                                <li><a href="/">Projetos</a></li>
                                <li><a href="/">Contato</a></li>
                            </ul>
                        </div>
                    </div>
                    <span className="gr-icon icon-search"></span>
                </div>
            </div>
        </header>
    );
}