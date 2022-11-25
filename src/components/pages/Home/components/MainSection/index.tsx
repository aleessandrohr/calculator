import { useState } from "react";

import { Buttons } from "./components/Buttons";
import { Display } from "./components/Display";
import { Container, Content } from "./styles";

type Operations = "-" | "*" | "/" | "%" | "+";

export const MainSection: FC = () => {
	const [values] = useState<Array<Operations | number>>([]);
	const [total] = useState<number | null>(null);

	return (
		<Container>
			<Content>
				<Display values={values} total={total} />
				<Buttons />
			</Content>
		</Container>
	);
};
