import { COLORS } from "assets/colors";
import { FONTS } from "assets/fonts";
import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;

	> div {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		width: 100%;
		padding-bottom: 0.8rem;
		margin: 0 0.64rem 2.4rem;

		> div {
			overflow-y: hidden;
			overflow-x: auto;

			::-webkit-scrollbar {
				height: 0.35rem;
			}

			::-webkit-scrollbar-thumb {
				background: ${COLORS.scrollbar};
				border-radius: 5px;

				&:hover {
					background: ${COLORS.white};
				}
			}

			::-webkit-scrollbar-corner {
				background: transparent;
			}

			> span {
				user-select: none;
			}
		}
	}
`;

export const ValuesContainer = styled.div`
	height: 5.6rem;
`;

export const Scroll = styled.div``;

export const Values = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Value = styled.span`
	${FONTS.heading2}
	font-weight: normal;
`;

export const TotalContainer = styled.div`
	height: 4rem;
`;

export const Total = styled.span`
	color: ${COLORS.secondText};
	${FONTS.heading3}
	font-weight: normal;
`;
