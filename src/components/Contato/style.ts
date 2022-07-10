import styled from "styled-components";

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
