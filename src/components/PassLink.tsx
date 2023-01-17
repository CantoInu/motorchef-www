import Link from "next/link"
import type { LinkProps } from "next/link"

import type { ReactChildren } from "../types"

type PassLinkProps = LinkProps & ReactChildren

export function PassLink({ children, ...props }: PassLinkProps) {
	return (
		<Link
			passHref
			legacyBehavior
			{...props}>
			{children}
		</Link>
	)
}