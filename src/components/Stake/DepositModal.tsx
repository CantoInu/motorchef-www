import { Dispatch, ReactElement, SetStateAction, useCallback, useMemo, useState } from "react"

import styled from "styled-components"
import { Flex, GreenButton, Text } from "../../styles"
import { Modal } from "../Modal"
import { getFullDisplayBalance } from "utils"
import { useLPBalance } from "hooks"
import BigNumber from 'bignumber.js'
import { Button } from "components/Button"
import { Address, erc20ABI, useContractWrite, usePrepareContractWrite, useWaitForTransaction } from "wagmi"
import { MOTORCHEF, PID } from "utils/env-vars"
import { MOTORCHEF_ABI } from "constants/abis"

const StyledTokenInput = styled.div`
  padding: 0 ${props => props.theme.spacing[2]}px;
`

const StyledSpacer = styled.div`
  width: ${props => props.theme.spacing[3]}px;
`

const StyledTokenAdornmentWrapper = styled.div`
  align-items: center;
  display: flex;
`

const StyledMaxText = styled.div`
  align-items: center;
  color: ${props => props.theme.textColor.primary};
  display: flex;
  font-size: 14px;
  font-weight: 700;
  height: 44px;
  justify-content: flex-end;
`

const StyledTokenSymbol = styled.span`
  color: ${props => props.theme.textColor.teriary};
  font-weight: 700;
`

const StyledInputWrapper = styled.div`
  align-items: center;
  background-color: ${props => props.theme.backgroundColor.primary};
  border-radius: ${props => props.theme.borderRadius.large};
  box-shadow: ${props => props.theme.boxShadow.inset};
  display: flex;
  height: 72px;
  padding: 0 ${props => props.theme.spacing[3]}px;
`

const StyledInput = styled.input`
  background: none;
  border: 0;
  color: ${props => props.theme.textColor.primary};
  font-size: 18px;
  flex: 1;
  height: 56px;
  margin: 0;
  padding: 0;
  outline: none;
`

const StyledModalActions = styled.div`
  align-items: center;
  background-color: ${props => props.theme.backgroundColor.primary}00;
  display: flex;
  width: 100%;
  margin: 0;
  padding: ${props => props.theme.spacing[0]}px;
`

const StyledModalAction = styled.div`
  flex: 1;
  width: 100%;
  padding: 0 ${props => props.theme.spacing[2]}px;
`

export interface InputProps {
	endAdornment?: React.ReactNode,
	onChange: (e: React.FormEvent<HTMLInputElement>) => void,
	placeholder?: string,
	startAdornment?: React.ReactNode,
	value: string,
  }

const Input = ({
	endAdornment,
	onChange,
	placeholder,
	startAdornment,
	value,
  }: InputProps): ReactElement => {
	return (
	  <StyledInputWrapper>
		{!!startAdornment && startAdornment}
		<StyledInput placeholder={placeholder} value={value} onChange={onChange} />
		{!!endAdornment && endAdornment}
	  </StyledInputWrapper>
	)
}


interface TokenInputProps extends InputProps {
max: number | string,
symbol: string,
onSelectMax?: () => void,
}

const TokenInput = ({
max,
symbol,
onChange,
onSelectMax,
value,
}: TokenInputProps): ReactElement => {
return (
	<StyledTokenInput>
	<StyledMaxText>{max.toLocaleString()} {symbol} Available</StyledMaxText>
	<Input
		endAdornment={(
		<StyledTokenAdornmentWrapper>
			<StyledTokenSymbol>{symbol}</StyledTokenSymbol>
			<StyledSpacer />
			<div>
			<Button size="sm" text="Max" onClick={onSelectMax} />
			</div>
		</StyledTokenAdornmentWrapper>
		)}
		onChange={onChange}
		placeholder="Enter Amount"
		value={value}
	/>
	</StyledTokenInput>
)
}

type DepositModalProps = {
	modalOpen: boolean,
	setModalOpen: Dispatch<SetStateAction<boolean>>
}

export function DepositModal({
	modalOpen,
	setModalOpen
}: DepositModalProps) {

	const max = useLPBalance()

	const [val, setVal] = useState('')
	const [pendingTx, setPendingTx] = useState(false)

	const fullBalance = useMemo(() => {
		return max!
	}, [max])

	const handleChange = useCallback(
		(e: React.FormEvent<HTMLInputElement>) => {
		  setVal(e.currentTarget.value)
		},
		[setVal],
	)
	
	const handleSelectMax = useCallback(() => {
		setVal(fullBalance)
	}, [fullBalance, setVal])

	const { 
        config,
        error: prepareError,
        isError: isPrepareError,
    } = usePrepareContractWrite({
        address: MOTORCHEF as Address,
        abi: MOTORCHEF_ABI,
        functionName: 'deposit',
        args: [PID!,val!]
    })
    
    const { data, error, isError, write } = useContractWrite(config)

    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
    })

	if (!modalOpen) return null

	return (
		<Modal
			title="Stake vAMM CINU/WCANTO LP"
			onClose={() => setModalOpen(false)}
			content={
				<Flex
					column
					gap={24}>
						<TokenInput
							value={val}
							onSelectMax={handleSelectMax}
							onChange={handleChange}
							max={fullBalance}
							symbol="vAMM CINU/WCANTO LP"
						/>
						<StyledModalActions>
							<StyledModalAction>
								<Button text="Cancel" variant="secondary" onClick={() => setModalOpen(false)} />
							</StyledModalAction>
							<StyledModalAction>
							<GreenButton disabled={!write || isLoading} onClick={() => write && write()}>
								<Text
									fontWeight={700}
									fontSize={16}
								>
									Confirm
								</Text>
							</GreenButton>
							</StyledModalAction>
						</StyledModalActions>
				</Flex>
			}
		/>
	)
}