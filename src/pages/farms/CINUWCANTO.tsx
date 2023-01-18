import {Page} from "components/Page"
import {PageHeader} from "components/PageHeader"
import { Spacer } from 'components/Spacer';
import {  Flex, Text } from 'styles';
import { TopBar } from 'components/TopBar';
import { Seo } from 'components/Seo';
import { Harvest } from 'components/Harvest';
import { DogIcon } from 'components/Icons';
import styled from "styled-components";


const StyledFarm = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const StyledCardsWrapper = styled.div`
  display: flex;
  width: 600px;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
  }
`

const StyledCardWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 80%;
  }
`

const StyledInfo = styled.h3`
  color: ${(props) => props.theme.color.grey[400]};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;
`

export default function CINUWCANTO() {
	return (
	<>
		<Seo title='Farms | CINU-WCANTO'/>
		<TopBar/>
		<Page>
		<Spacer size="xl" />
		<PageHeader
			icon={<DogIcon size={100}/>}
			title="Canto&apos;s Best Friend!"
			subtitle="Deposit vAMM CINU/WCANTO LP Tokens and earn WCANTO"
		/>
		<StyledCardsWrapper>
		  <StyledCardWrapper>
		    <Harvest/>
          </StyledCardWrapper>
          <Spacer />
          <StyledCardWrapper>
		  	<Harvest/>
          </StyledCardWrapper>
        </StyledCardsWrapper>
		<Spacer size="xl" />
		<div
			style={{
			margin: '0 auto',
			}}
		>
			<Text
				as="a"
				textDecoration="none"
				fontSize={16}
				fontWeight={400}>
				⭐️ Every time you stake and unstake LP tokens, the contract will automagically harvest WCANTO rewards for you!
			</Text>
			<Spacer size="xl" />
		</div>
		</Page>
	</>
	)
}

