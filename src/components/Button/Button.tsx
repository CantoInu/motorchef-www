import React, { useContext, useMemo } from 'react'
import styled, { ThemeContext } from 'styled-components'

import Link from 'next/link'

interface ButtonProps {
  children?: React.ReactNode,
  disabled?: boolean,
  href?: string,
  onClick?: () => void,
  size?: 'sm' | 'md' | 'lg',
  text?: string,
  to?: string,
  variant?: 'default' | 'secondary' | 'tertiary'
}

export function Button({
  children,
  disabled,
  href,
  onClick,
  size,
  text,
  to,
  variant,
}: ButtonProps) {
  const { textColor, backgroundColor, boxShadow, spacing } = useContext(ThemeContext)

  let buttonTextColor: string
  let buttonBGColor: string
  switch (variant) {
    case 'secondary':
      buttonTextColor = textColor.secondary
      buttonBGColor = backgroundColor.secondary
      break
    case 'default':
    default:
      buttonTextColor = textColor.tertiary
      buttonBGColor = backgroundColor.tertiary
  }

  let buttonSize: number
  let buttonPadding: number
  let fontSize: number
  switch (size) {
    case 'sm':
      `${boxShadow.primary}, ${boxShadow.dark};`
      buttonPadding = spacing[3]
      buttonSize = 36
      fontSize = 14
      break
    case 'lg':
      `${boxShadow.primary}, ${boxShadow.dark};`
      buttonPadding = spacing[4]
      buttonSize = 72
      fontSize = 16
      break
    case 'md':
    default:
      `${boxShadow.primary}, ${boxShadow.dark};`
      buttonPadding = spacing[4]
      buttonSize = 56
      fontSize = 16
  }

  const ButtonChild = useMemo(() => {
    if (to) {
      return <StyledLink href={to}>{text}</StyledLink>
    } else if (href) {
      return <StyledExternalLink href={href} target="__blank">{text}</StyledExternalLink>
    } else {
      return text
    }
  }, [href, text, to])

  return (
    <StyledButton
      boxShadow={boxShadow}
      color={buttonTextColor}
      backgroundColor={buttonBGColor}
      disabled={disabled}
      fontSize={fontSize}
      onClick={onClick}
      padding={buttonPadding}
      size={buttonSize}
    >
      {children}
      {ButtonChild}
    </StyledButton>
  )
}

interface StyledButtonProps {
  boxShadow: string,
  color: string,
  backgroundColor: string,
  disabled?: boolean,
  fontSize: number,
  padding: number,
  size: number
}

const StyledButton = styled.button<StyledButtonProps>`
  align-items: center;
  background-color: ${props => !props.disabled ? props.backgroundColor : `${props.backgroundColor}`};
  border: 0;
  border-radius: 12px;
  box-shadow: ${props => props.boxShadow};
  color: ${props => !props.disabled ? props.disabled : `${props.color}`};
  cursor: pointer;
  display: flex;
  font-size: ${props => props.fontSize}px;
  font-weight: 700;
  text-decoration: none !important;
  height: ${props => props.size}px;
  justify-content: center;
  outline: none;
  padding-left: ${props => props.padding}px;
  padding-right: ${props => props.padding}px;
  pointer-events: ${props => !props.disabled ? undefined : 'none'};
  width: 100%;
  &:hover {
    background-color: ${props => !props.disabled ? props.backgroundColor : `${props.backgroundColor}`};
  }
`

const StyledLink = styled(Link)`
  text-decoration: none !important;
  align-items: right;
  color: inherit;
  display: flex;
  flex: 1;
  height: 56px;
  justify-content: center;
  margin: 0 ${props => -props.theme.spacing[4]}px;
  padding: 0 ${props => props.theme.spacing[4]}px;
`

const StyledExternalLink = styled.a`
  text-decoration: none !important; 
  align-items: center;
  color: inherit;
  display: flex;
  flex: 1;
  height: 56px;
  justify-content: center;
  margin: 0 ${props => -props.theme.spacing[4]}px;
  padding: 0 ${props => props.theme.spacing[4]}px;
`