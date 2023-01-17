import NextHead from "next/head"

import { APP_TITLE, APP_DESCRIPTION, OG_IMAGE, FAVICON, BASE_URL } from "../utils/env-vars"

type SeoProps = {
	title?: string
	description?: string
	url?: string
	ogImage?: string
}

export function Seo({
	title = "",
	description = APP_DESCRIPTION,
	url = BASE_URL,
	ogImage = OG_IMAGE,
}: SeoProps) {
	return (
		<NextHead>
			<meta charSet="UTF-8" />
			<title>{title ? `${title} | ${APP_TITLE}` : APP_TITLE}</title>
			<meta name="viewport" content="width=device-width, initial-scale=1"/>
			<meta name="description" content={description}/>
			<link rel="icon" type="image/png" sizes="24x24" href={FAVICON}/>
			<meta property="og:url" content={url}/>
			<meta property="og:title" content={title}/>
			<meta property="og:description" content={description}/>
			<meta name="twitter:site" content={url}/>
			<meta name="twitter:card" content="summary_large_image"/>
			<meta name="twitter:image" content={ogImage}/>
			<meta property="og:image" content={ogImage}/>
			<meta property="og:image:width" content="1200"/>
			<meta property="og:image:height" content="630"/>
			<link rel="preconnect" href="https://fonts.googleapis.com"/>
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
			<link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet"></link>
		</NextHead>
	)
}