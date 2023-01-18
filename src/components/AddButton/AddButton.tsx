import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { Text } from 'styles'

interface IconButtonProps {
  disabled: boolean
  onClick?: () => void
  to?: string
}

const AddButton: React.FC<IconButtonProps> = ({
  disabled,
  onClick,
  to,
}) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      <Text
        fontWeight={600}
        fontSize={16}>
        ➕
      </Text>
    </StyledButton>
  )
}

interface StyledButtonProps {
  disabled?: boolean
}

const StyledButton = styled.button<StyledButtonProps>`
  align-items: center;
  background-color: ${(props) =>
    props.disabled
      ? props.theme.backgroundColor.disabled
      : props.theme.backgroundColor.tertiary};
  border: 0;
  border-radius: 10px;
  color: ${(props) =>
    props.disabled
      ? props.theme.textColor.disabled
      : props.theme.textColor.tertiary};
  cursor: pointer;
  display: flex;
  font-weight: 700;
  height: 56px;
  justify-content: center;
  letter-spacing: 1px;
  outline: none;
  padding: 0;
  margin: 0;
  white-space: nowrap;
  pointer-events: ${(props) => (!props.disabled ? undefined : 'none')};
  text-transform: uppercase;
  width: 56px;
  &:hover {
    opacity: 0.75;
  }
`

const StyledLink = styled(Link)`
  align-items: center;
  color: inherit;
  display: flex;
  flex: 1;
  height: 56px;
  justify-content: center;
  margin: 0 ${(props) => -props.theme.spacing[4]}px;
  padding: 0 ${(props) => props.theme.spacing[4]}px;
  text-decoration: none;
`

export default AddButton
