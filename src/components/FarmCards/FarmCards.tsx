
import { useAccount } from 'wagmi'
import { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { Text, CenteredFlex, Button, GreenButton } from 'styles'
import { usePendingMotorChefRewards } from 'hooks/useMotorChef'
import { bnToDec, formatCryptoVal } from 'utils'
import BigNumber from 'bignumber.js'
import { 
    useAllLPWETHBalance, 
    useAllLPStakedBalance,
    useComptrollerRatePerBlock, 
    useLPSupply,
    useCTokenSupply, 
    useStakedCTokenBalance
} from 'hooks'
import { connectorsForWallets } from '@rainbow-me/rainbowkit'
import { Card } from 'components/Card'
import { CardContent } from 'components/CardContent'
import { Spacer } from 'components/Spacer'
import { PassLink } from 'components/PassLink'


const StyledCards = styled.div`
  width: 900px;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const StyledLoadingWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
`

const StyledRow = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding-bottom: ${(props) => props.theme.spacing[1]}px;
  margin: 0 auto;
`

const StyledCardWrapper = styled.div`
  display: flex;
  width: calc((900px - ${(props) => props.theme.spacing[4]}px * 2) / 3);
  position: relative;
`

const StyledTitle = styled.h4`
  color: ${(props) => props.theme.textColor.tertiary};
  font-size: 24px;
  font-weight: 700;
  margin: ${(props) => props.theme.spacing[2]}px 0 0;
  padding: 0;
`

const StyledContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

const StyledSpacer = styled.div`
  height: ${(props) => props.theme.spacing[4]}px;
  width: ${(props) => props.theme.spacing[4]}px;
`

const StyledDetails = styled.div`
  margin-top: ${(props) => props.theme.spacing[2]}px;
  text-align: center;
`

const StyledDetail = styled.div`
  color: ${(props) => props.theme.textColor.primary};
  font-weight: 400;
`

const StyledInsight = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  border-radius: 8px;
  background: ${props => props.theme.backgroundColor.primary};
  color: #${props => props.theme.textColor.secondary};
  width: 100%;
  margin-top: 12px;
  line-height: 32px;
  font-size: 13px;
  border: #${props => props.theme.textColor.thin};
  text-align: center;
  padding: 0 12px;
`

const StyledCardIcon = styled.div`
  background-color: ${props => props.theme.backgroundColor.secondary};
  font-size: 48px;
  height: 100px;
  width: 100px;
  border-radius: 500px;
  align-items: center;
  display: flex;
  justify-content: center;
  box-shadow: ${props => props.theme.boxShadow.inset}
  margin: 0 auto ${props => props.theme.spacing[3]}px;
`

const RainbowLight = keyframes`
  
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`

const StyledCardAccent = styled.div`
  background: linear-gradient(
    45deg,
    rgba(255, 0, 0, 1) 0%,
    rgba(255, 154, 0, 1) 10%,
    rgba(208, 222, 33, 1) 20%,
    rgba(29, 200, 44, 1) 30%,
    rgba(83, 208, 216, 1) 40%,
    rgba(47, 151, 226, 1) 50%,
    rgba(28, 107, 238, 1) 60%,
    rgba(95, 21, 242, 1) 70%,
    rgba(186, 12, 248, 1) 80%,
    rgba(251, 7, 217, 1) 90%,
    rgba(255, 0, 0, 1) 100%
  );
  background-size: 300% 300%;
  animation: ${RainbowLight} 2s linear infinite;
  border-radius: 12px;
  filter: blur(10px);
  position: absolute;
  top: -3px;
  right: -3px;
  bottom: -3px;
  left: -3px;
  z-index: 0;
`

const GetAPY = () => {
  const [apyNumber, setApyNumber] = useState(false)

    const BLOCKS_PER_YEAR = new BigNumber(5256000)
    const WCANTO_PER_BLOCK = new BigNumber(useComptrollerRatePerBlock())

    const WCANTO_IN_LP = new BigNumber(useAllLPWETHBalance())

    const LPTokenTotalSupply = new BigNumber(useLPSupply())
    const LPTokenStakedAmount = new BigNumber(useAllLPStakedBalance()!)

    const CTokenTotalSupply = new BigNumber(useCTokenSupply())
    const CTokenStakedBalance = new BigNumber(useStakedCTokenBalance())

    const cantoPerYear = WCANTO_PER_BLOCK.times(BLOCKS_PER_YEAR)
    const percentageCTokenStaked = CTokenStakedBalance.div(CTokenTotalSupply)
    const percentageLPStaked = LPTokenStakedAmount.div(LPTokenTotalSupply)
    const wcantoInStakedLP = WCANTO_IN_LP!.times(percentageLPStaked).times(2)
    console.log(wcantoInStakedLP.div(1e18).toString())

    const apy = cantoPerYear
                    .times(percentageCTokenStaked)
                    .div(wcantoInStakedLP)
    
    useEffect(() => {
      setApyNumber(true)
      
    }, [apyNumber, apy]);

    return apyNumber? apy : BigNumber(0)
    
}

function FarmCard() {
    
    const apy = GetAPY()

    return (
        <StyledCardWrapper>
            <StyledCardAccent/>
            <Card>
                <CardContent>
                    <StyledContent>
                        <StyledCardIcon>🐕</StyledCardIcon>
                        <StyledTitle>Canto&apos;s Best Friend</StyledTitle>
                        <StyledDetails>
                            <StyledDetail>Deposit: vAMM CINU/WCANTO</StyledDetail>
                            <StyledDetail>Earn: WCANTO</StyledDetail>
                        </StyledDetails>
                        <Spacer />
                        <GreenButton >
                            <PassLink href='/vAMM CINU/WCANTO'>
                              <Text
                                fontSize={16}
                                fontWeight={600}>
                                Select
                              </Text>
                            </PassLink>
                        </GreenButton>
                        <StyledInsight>
                            <Text>
                                APY</Text>
                            <Text>{apy != BigNumber(0)? `${apy!
                                    .times(new BigNumber(100))
                                    .toNumber()
                                    .toLocaleString('en-US')
                                    .slice(0, -1)}%`
                                : 'Loading ...'}
                            </Text>
                        </StyledInsight>
                    </StyledContent>
                </CardContent>
            </Card>
        </StyledCardWrapper>
    )
}



export function FarmCards() {

    return (
        <StyledCards>
            <StyledRow>
                <FarmCard/>
            </StyledRow>
        </StyledCards>
    )

}