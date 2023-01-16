
import { createGlobalStyle } from "styled-components"

import { defaultTheme } from "theme"


export const GlobalStyle = createGlobalStyle<{ theme: typeof defaultTheme }>`
	:root {
	}

	html,
	body {
		padding: 0;
		margin: 0;
	}

	a {
		color: inherit;
		text-decoration: none;
	}
	button {
		background-color: transparent;
		color: inherit;
		border: none;
		font-family: inherit;
		cursor: pointer;
	}

	* {
		box-sizing: border-box;
	}

	html {
		color-scheme: dark;
	}
	body {
		color: ${({ theme }) => theme.color.black};
		background: ${({ theme }) => theme.color.grey[400]};
	}

	h1, h2, h3 {
		margin: 0;
	}
`