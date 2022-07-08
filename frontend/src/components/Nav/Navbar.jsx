import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  border-bottom: 2px solid #f1f1f1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media(max-width: 991px){
    background-color: #fff;
    position: fixed;
    box-shadow: -2px -20px 20px 20px #cccccc82;
    z-index: 999;
  }
  ul{
    display: flex;
      li{
        margin-right: 30px;
        position: relative;
        list-style: none;
        &:hover{
          &:after{
            content: "";
            width: 100%;
          }
        }
        &:after {
          content: "";
          position: absolute;
          width: 0;
          height: 5px;
          bottom: -10px;
          left: 0;
          background-color: #FFAF00;
          border-radius: 50px;
          transition: ease-in-out .3s;
        }
        a {
          color: #202020;
          font-weight: 700;
          text-decoration: none;
          font-size: 18px;
        }
      } 
    }     
  .logo {
    padding: 15px 0;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <img src={require('../../assets/img/logo.png').default} alt="Guilherme Ramos" />
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar