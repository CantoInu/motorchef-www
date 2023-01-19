
import { ReactElement, useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { usePendingMotorChefRewards, useStakedBalance } from 'hooks/useMotorChef'
import { bnToDec, formatCryptoVal } from 'utils'

import { Card } from 'components/Card'
import { CardContent } from 'components/CardContent'

import { HarvestButton } from './HarvestButton'



const StyledCards = styled.div`
  width: 325px;
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
  height: 355px;
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
  height: ${(props) => props.theme.spacing[7]}px;
  width: ${(props) => props.theme.spacing[7]}px;
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
  font-size: 40px;
  height: 100px;
  width: 100px;
  border-radius: 500px;
  align-items: center;
  display: flex;
  justify-content: center;
  letter-spacing: -10px; 
  white-space: nowrap;
  box-shadow: ${props => props.theme.boxShadow.inset}
  margin: 0 auto ${props => props.theme.spacing[3]}px;
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
        fontFamily: 'Roboto Mono, monospace',
        fontSize: 40
      }}
    >
    {!!pending ? formatCryptoVal(pendingAmount!) : 'Locked'}
    </span>
  )
}



function HarvestCard() {

    return (
        <StyledCardWrapper>
            <Card>
              <StyledCardContent>
                <StyledContent>
                  <StyledCardIcon>🟩⛓️&nbsp;&nbsp;</StyledCardIcon>
                    <PendingRewards/>
                  <StyledDetails>
                    <StyledDetail>WCANTO Earned</StyledDetail>
                  </StyledDetails>
                  <StyledSpacer/>
                  <HarvestButton/>
                </StyledContent>
              </StyledCardContent>
            </Card>
        </StyledCardWrapper>
    )
}



export function Harvest() {

    return (
        <StyledCards>
          <HarvestCard/>
        </StyledCards>
    )

}