import { COLORS } from "assets/colors";
import { FONTS } from "assets/fonts";
import styled, { css } from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 100%;
`;

export const Rows = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
`;

export const Row = styled.li``;

export const ButtonsContainer = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
`;

export const ButtonContainer = styled.li``;

export const Button = styled.button<{
	styleType: "AC" | "OPERATION" | "TOTAL";
}>`
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${COLORS.primary};
	color: ${COLORS.vividPrimary};
	width: 100vw;
	max-width: 6.5rem;
	height: 100vh;
	max-height: 6.5rem;
	${FONTS.heading4}
	font-weight: bold;
	border-radius: 50%;
	transition: filter 0.2s ease-out;
	cursor: pointer;

	&:hover,
	&:focus {
		filter: opacity(0.6);
	}

	${({ styleType }) => {
		switch (styleType) {
			case "AC":
				return css`
					background: ${COLORS.vividSecondary};
					color: ${COLORS.firstText};
				`;
			case "OPERATION":
				return css`
					background: ${COLORS.vividPrimary};
					color: ${COLORS.firstText};
					opacity: 0.8;
				`;
			case "TOTAL":
				return css`
					background: ${COLORS.vividPrimary};
					color: ${COLORS.firstText};
				`;
			default:
				return;
		}
	}}
`;
