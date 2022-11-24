import type { FCWithLayout } from "types/interfaces/layout";

import { MainSection } from "./components/MainSection";
import { Container } from "./styles";

export const Home: FCWithLayout = () => (
	<Container>
		<MainSection />
	</Container>
);
