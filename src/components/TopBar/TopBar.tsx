import React from 'react'
import styled from 'styled-components'
import {CenteredFlex, Flex, Text} from 'styles'
import icon from 'assets/icon.png'

import { ConnectButton } from '../ConnectButton'
import { ReactChildren } from 'types'
import { PassLink } from 'components/PassLink'
import Image from "next/image"
import { useWindowWidth } from 'providers/WindowWidthProvider'

const Container = styled(Flex)`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 64px;
  padding: 12px 20px;
  background-color: ${({ theme }) => theme.backgroundColor.primary}cc;
  backdrop-filter: blur(10px);
  z-index: 10;
`

const StyledMotorChef = styled(Text)`
  font-family: 'Kaushan Script', sans-serif;
  font-size: 20px;
  font-weight: 700;
`

export function TopBar({ children }: ReactChildren) {
  const { widerThanSmall, widerThanMedium, widerThanLarge } = useWindowWidth()
  
  return (
    <Container
			as="header"
			justify="space-between"
			align="center">
			<PassLink href="/">
				<CenteredFlex
					as="a"
					gap={12}>
					<Image
						src={icon}
						alt="WOOF"
						width={40}
						height={40}
					/>
					<Flex column={!widerThanMedium}>
						<Text
              fontSize={20}
              fontWeight={700}
            >Canto Inu&nbsp;</Text>
						<StyledMotorChef
            >MotorChef</StyledMotorChef>	
					</Flex>
				</CenteredFlex>
			</PassLink>
      <CenteredFlex gap={widerThanLarge ? 36: 24}>
				{widerThanMedium && (<>
					<PassLink href="/">
						<Text 
              fontWeight={700}
              as="a">
              Home
            </Text>
					</PassLink>
				</>)}
				{widerThanSmall && (
          <PassLink href="/farm">
            <Text 
              fontWeight={700}
              as="a">
              Farm
            </Text>
          </PassLink>
				)}
				<ConnectButton/>
			</CenteredFlex>
    </Container>

  )
}


const StyledLogoWrapper = styled.div`
  width: 260px;
  @media (max-width: 400px) {
    width: auto;
  }
`

const StyledTopBar = styled.div``

const StyledTopBarInner = styled.div`
  align-items: center;
  display: flex;
  height: ${(props) => props.theme.topBarSize}px;
  justify-content: space-between;
  max-width: ${(props) => props.theme.siteWidth}px;
  width: 100%;
`
const StyledNavWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  @media (max-width: 400px) {
    display: none;
  }
`

const StyledAccountButtonWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  width: 156px;
  @media (max-width: 400px) {
    justify-content: center;
    width: auto;
  }
`

const StyledMenuButton = styled.button`
  background: none;
  border: 0;
  margin: 0;
  outline: 0;
  padding: 0;
  display: none;
  @media (max-width: 400px) {
    align-items: center;
    display: flex;
    height: 44px;
    justify-content: center;
    width: 44px;
  }
`
