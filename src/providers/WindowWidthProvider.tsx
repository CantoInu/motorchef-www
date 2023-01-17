import { createContext, useContext, useEffect, useState } from "react"

import type { ReactChildren } from "../types"

export type WindowWidthContext = {
	widerThanLarge: boolean,
	widerThanMedium: boolean,
	widerThanSmall: boolean
}

export const WindowWidthCtx = createContext<WindowWidthContext>({
	widerThanLarge: true,
	widerThanMedium: true,
	widerThanSmall: true
})

export function useWindowWidth(): WindowWidthContext {
	return useContext(WindowWidthCtx)
}

type Props = ReactChildren & {
	breakpoints?: [ number, number, number ]
}

const defaultBreakpoints: [ number, number, number ] = [ 1024, 768, 576 ]

export function WindowWidthProvider({ breakpoints = defaultBreakpoints, children }: Props) {
	const [ widerThanLarge, setLarge ] = useState<boolean>(true)
	const [ widerThanMedium, setMedium ] = useState<boolean>(true)
	const [ widerThanSmall, setSmall ] = useState<boolean>(true)

	useEffect(() => {
		function handleResize() {
			setLarge(!!window?.innerWidth && window.innerWidth >= breakpoints[0])
			setMedium(!!window?.innerWidth && window.innerWidth >= breakpoints[1])
			setSmall(!!window?.innerWidth && window.innerWidth >= breakpoints[2])
		}
		handleResize()
		window.addEventListener("resize", handleResize)

		return () => window.removeEventListener("resize", handleResize)
	}, [ breakpoints ])

	return (
		<WindowWidthCtx.Provider
			value={{
				widerThanLarge,
				widerThanMedium,
				widerThanSmall
			}}>
			{children}
		</WindowWidthCtx.Provider>
	)
}
