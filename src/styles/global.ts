import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --body: #f0f2f5;
        --price-negative: #e52e4d;
        --header: #5429CC;
        --btn-light: #6933FF;
        --text-title: #363f5f;
        --text-body: #969cb3;
        --shape: #FFF; 
        --card-total: #33CC95;
        --input-background: #e7e9ee;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media(max-width: 1080px){
            font-size: 93.73%;
        }
        @media(max-width: 720px){
            font-size: 87.5%;
        }
    }

    body{
        background: var(--body);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font-family: 'Roboto Condensed', sans-serif;
        font-weight: 400;
    }

    button{
        cursor: pointer;
    }

    img{
        width: 100%;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }

    .manutencao {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        span {
            display: block;
            font-size: 6rem;
        }
    }
`;
