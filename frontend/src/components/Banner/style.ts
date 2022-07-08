import styled from "styled-components";

export const BannerImg = styled.div`
    background-position: center;
    background-repeat: no-repeat;
    background-color: #272626;
    height: 770px;
    @media(max-width: 991px){
        background-image: none !important;
        height: auto;
    }
`;

export const GridTitle = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    padding: 190px 0 0;
    @media(max-width: 991px){
        padding: 28px 0 0 20px;
        grid-template-columns: 100%;
    }
    > div {
        padding: 0 50px 0 0;
    }
    .title {
        font-family: 'Montserrat', sans-serif;
        color: #fff;
        font-size: 48px;
        line-height: 50px;
        margin:.67em 0 0 0;
        
        @media(max-width: 991px){
            font-size: 34px;
        }
    }
    
    .subtitle {
        color: #FFAF00;
        font-family: 'Montserrat', sans-serif;
        font-size: 40px;
    }
    p {
        color: #fff;
        span {
            display: block;
            @media(max-width: 991px){
                display: inline;
            }
        }
    }
    `;

export const SocialMidia = styled.div`
    padding: 35px 0 0;
    @media(max-width: 991px){
        padding: 30px 20px;
    }
    a{
        svg{
            font-size: 25px;
            color: #fff;
        }
        &:nth-child(2){
            margin-left: 15px
        }
    }
`;