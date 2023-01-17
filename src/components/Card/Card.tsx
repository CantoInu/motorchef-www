import type { ReactChildren } from "types"
import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
  background: ${(props) => props.theme.backgroundColor.secondary};
  border: ${(props) => props.theme.border.medium}ff;
  border-radius: 12px;
  box-shadow: inset 1px 1px 0px ${(props) => props.theme.boxShadow.primary};
  display: flex;
  flex: 1;
  flex-direction: column;
`


export function Card({children}: ReactChildren) {
  return(
    <StyledCard>
        {children}
    </StyledCard>
  )
}



