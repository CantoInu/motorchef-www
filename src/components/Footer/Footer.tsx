import { Spacer } from 'components/Spacer'
import React from 'react'
import styled from 'styled-components'
import { Text } from 'styles'

import {Nav} from './components/Nav'

const StyledFooter = styled.footer`
  align-items: center;
  display: flex;
  justify-content: center;
`
const StyledFooterInner = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: ${props => props.theme.topBarSize}px;
  max-width: ${props => props.theme.siteWidth}px;
  width: 100%;
`

const StyledWarning = styled.footer`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - ${(props) => props.theme.topBarSize * 2}px);
`

export function Footer() {
  return(
    <>
      <StyledWarning>
        <Text>⚠️ This site links to experimental contracts which have not been audited and could contain bugs🐞 which could result in a loss of funds 💸. ⚠️</Text>
        <Text>⚠️ By interacting with this site you agree to accept this risk. ⚠️</Text>
      </StyledWarning>
      <Spacer size="xl" />
      <StyledFooter>
        <StyledFooterInner>
          <Nav />
        </StyledFooterInner>
      </StyledFooter>
    </>
  )
}



