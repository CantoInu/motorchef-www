import { useAccount, useContractRead, useBalance as useWagmiBalance, Address, erc20ABI } from 'wagmi'
import { MOTORCHEF, CINU_WCANTO_LP_PAIR } from 'utils/env-vars';
import { BigNumber } from 'ethers';

export function useNeedsLPApproval() {
    

    const { address: userAddress } = useAccount();

    const { data: userBalance } = useWagmiBalance({
        address: userAddress!,
        token: CINU_WCANTO_LP_PAIR! as Address,
    });

    const { data: userApproved } = useContractRead({
        address: CINU_WCANTO_LP_PAIR as Address,
        abi: erc20ABI,
        functionName: 'allowance',
        args: [userAddress!, MOTORCHEF! as Address]
    });

    if(!userApproved || !userBalance) return true

    if(userApproved!.gte(userBalance!.value!) && userApproved!.gt(0)) {
        return false
    }

    return true
}