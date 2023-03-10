
import React, { ReactElement, useState, useEffect } from 'react'

import styled from 'styled-components'

import { Card } from 'components/Card'
import { useAuth, useCINUBalance } from 'hooks'
import { CardContent } from 'components/CardContent/CardContent'
import { DogIcon, GreenChainIcon } from 'components/Icons'
import { Spacer } from 'components/Spacer'
import { Value } from 'components/Value'
import { Label } from 'components/Label'
import { formatCryptoVal } from "utils"
import { usePendingMotorChefRewards, useStakedBalance } from "hooks/useMotorChef"


const Footnote = styled.div`
  font-size: 14px;
  padding: 8px 20px;
  color: ${(props) => props.theme.textColor.primary};
  border-top: ${(props) => props.theme.border.primary};
`
const FootnoteValue = styled.div`
  font-family: 'Roboto Mono', monospace;
  float: right;
`

const StyledWrapper = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: stretch;
  }
`

const StyledBalances = styled.div`
  display: flex;
`

const StyledBalance = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
`

const StyledCardContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: ${(props) => props.theme.spacing[3]}px;
`

const PendingRewards = (): ReactElement => {
  const [pending, setPending] = useState(false);
  const pendingAmount = usePendingMotorChefRewards()

  useEffect(() => {
    setPending(true)
    
  }, [pending, pendingAmount]);

  return (
    <span
      style={{
        transform: `scale(1)`,
        transformOrigin: 'right bottom',
        transition: 'transform 0.5s',
        display: 'inline-block',
      }}
    >
    {!!pending ? formatCryptoVal(pendingAmount!) : 'Locked'}
    </span>
  )
}


export function Balances() {

  const { address: connectedAddress = "" } = useAuth()

  const userBalance = useCINUBalance()
  const userStakedBalance = useStakedBalance()

  return(
    <StyledWrapper>
      <Card>
        <CardContent>
          <StyledBalances>
            <StyledBalance>
              <GreenChainIcon />
              <Spacer />
              <div style={{ flex: 1 }}>
                <Label text="Your Staked LP Balance" />
                <Value
                  value={connectedAddress && userStakedBalance?.amount? formatCryptoVal(userStakedBalance.amount) : 'Locked'}
                />
              </div>
            </StyledBalance>
          </StyledBalances>
        </CardContent>
        <Footnote>
          <PendingRewards/> Pending harvest
          <FootnoteValue>
             WCANTO
          </FootnoteValue>
        </Footnote>
      </Card>
      <Spacer />
      <Card>
        <CardContent>
          <StyledBalances>
            <StyledBalance>
              <DogIcon/>
              <Spacer />
              <div style={{ flex: 1 }}>
                <Label text="Your CINU Balance" />
                <Value
                  value={connectedAddress && userBalance ? formatCryptoVal(userBalance) : 'Locked'}
                />
              </div>
            </StyledBalance>
          </StyledBalances>
        </CardContent>
        <Footnote>
          Initial Total Supply
          <FootnoteValue>1 Quadrillion cINU</FootnoteValue>
        </Footnote>
      </Card>
    </StyledWrapper>
  )
}


/*

import BigNumber from 'bignumber.js'
import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup'
import styled from 'styled-components'
import { useWallet } from 'use-wallet'
import Card from '../../../components/Card' <<--
import CardContent from '../../../components/CardContent' <<--
import Label from '../../../components/Label' <<--
import Spacer from '../../../components/Spacer' <<--
import Value from '../../../components/Value' <<--
import SushiIcon from '../../../components/SushiIcon' <<--
import useAllEarnings from '../../../hooks/useAllEarnings'
import useAllStakedValue from '../../../hooks/useAllStakedValue'
import useFarms from '../../../hooks/useFarms'
import useTokenBalance from '../../../hooks/useTokenBalance'
import useSushi from '../../../hooks/useSushi'
import { getSushiAddress, getSushiSupply } from '../../../sushi/utils'
import { getBalanceNumber } from '../../../utils/formatBalance'

const PendingRewards: React.FC = () => {
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(0)
  const [scale, setScale] = useState(1)

  const allEarnings = useAllEarnings()
  let sumEarning = 0
  for (let earning of allEarnings) {
    sumEarning += new BigNumber(earning)
      .div(new BigNumber(10).pow(18))
      .toNumber()
  }

  const [farms] = useFarms()
  const allStakedValue = useAllStakedValue()

  if (allStakedValue && allStakedValue.length) {
    const sumWeth = farms.reduce(
      (c, { id }, i) => c + (allStakedValue[i].totalWethValue.toNumber() || 0),
      0,
    )
  }

  useEffect(() => {
    setStart(end)
    setEnd(sumEarning)
  }, [sumEarning])

  return (
    <span
      style={{
        transform: `scale(${scale})`,
        transformOrigin: 'right bottom',
        transition: 'transform 0.5s',
        display: 'inline-block',
      }}
    >
      <CountUp
        start={start}
        end={end}
        decimals={end < 0 ? 4 : end > 1e5 ? 0 : 3}
        duration={1}
        onStart={() => {
          setScale(1.25)
          setTimeout(() => setScale(1), 600)
        }}
        separator=","
      />
    </span>
  )
}

const Balances: React.FC = () => {
  const [totalSupply, setTotalSupply] = useState<BigNumber>()
  const sushi = useSushi()
  const sushiBalance = useTokenBalance(getSushiAddress(sushi))
  const { account, ethereum }: { account: any; ethereum: any } = useWallet()

  useEffect(() => {
    async function fetchTotalSupply() {
      const supply = await getSushiSupply(sushi)
      setTotalSupply(supply)
    }
    if (sushi) {
      fetchTotalSupply()
    }
  }, [sushi, setTotalSupply])

  return (
    <StyledWrapper>
      <Card>
        <CardContent>
          <StyledBalances>
            <StyledBalance>
              <SushiIcon />
              <Spacer />
              <div style={{ flex: 1 }}>
                <Label text="Your SUSHI Balance" />
                <Value
                  value={!!account ? getBalanceNumber(sushiBalance) : 'Locked'}
                />
              </div>
            </StyledBalance>
          </StyledBalances>
        </CardContent>
        <Footnote>
          Pending harvest
          <FootnoteValue>
            <PendingRewards /> SUSHI
          </FootnoteValue>
        </Footnote>
      </Card>
      <Spacer />

      <Card>
        <CardContent>
          <Label text="Total SUSHI Supply" />
          <Value
            value={totalSupply ? getBalanceNumber(totalSupply) : 'Locked'}
          />
        </CardContent>
        <Footnote>
          New rewards per block
          <FootnoteValue>1,000 SUSHI</FootnoteValue>
        </Footnote>
      </Card>
    </StyledWrapper>
  )
}


*/



