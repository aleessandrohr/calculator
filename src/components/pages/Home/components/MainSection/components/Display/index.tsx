import {
	Container,
	ValuesContainer,
	Scroll,
	Values,
	Value,
	TotalContainer,
	Total,
} from "./styles";

type Operations = "-" | "*" | "/" | "%" | "+";

interface Props {
	total: number | null;
	values: Array<Operations | number>;
}

export const Display: FC<Props> = ({ total, values }) => (
	<Container>
		<ValuesContainer>
			<Scroll>
				{values && (
					<Values>
						{values.map((value, index) => (
							// eslint-disable-next-line react/no-array-index-key
							<Value key={index}>{value}</Value>
						))}
					</Values>
				)}
			</Scroll>
		</ValuesContainer>
		<TotalContainer>
			<Scroll>{total && <Total>{total}</Total>}</Scroll>
		</TotalContainer>
	</Container>
);
