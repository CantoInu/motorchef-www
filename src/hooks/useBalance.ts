import useSWR from 'swr'
import { useBalance as useWagmiBalance } from 'wagmi'

export function useERC20Balance(walletAddress: string | undefined, tokenAddress: string): { balance: number} {
  

    const { data: balance, isError, isSuccess } = useWagmiBalance({
        address: `0x${walletAddress}`,
        token: `0x${tokenAddress}`,
        enabled: true,
        watch: true
      })

    console.log(`balance: ${balance?.value}`)
    

	return {
		balance: balance?.value ? parseFloat(balance?.formatted) : 0
	}
}