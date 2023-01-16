import useSWR from 'swr'
import { useBalance as useWagmiBalance, useAccount, useContractRead, erc20ABI, Address } from 'wagmi'

import { CINU } from 'utils/env-vars'

export function useCINUBalance() {
  
  const { address: userAddress } = useAccount();

  const { data, isError, isLoading, error } = useWagmiBalance({
      address: userAddress!,
      token: CINU as Address,
  });


  return `Balance: ${data?.formatted} ${data?.symbol}`
}
