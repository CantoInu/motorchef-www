import React from 'react'
import styled from 'styled-components'

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled.a`
  color: ${(props) => props.theme.textColor.secondary};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.textColor.tertiary};
  }
`

export function Nav() {
  return (
    <StyledNav>
      <StyledLink
        target="_blank"
        href="https://tuber.build/address/0xae2BF8e822C5f92d8E5F9aD3225C8F815893BB32/contracts#address-tabs"
      >
        MotorChef Contract
      </StyledLink>
      <StyledLink
        target="_blank"
        href="https://v1.leetswap.finance/#/add/v2/0x7264610A66EcA758A8ce95CF11Ff5741E1fd0455/CANTO"
      >
        Leetswap
      </StyledLink>
      <StyledLink target="_blank" href="https://t.me/cantoInu">
        Telegram
      </StyledLink>
      <StyledLink target="_blank" href="https://github.com/CantoInu">
        Github
      </StyledLink>
      <StyledLink target="_blank" href="https://twitter.com/CantoInu">
        Twitter
      </StyledLink>
    </StyledNav>
  )
}
