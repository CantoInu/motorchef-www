import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'

interface ContainerProps {
  children?: React.ReactNode,
  size?: 'sm' | 'md' | 'lg'
}

export function Container({ children, size = 'lg' }:ContainerProps) {
  let width: number
  switch (size) {
    case 'sm':
      width = 50
      break
    case 'md':
      width = 66
      break
    case 'lg':
    default:
      width = 100
  }
  return (
    <StyledContainer width={width}>
      {children}
    </StyledContainer>
  )
}

interface StyledContainerProps {
  width: number
}

const StyledContainer = styled.div<StyledContainerProps>`
  box-sizing: border-box;
  margin: 0 auto;
  max-width: ${props => props.width}vw;
  padding: 0 ${props => props.theme.spacing[4]}px;
  width: %;
`