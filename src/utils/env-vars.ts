export const DEV = process.env.NODE_ENV === "development"

// SEO
export const APP_TITLE = process.env.NEXT_PUBLIC_SITE_TITLE
export const APP_DESCRIPTION = process.env.NEXT_PUBLIC_SITE_DESCRIPTION || ""
export const BASE_URL = process.env.NEXT_PUBLIC_URL || ""
export const OG_IMAGE = `${BASE_URL}/icon.png`
export const FARM_IMAGE = `${BASE_URL}/farm.png`
export const FAVICON = `${BASE_URL}/favicon.ico`
export const TWITTER_HANDLE = process.env.NEXT_PUBLIC_TWITTER_HANDLE
export const TWITTER_URL = process.env.NEXT_PUBLIC_TWITTER
export const TELEGRAM_URL = process.env.NEXT_PUBLIC_TELEGRAM

export const APP_LOGO = `${BASE_URL}/icon.png`
export const APP_LOGO_ALT = `${BASE_URL}/icon.png`

export const BLOCK_EXPLORER_BASE_URL = process.env.NEXT_PUBLIC_BLOCK_EXPLORER_URL || "https://tuber.build/"

export const NETWORK_RPC_URL = process.env.NEXT_PUBLIC_NETWORK_URL || "https://canto.slingshot.finance/"
export const CHAIN_ID = process.env.NEXT_PUBLIC_CHAIN_ID

// CONTRACTS
export const WCANTO = process.env.NEXT_PUBLIC_WCANTO || ""
export const CINU = process.env.NEXT_PUBLIC_CINU || ""
export const CINU_WCANTO_LP_PAIR = process.env.NEXT_PUBLIC_CINU_WCANTO_LP_PAIR || ""
export const MOTORCHEF = process.env.NEXT_PUBLIC_MOTORCHEF || ""
export const COMPTROLLER = process.env.NEXT_PUBLIC_COMPTROLLER || "" 
export const CCANTO_NOTE = process.env.NEXT_PUBLIC_CCANTO_NOTE || ""
export const DOGBURNER = process.env.NEXT_PUBLIC_DOGBURNER || ""
export const PID = process.env.NEXT_PUBLIC_POOL_ID || 0
// TODO: throw error for uninitialized required vars