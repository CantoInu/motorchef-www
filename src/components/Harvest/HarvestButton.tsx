import { 
    usePrepareContractWrite, 
    useContractWrite, 
    Address, 
    useWaitForTransaction
} from 'wagmi'
import { MOTORCHEF_ABI } from 'constants/abis';
import { MOTORCHEF, PID } from 'utils/env-vars';
import { GreenButton, Text } from 'styles'
import styled from 'styled-components';

const StyledButtonContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const HarvestButton = () => {
    const { 
        config,
        error: prepareError,
        isError: isPrepareError,
    } = usePrepareContractWrite({
        address: MOTORCHEF as Address,
        abi: MOTORCHEF_ABI,
        functionName: 'deposit',
        args: [PID!,0]
    })
    
    const { data, error, isError, write } = useContractWrite(config)

    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
    })

    return (
      <StyledButtonContent>
        <GreenButton disabled={!write || isLoading} onClick={() => write!()}>
          <Text
            fontWeight={700}
            fontSize={16}
          >
            {isLoading ? 'Harvesting...' : 'Harvest'}
          </Text>
        </GreenButton>
        {isSuccess && (
          <div>
            <a href={`https://tuber.build/tx/${data?.hash}`}>See Transaction</a>
          </div>
        )}
        {(isPrepareError || isError) && (
          <div>Error: {(prepareError || error)?.message}</div>
        )}
      </StyledButtonContent>
    )

}