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

export const Preject = styled.div`
    position: relative;
    background-color: #dcdcdc;
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
	.projetos__grupo{
		display: grid;
		grid-template-columns: repeat(3,1fr);
		padding-bottom: 125px;
		@media(max-width: 991px){
			grid-template-columns: 100%;
			padding: 0 20px 115px;
		}
		.item__projeto{
			margin: 0 35px 17px 0;
			position: relative;
			transition: opacity .4s;
			@media(max-width: 991px){
				margin: 0 0 17px 0;
			}
			&:hover{
				.item__projeto--link{
					bottom: 5px;
    				opacity: 1;
				}
			}
			.item__projeto--img{
				img{
					border-radius: 12px;
					width: 100%;
				}
			}
			.item__projeto--link{
				position: absolute;
				bottom: -20px;
				left: 0;
				background-color: rgba(0,0,0,.5);
				display: inline-block;
				width: 100%;
				height: 30%;
				border-radius: 0 0 12px 12px;
				transition: .4s linear;
				opacity: 0;
				text-decoration: none;
				.item__projeto--legenda-card{
					display: flex;
					align-items: center;
					justify-content: space-evenly;
					padding: 13px 0 0;
					span{
						color: #fff;
						font-size: 20px;
					}
				}
				> span{
					font-size: 18px;
					color: #fff;
					text-align: center;
					display: block;
					text-decoration: underline;
				}
			}
		}
	}
`;