import type { ReactChildren } from "types"
import styled from 'styled-components'
import {Footer} from 'components/Footer'

const StyledPage = styled.div``

const StyledMain = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - ${(props) => props.theme.topBarSize * 2}px);
`

export function Page({ children }: ReactChildren) {
	return (
		<StyledPage>
    <StyledMain>{children}</StyledMain>
    <Footer />
  </StyledPage>
	)
}
