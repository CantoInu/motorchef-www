import useSWR from 'swr'
import { useBalance } from 'wagmi'

export function useERC20Balance(walletAddress: string | undefined, tokenAddress: string): { balance: number} {
    
    console.log(`account ${walletAddress}`)

    const { data: balance, isError, isSuccess } = useBalance({
        address: `0x${walletAddress}`,
        token: `0x${tokenAddress}`,
      })

    console.log(`balance: ${balance?.value}`)

	return {
		balance: balance?.value ? parseFloat(balance?.formatted) : -1
	}
}