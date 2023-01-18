import { useBalance as useWagmiBalance, useAccount, Address } from 'wagmi'

import { CINU, WCANTO, CINU_WCANTO_LP_PAIR, MOTORCHEF, CCANTO_NOTE } from 'utils/env-vars'

export function useCINUBalance() {

  const { address: userAddress } = useAccount();

  const { data, isError, isLoading, error } = useWagmiBalance({
      address: userAddress!,
      token: CINU as Address,
  });

  return data?.value.toString() || undefined
}

export function useLPBalance() {
  
  const { address: userAddress } = useAccount();

  const { data, isError, isLoading, error } = useWagmiBalance({
      address: userAddress!,
      token: CINU_WCANTO_LP_PAIR! as Address,
  });

  return data?.value.toString() || undefined
}

export function useAllLPStakedBalance() {

  const { data, isError, isLoading, error } = useWagmiBalance({
      address: MOTORCHEF! as Address,
      token: CINU_WCANTO_LP_PAIR! as Address,
  });

  return data?.value.sub(1).toString() || undefined
}

export function useAllLPWETHBalance() {

  // we only need the WCANTO balance which we double for APY
  const { data } = useWagmiBalance({
    address: CINU_WCANTO_LP_PAIR! as Address,
    token: WCANTO! as Address,
  });

  return data?.value.toString() || '0'
}

export function useStakedCTokenBalance() {

  const { data, isError, isLoading, error } = useWagmiBalance({
      address: MOTORCHEF! as Address,
      token: CCANTO_NOTE! as Address,
  });

  return data?.value.toString() || '0'
}