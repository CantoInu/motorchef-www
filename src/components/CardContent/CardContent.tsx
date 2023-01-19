import type { ReactChildren } from "types"
import React from 'react'
import styled from 'styled-components'

export function CardContent({ children }: ReactChildren) {
  return(<StyledCardContent>{children}</StyledCardContent>)
}

const StyledCardContent = styled.div`
  display: flex;
  flex: 1;
  width: 370px;
  flex-direction: column;
  padding: ${(props) => props.theme.spacing[3]}px;
`

