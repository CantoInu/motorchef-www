import { useAccount, useContractRead, useBalance as useWagmiBalance, Address, erc20ABI } from 'wagmi'
import { MOTORCHEF, CINU_WCANTO_LP_PAIR } from 'utils/env-vars';
import { BigNumber } from 'ethers';

export function useSufficientLPApproval() {

    const { address: userAddress } = useAccount();

    const { data: userBalance } = useWagmiBalance({
        address: userAddress!,
        token: CINU_WCANTO_LP_PAIR! as Address,
    });

    const { data: userApproved } = useContractRead({
        address: CINU_WCANTO_LP_PAIR as Address,
        abi: erc20ABI,
        functionName: 'allowance',
        args: [MOTORCHEF! as Address, userAddress!]
    });

    if(userApproved!.gte(userBalance!.value)) {
        return true
    }

    return false
}