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
          icon={<Image src={farm} height={240} width={240} alt="WOOF" />}
          title="So farming, much Free Public Infrastructure"
          subtitle="Deposit CINU/WCANTO LP Tokens and earn WCANTO"
        />
        <Container>
          <FarmCards/>
        </Container>
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
              ⭐️ Every time you stake and unstake LP tokens, the contract will
          automagically harvest WCANTO rewards for you!
          </Text>

          <Spacer size="xl" />
        </div>
      </Page>
      </>
  );
};

// issue with formatting comes leaving the container under the header
