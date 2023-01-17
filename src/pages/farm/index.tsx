import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import farm from 'assets/farm.png'

import {Page} from "components/Page"
import {PageHeader} from "components/PageHeader"
import Image from "next/image"
import {Container} from 'components/Container';
import {Balances} from 'components/Balances';
import { Spacer } from 'components/Spacer';
import { Button, Text } from 'styles';
import { TopBar } from 'components/TopBar';
import { useCallback, useState } from 'react';
import { Seo } from 'components/Seo';
import { PassLink } from 'components/PassLink';
import { FarmCards } from 'components/FarmCards';

export default function Farm() {
  return (
    <>
      <Seo/>
      <TopBar/>
      <Page>
        <Spacer size="xl" />
        <PageHeader
          icon={
            <div style={{borderRadius: '500px', overflow: 'hidden'}}>
              <Image src={farm} height={150} width={150} alt="WOOF" />
            </div>
          }
          title="So farming, much Free Public Infrastructure"
          subtitle="Deposit CINU/WCANTO LP Tokens and earn WCANTO"
        />
        <FarmCards/>
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
              🎼 Make sure to head over to Forteswap to pool your CINU and WCANTO 🎼 
          </Text>
          <Spacer size="xl" />
        </div>
      </Page>
      </>
  );
};

// issue with formatting comes leaving the container under the header

/*⭐️ Every time you stake and unstake LP tokens, the contract will
automagically harvest WCANTO rewards for you!
*/