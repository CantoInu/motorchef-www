import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';
import { NETWORK_RPC_URL } from "utils/env-vars"
import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit';
import { Chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { publicProvider } from "wagmi/providers/public"
import { jsonRpcProvider } from "wagmi/providers/jsonRpc"

import { ThemeProvider } from "styled-components"
import { defiSummerRevivalistTheme } from "styles"
import { GlobalStyle } from 'styles/GlobalStyle';


const cantoChain: Chain = {
	id: 7_700,
	name: "Canto",
	network: "canto",
	nativeCurrency: {
		decimals: 18,
		name: "Canto",
		symbol: "CANTO",
	},
	rpcUrls: {
		default: {http: [NETWORK_RPC_URL]},
	},
	blockExplorers: {
		default: { name: "Canto Explorer", url: "https://tuber.build" },
	},
	testnet: false,
}

const { chains, provider } = configureChains(
	[ cantoChain ],
	[
		publicProvider(),
		jsonRpcProvider({
      rpc: chain => ({ http: chain.rpcUrls.default.http[0] }),
    }),
	]
)

const { connectors } = getDefaultWallets({
	appName: "Canto Inu motorChef",
	chains,
})

const wagmiClient = createClient({
	autoConnect: true,
	connectors,
	provider,
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <ThemeProvider theme={defiSummerRevivalistTheme}>
			<GlobalStyle/>
          	<Component {...pageProps} />
        </ThemeProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

