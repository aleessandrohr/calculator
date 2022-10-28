import type { LinkProps } from "next/link";
import LinkNext from "next/link";
import type { ReactNode } from "react";

import { A } from "./styles";

interface Props extends LinkProps {
	children: ReactNode;
}

export const Link: FC<Props> = ({ children, ...props }) => (
	<LinkNext {...props} passHref>
		<A>{children}</A>
	</LinkNext>
);
