import { useAccount, useContractRead, Address, erc20ABI } from 'wagmi'
import { DOGBURNER_ABI } from 'constants/abis';
import { CINU, DOGBURNER } from 'utils/env-vars';
import { useMemo } from 'react'


export function useCINUSupply() {

    const { data } = useContractRead({
        address: CINU! as Address,
        abi: erc20ABI,
        functionName: 'totalSupply'
    });

    return data?.toString() || '0'
}

export function useCanBurn() {

    const { data } = useContractRead({
        address: CINU! as Address,
        abi: erc20ABI,
        functionName: 'totalSupply'
    });

    if(data) {
        return data?.lt(BigInt(600_000_000_000_000_000_000_000_000_000_000));
    } else {
        return false
    }
}



