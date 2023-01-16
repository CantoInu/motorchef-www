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
  color: ${(props) => props.theme.color.grey[400]};
`

export default Label
