import styled from "styled-components";

export const Nav = styled.nav`
    position: relative;
    display: flex;
    align-items: center;
    padding: 35px 0;
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
    button{
        border: none;
        svg{
            font-size: 20px;
        }
    }
`;