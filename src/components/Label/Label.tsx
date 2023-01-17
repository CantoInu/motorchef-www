import React from 'react'
import styled from 'styled-components'

interface LabelProps {
  text?: string
}

export function Label({ text }:LabelProps) {
  return(
   <StyledLabel>{text}</StyledLabel>
  )
}

const StyledLabel = styled.div`
  color: ${(props) => props.theme.textColor.primary};
`
