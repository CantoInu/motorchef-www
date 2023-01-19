import { 
    usePrepareContractWrite, 
    useContractWrite, 
    Address, 
    useWaitForTransaction,
    erc20ABI,
} from 'wagmi'
import { MOTORCHEF, CINU_WCANTO_LP_PAIR, PID } from 'utils/env-vars';
import { GreenButton, Text } from 'styles'
import styled from 'styled-components';
import {useNeedsLPApproval, useStakedBalance} from 'hooks';
import { MaxUint256 } from '@ethersproject/constants'
import AddButton from 'components/AddButton/AddButton';
import { DepositModal } from './DepositModal';
import { MOTORCHEF_ABI } from 'constants/abis';
import { useEffect, useState } from 'react';
import { WithdrawModal } from './WithdrawModal';

const StyledButtonContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`

const StyledCardActions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${(props) => props.theme.spacing[0]}px;
  width: 100%;
`

const StyledActionSpacer = styled.div`
  height: ${(props) => props.theme.spacing[3]}px;
  width: ${(props) => props.theme.spacing[3]}px;
`

const ApproveLPButton = () => {
  const { 
      config,
      error: prepareError,
      isError: isPrepareError,
  } = usePrepareContractWrite({
      address: CINU_WCANTO_LP_PAIR as Address,
      abi: erc20ABI,
      functionName: 'approve',
      args: [MOTORCHEF as Address, MaxUint256]
  })

  const { data, error, isError, write } = useContractWrite(config)

  const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
  })

  return(
    <StyledButtonContent>
      <StyledCardActions>
        <GreenButton disabled={!write || isLoading} onClick={() => write!()}>
          <Text
            fontWeight={700}
            fontSize={16}
          >
            Approve vAMM CINU/WCANTO LP
          </Text>
        </GreenButton>
      </StyledCardActions>
        {isSuccess! && (
          <div>
            <a href={`https://evm.explorer.canto.io/tx/${data?.hash}`}>See Transaction</a>
          </div>
        )}
        {(isPrepareError || isError) && (
          <div>Error: {(prepareError || error)?.message}</div>
        )}  
    </StyledButtonContent>
  )
}

const StakingButton = () => {
  
  const [ depositModalOpen, setDepositModalOpen ] = useState(false)
  const [ withdrawModalOpen, setWithdrawModalOpen ] = useState(false)
  const [ staking, setStaking ] = useState<boolean>()

  const isStaked = useStakedBalance()?.amount != "0" ? true : false

  useEffect(() => {
    setStaking(isStaked)
  }, [ staking ])

  return (
    <>
      <DepositModal
            modalOpen={depositModalOpen}
            setModalOpen={setDepositModalOpen}
          />
          <WithdrawModal
            modalOpen={withdrawModalOpen}
            setModalOpen={setWithdrawModalOpen}
        />
      <StyledButtonContent>
        <StyledCardActions>
          <GreenButton disabled={ !isStaked } onClick={() => setWithdrawModalOpen(true)}>
            <Text
              fontWeight={700}
              fontSize={16}
            >
              {setStaking! ? 'Unstake' : 'Stake'}
            </Text>
          </GreenButton> 
          {setStaking!
            ? <>
                <StyledActionSpacer/>
                <AddButton disabled={false} onClick={() => setDepositModalOpen(true)}/>
                </>
            : <></>}
        </StyledCardActions>
      </StyledButtonContent>
    </>
  )
}

// fix the hydration issue
export const StakeButton = () => {

  const [ approve, setApprove ] = useState<boolean>()

  const isApproved = !useNeedsLPApproval()

  useEffect(() => {
    setApprove(isApproved)
  }, [ approve ])
    
  return (
    <>
        {setApprove! 
          ? <StakingButton/>
          : <ApproveLPButton/>}
    </>
  )

}