import styled from "styled-components";

export const FooterMain = styled.div`
	height: 500px;
	.grid__layout{
		display: grid;
		grid-template-columns: 50% 50%;
		@media(max-width: 991px){
            grid-template-columns: 100%;
			padding: 0 20px 0;
        }
		h1{
			font-size: 40px;
			font-weight: 800;
			text-transform: uppercase;
			font-family: Montserrat,sans-serif;
			padding: 70px 0 15px;
			color: #333;
		}
		p{
			padding: 0 190px 25px 0;
    		line-height: 28px;
			@media(max-width: 991px){
				padding: 0 20px 25px 0;
        	}
		}
		.icon__contato{
			display: flex;
			svg{
				margin-right: 15px;
				font-size: 20px;
			}
			a {
				color: #FFAF00;
				font-weight: 700;
				text-decoration: none;
				display: block;
				margin-right: 25px;
				&:hover{
					text-decoration: underline;
				}
			}
		} 
	}
	.copyright {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 30px 0 25px;
		border-top: 1px solid #ccc;
		margin-top: 50px;
		@media(max-width: 991px){
			padding: 30px 0 90px;
			margin-top: 50px;
		}
	}
`;

export const FormBox = styled.div`
	form {
		max-width: 500px;
		padding-top: 50px;
		@media(max-width: 991px){
			padding-top: 20px;
		}
		div {
			display: flex;
			flex-direction: column;
			margin-top: 10px;
			label{
				margin: 10px 0 0;
			}
			input, textarea {
				height: 40px;
				border-radius: 5px;
				border: 1px solid #ccc;
				padding: 0 0 0 15px;
				
			}
			textarea {
				height: 100px;
				padding: 10px;
			}
		}
		button {
			width: 150px;
			height: 40px;
			border: none;
			background-color: #272626;
			font-size: 16px;
			font-weight: 700;
			color: #fff;
			border-radius: 5px;
			margin-top: 25px;
			transition: filter 0.2s;
			&:hover{
				filter: brightness(1.5);
				font-weight: 500;
			}
		}
	}
`;
