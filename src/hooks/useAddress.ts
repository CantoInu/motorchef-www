import { useAccount } from 'wagmi'

export function useAddress(): `0x${string}` | null {
	const {address} = useAccount()

	return address || null
}
