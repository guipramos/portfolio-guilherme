import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1280px;
    display: block;
    margin: 0 auto;
    .gr-header-top{
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        @media(max-width: 991px){
            flex-direction: column;
        }
    }
`;

