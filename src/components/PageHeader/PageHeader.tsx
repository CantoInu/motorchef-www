import React from 'react'
import styled from 'styled-components'

import { Container } from 'components/Container'

interface PageHeaderProps {
  icon: React.ReactNode
  subtitle?: string
  title?: string
}

const StyledPageHeader = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding-bottom: ${(props) => props.theme.spacing[6]}px;
  padding-top: ${(props) => props.theme.spacing[6]}px;
  margin: 8px auto;
`

const StyledIcon = styled.div`
  height: auto;
  width: 120px;
  padding: 0 auto;
`

const StyledTitle = styled.h1`
  font-family: 'Kaushan Script', sans-serif;
  color: ${(props) => props.theme.textColor.tertiary};
  font-size: 36px;
  font-weight: 700;
  margin: 6px;
  padding: 0 auto;
`

const StyledSubtitle = styled.h3`
  color: ${(props) => props.theme.textColor.primary};
  font-size: 18px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;
`

export function PageHeader({ icon, subtitle, title }:PageHeaderProps) {
  return (
    <Container size="md">
      <StyledPageHeader>
        <StyledIcon>{icon}</StyledIcon>
        <StyledTitle>{title}</StyledTitle>
        <StyledSubtitle>{subtitle}</StyledSubtitle>
      </StyledPageHeader>
    </Container>
  )
}


