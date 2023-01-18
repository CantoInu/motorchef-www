import { 
    useAccount, 
    useContractRead, 
    usePrepareContractWrite, 
    useContractWrite, 
    Address, 
    useWaitForTransaction
} from 'wagmi'
import { MOTORCHEF_ABI } from 'constants/abis';
import { MOTORCHEF, PID } from 'utils/env-vars';
import { useEffect, useState } from "react"

export function usePendingMotorChefRewards() {
    const [pendingReward, setPendingReward] = useState<boolean>()
    const { address: userAddress } = useAccount();

    const { data, isError, isLoading, error } = useContractRead({
        address: MOTORCHEF as Address,
        abi: MOTORCHEF_ABI,
        functionName: 'pendingCanto',
        args: [PID!, userAddress!, 0]
    });

    useEffect(() => {
        if(!data) return setPendingReward(false)

    },[data])

    return `${data}` || undefined
}


export function useStakedBalance() {
    const { address: userAddress } = useAccount();

    const { data: getBalanceResults, isError, isLoading, error } = useContractRead({
        address: MOTORCHEF as Address,
        abi: MOTORCHEF_ABI,
        functionName: 'userInfo',
        args: [PID!, userAddress!]
    });

    if(!getBalanceResults) {
        return {
            amount: undefined, 
            rewardDebt: undefined
        }
    } else {
        const result = `${getBalanceResults}`.split(",");
        return {
            amount: result[0], 
            rewardDebt: result[1]
        }
    }
}

