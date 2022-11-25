import { COLORS } from "assets/colors";
import styled from "styled-components";

export const Container = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	height: 100%;
	padding: 1rem;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: calc(100vw - 1rem * 2);
	max-width: 35.4rem;
	background: ${COLORS.secondary};
	border-radius: 32px;
	padding: 3.2rem;
`;
