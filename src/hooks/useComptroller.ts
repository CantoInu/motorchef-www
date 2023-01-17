import { useAccount, useContractRead, Address, erc20ABI } from 'wagmi'
import { COMPTROLLER_ABI } from 'constants/abis';
import { COMPTROLLER, CCANTO_NOTE, CINU_WCANTO_LP_PAIR } from 'utils/env-vars';
import { useMemo } from 'react'

export function useComptrollerRatePerBlock() {

    const { data, isError, isLoading, error } = useContractRead({
        address: COMPTROLLER as Address,
        abi: COMPTROLLER_ABI,
        functionName: 'compSupplySpeeds',
        args: [CCANTO_NOTE! as Address]
    });

    return data?.toString() || '0'
}


export function useCTokenSupply() {

    const { data } = useContractRead({
        address: CCANTO_NOTE! as Address,
        abi: erc20ABI,
        functionName: 'totalSupply'
    });

    return data?.toString() || '0'
}

export function useLPSupply() {

    const { data } = useContractRead({
        address: CINU_WCANTO_LP_PAIR! as Address,
        abi: erc20ABI,
        functionName: 'totalSupply'
    });

    return data?.toString() || '0'
}



