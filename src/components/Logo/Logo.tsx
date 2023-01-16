import type { ReactChildren } from "types"
import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import icon from '../../assets/icon.png'
import Image from 'next/image'

export function Logo({ children }: ReactChildren) {
  return (
    <>
      <Image src={icon} height="32" width="32" style={{ marginTop: -4 }} alt="WOOF" />
      <StyledText>
        Canto Inu <MasterChefText>MotorChef</MasterChefText>
      </StyledText>
    </>
  )
}

const StyledLogo = styled(Link)`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0;
  min-height: 44px;
  min-width: 44px;
  padding: 0;
  text-decoration: none;
`

const StyledText = styled.span`
  color: ${(props) => props.theme.color.grey[600]};
  font-family: 'Reem Kufi', sans-serif;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.03em;
  margin-left: ${(props) => props.theme.spacing[2]}px;
  @media (max-width: 400px) {
    display: none;
  }
`

const MasterChefText = styled.span`
  font-family: 'Kaushan Script', sans-serif;
`
