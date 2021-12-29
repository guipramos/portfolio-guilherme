import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
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
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }
    
    .react-modal-overlay{
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display:flex;
        justify-content: center;
        align-items: center;
    }

    .react-modal-content{
        width: 100%;
        max-width: 576px;
        background: var(--body);
        padding: 3rem;
        position: relative;
        border-radius: 0.24rem;
    }

    .react-modal-close{
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        border: 0;
        background: transparent;
        transition: filter 0.2s;
        &:hover{
            filter: brightness(0.8);
        }
    }
`