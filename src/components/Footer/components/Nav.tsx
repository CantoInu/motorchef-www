import React from 'react'
import styled from 'styled-components'

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
`

export function Nav() {
  return (
    <StyledNav>
      <StyledLink
        target="_blank"
        href="https://evm.explorer.canto.io/address/0xae2BF8e822C5f92d8E5F9aD3225C8F815893BB32/contracts#address-tabs"
      >
        MotorChef Contract
      </StyledLink>
      <StyledLink
        target="_blank"
        href="https://forteswap.xyz/pool"
      >
        Forteswap
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