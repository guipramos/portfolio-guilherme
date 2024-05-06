import styled from "styled-components";

export const BgSobre = styled.div`
    background-position: center;
    background-repeat: no-repeat;
	height: 673px;
	@media(max-width: 991px){
		background-image: none;
		height: auto;
	}
`;

export const GridTitle = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    padding: 237px 0 50px;
		@media(max-width: 991px){
			padding: 70px 25px 50px 20px;
			grid-template-columns: 100%;
		}
    .title__about {
        font-size: 40px;
        font-weight: 800;
        text-transform: uppercase;
        font-family: Montserrat,sans-serif;
        position: relative;
        color: #333;
        margin-bottom: 50px;
		&:after{
			content: "";
			position: absolute;
			bottom: -10px;
			left: 0;
			width: 120px;
			height: 5px;
			border-radius: 50px;
			background-color: #FFAF00;
		}
    }

	p {
		margin-bottom: 20px;
		font-size: 1.09rem;
	}
	ul{
		display: flex;
		li {
			list-style: none;
			background-color: #ffaf00;
			padding: 5px 22px;
			margin: 0 15px 20px 0;
			border-radius: 10px;
			color: #fff;
		}
	} 
`;

export const Service = styled.div`
    .title{
        font-size: 40px;
		font-weight: 800;
		text-transform: uppercase;
		font-family: Montserrat,sans-serif;
		position: relative;
        padding: 70px 0 50px;
		@media(max-width: 991px){
			padding: 70px 20px 50px;
		}
		&:after{
			content: "";
			position: absolute;
			bottom: 40px;
			left: 0;
			width: 120px;
			height: 5px;
			border-radius: 50px;
			background-color: #FFAF00;
			@media(max-width: 991px){
				left: 21px
			}
		}
    }
	`;

export const Accordion = styled.div`
    margin-bottom: 80px;
	@media(max-width: 991px){
		padding: 0 20px;
	}
    .css-1elwnq4-MuiPaper-root-MuiAccordion-root {
        border-radius: 5px 5px 0 0 !important;
        box-shadow: 1px 3px 6px 0 rgb(50 50 50 / 20%) !important;
        margin-bottom: 20px !important;
    }
    .css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root{
        background-color: #ffaf00 !important;
        .css-ahj2mt-MuiTypography-root{
            color: #fff;
            font-weight: 800;
            font-size: 16px;
        }
    }
    .css-ahj2mt-MuiTypography-root {
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 14px;
        text-transform: uppercase;
    }
    .css-i4bv87-MuiSvgIcon-root {
        color: #fff;
    }
`;

export const Project = styled.div`
  h3 {
    color: #282938;
    font-size: 21px;
    font-weight: 600;
    line-height: 32px
  }
  h4 {
    color: #282938;
    font-size: 64px;
    font-weight: 700;
    line-height: 77px;
    margin: 21px 0 107px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  .item__projeto {
    background-color: #fff;
    width: 100%;
    max-width: 350px;
    height: 440px;
    margin-right: 40px;
    border-radius: 8px;
    .item__projeto--img img {
      border-radius: 8px;
    }
    .item__projeto--link {
      padding: 16px;
      .item__projeto--legenda-card {
        > span {
          color: #282938;
          font-size: 21px;
          font-weight: 700;
          line-height: 45px;
        }
        p {
          color: #1C1E53;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 20px;
          margin-bottom: 15px;
        }
      }
      > a {
        color: #000;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 28px;
      }
    }
  }
`;