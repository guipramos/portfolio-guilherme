import styled from "styled-components"

export const Button = styled.div `
    position: absolute;
    bottom: 23px;
    left: 50%;
    transform: translate(-50%,-50%);
    .btn__ver--mais{
        display: block;
        width: 250px;
        height: 50px;
        line-height: 46px;
        text-decoration: none;
        text-align: center;
        border-radius: 50px;
        border: 3px solid #272626;
        color: #272626;
        font-size: 20px;
        font-weight: 700;
        position: relative;
        overflow: hidden;
        background: transparent;
        text-transform: uppercase;
        transition: all .35s;
        &:before{
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            top: -100%;
            left: 0;
            background: #272626;
            z-index: -1;
            transition: all .35s;
        }
        &:after{
            transition-delay: .2s;
        }
    }
`;