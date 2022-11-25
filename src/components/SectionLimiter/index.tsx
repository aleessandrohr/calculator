import type { ReactNode } from "react";

import { Container, Content } from "./stytes";

interface Props {
	children: ReactNode;
}

export const SectionLimiter: FC<Props> = ({ children }) => (
	<Container>
		<Content>{children}</Content>
	</Container>
);
