import React from 'react'
import styled from 'styled-components'

import Nav from './components/Nav'

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

export function Footer() {
  return(
    <StyledFooter>
      <StyledFooterInner>
        <Nav />
      </StyledFooterInner>
    </StyledFooter>
  )
}



