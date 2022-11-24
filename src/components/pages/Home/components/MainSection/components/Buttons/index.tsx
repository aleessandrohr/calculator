import { memo } from "react";

import {
	Container,
	Rows,
	Row,
	ButtonsContainer,
	ButtonContainer,
	Button,
} from "./styles";

interface IRow {
	buttons: Array<{
		value: number | string;
		styleType?: "AC" | "OPERATION" | "TOTAL";
	}>;
	id: number;
}

const rows: Array<IRow> = [
	{
		buttons: [
			{
				value: "AC",
				styleType: "AC",
			},
			{
				value: "+/-",
				styleType: "OPERATION",
			},
			{
				value: "%",
				styleType: "OPERATION",
			},
			{
				value: "/",
				styleType: "OPERATION",
			},
		],
		id: 1,
	},
	{
		buttons: [
			{
				value: 7,
			},
			{
				value: 8,
			},
			{
				value: 9,
			},
			{
				value: "*",
				styleType: "OPERATION",
			},
		],
		id: 2,
	},
	{
		buttons: [
			{
				value: 4,
			},
			{
				value: 5,
			},
			{
				value: 6,
			},
			{
				value: "-",
				styleType: "OPERATION",
			},
		],
		id: 3,
	},
	{
		buttons: [
			{
				value: 1,
			},
			{
				value: 2,
			},
			{
				value: 3,
			},
			{
				value: "+",
				styleType: "OPERATION",
			},
		],
		id: 4,
	},
	{
		buttons: [
			{
				value: 0,
			},
			{
				value: ".",
			},
			{
				value: "del",
			},
			{
				value: "=",
				styleType: "TOTAL",
			},
		],
		id: 5,
	},
];

export const Buttons: FC = memo(() => (
	<Container>
		<Rows>
			{rows.map(({ buttons, id }) => (
				<Row key={id}>
					<ButtonsContainer>
						{buttons.map(({ value, styleType }) => (
							<ButtonContainer key={value}>
								<Button styleType={styleType}>{value}</Button>
							</ButtonContainer>
						))}
					</ButtonsContainer>
				</Row>
			))}
		</Rows>
	</Container>
));
