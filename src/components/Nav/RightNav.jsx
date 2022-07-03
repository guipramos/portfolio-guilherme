import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding: 3.5rem 0 0 2.063rem;
    transition: transform 0.3s ease-in-out;
    li {
      a{
        color: #fff !important;
      }
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li><a href="">Inicio</a></li>
      <li><a href="">Sobre</a></li>
      <li><a href="">Serviços</a></li>
      <li><a href="">Projetos</a></li>
      <li><a href="">Contato</a></li>
    </Ul>
  )
}

export default RightNav