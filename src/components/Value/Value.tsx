import React, { useState, useEffect } from 'react'
import CountUp from 'react-countup'

import styled from 'styled-components'

interface ValueProps {
  value: number | string
  decimals?: number
}

export function Value({ value, decimals }: ValueProps) {
  const [start, updateStart] = useState(0)
  const [end, updateEnd] = useState(0)

  return (
    <StyledValue>
      {typeof value == 'string' ? (
        value
      ) : (
        <CountUp
          start={start}
          end={end}
          decimals={
            decimals !== undefined ? decimals : end < 0 ? 4 : end > 1e5 ? 0 : 3
          }
          duration={1}
          separator=","
        />
      )}
    </StyledValue>
  )
}

const StyledValue = styled.div`
  font-family: 'Roboto Mono', monospace;
  color: ${(props) => props.theme.textColor.tertiary};
  font-size: 36px;
  font-weight: 700;
`

