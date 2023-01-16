import React from 'react'
import styled from 'styled-components'
import {Flex} from 'styles'
import { defaultTheme } from "theme"
import {Logo} from 'components/Logo'

import { ConnectButton } from '../ConnectButton'
import {Nav} from './components/Nav'
import { ReactChildren } from 'types'
import {Container as originalContainer} from 'components/Container'

const Container = styled(Flex)`
	top: 0px;
	witdth: 100%
	height: 68px;
	padding: 4px 20px;
	background-color: ${defaultTheme.color.primary.light}cc;
	backdrop-filter: blur(10px);
  z-index=0
`

export function TopBar({ children }: ReactChildren) {
  return (
    <StyledTopBar>
      <Container>
        <StyledTopBarInner>
          <StyledLogoWrapper>
            <Logo/>
          </StyledLogoWrapper>
            <Nav />
          <StyledAccountButtonWrapper>
            <ConnectButton />
          </StyledAccountButtonWrapper>
        </StyledTopBarInner>
      </Container>
    </StyledTopBar>
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
