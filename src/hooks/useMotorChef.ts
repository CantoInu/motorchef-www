import { useAccount, useContractRead, Address } from 'wagmi'
import { MOTORCHEF_ABI } from 'constants/abis';
import { MOTORCHEF } from 'utils/env-vars';
import BigNumber from "bignumber.js"

export function usePendingMotorChefRewards() {
  
    const { address: userAddress } = useAccount();

    const { data, isError, isLoading, error } = useContractRead({
        address: MOTORCHEF as Address,
        abi: MOTORCHEF_ABI,
        functionName: 'pendingCanto',
        args: [0, userAddress!, 0]
    });

    console.log(`pending: ${data?.toString()}`)

    return data?.toString() || '0'
}

export function useStakedBalance() {
    const { address: userAddress } = useAccount();

    const { data, isError, isLoading, error } = useContractRead({
        address: MOTORCHEF as Address,
        abi: MOTORCHEF_ABI,
        functionName: 'userInfo',
        args: [0, userAddress!]
    });

    console.log(`staked: ${data?.toString()}`)

    return data?.toString() || '0'
}

/*
pendingCanto(
    _pid: string,
    _user: string,
    _cTokenIdx: string
  ):
*/