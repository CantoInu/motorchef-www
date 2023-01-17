import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import type { ReactChildren } from "types"
import { useRouter } from 'next/router';

export function Nav({children}: ReactChildren) {
  const router = useRouter();

  return (
    <StyledNav>
      <StyledLink href="/" className='active'>
        Home
      </StyledLink>
      <StyledLink href="/farm" className='active'>
        Farms
      </StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.textColor.primary};
  font-weight: 700;
  padding-left: ${(props) => props.theme.spacing[4]}px;
  padding-right: ${(props) => props.theme.spacing[4]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.textColor.secondary};
  }
  &.active {
    color: ${(props) => props.theme.textColor.tertiary};
  }
  @media (max-width: 400px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
`

const StyledAbsoluteLink = styled.a`
  color: ${(props) => props.theme.textColor.primary};
  font-weight: 700;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.textColor.secondary};
  }
  &.active {
    color: ${(props) => props.theme.textColor.tertiary};
  }
  @media (max-width: 400px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
`