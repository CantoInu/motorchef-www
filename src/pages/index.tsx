import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import icon from 'assets/icon.png'

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

export default function Home() {
  return (
    <>
      <Seo/>
      <TopBar/>
      <Page>
        <Spacer size="xl" />
        <PageHeader
          icon={<Image src={icon} height={240} width={240} alt="WOOF" />}
          title="MotorChef is (almost) Ready"
          subtitle="Stake Canto Native DEX LP tokens to farm your share of WCANTO!"
        />
        <Container>
          <Balances/>
        </Container>
        <Spacer size="xl" />
        <div
          style={{
            margin: '0 auto',
          }}
        >
          <Button>
            <PassLink href="/farm">
              <Text
                  as="a"
                  textDecoration="none"
                  fontSize={16}
                  fontWeight={700}>
                  🧑‍🌾 Get to farming
              </Text>
            </PassLink>
          </Button>
          <Spacer size="xl" />
        </div>
      </Page>
      </>
  );
};

// issue with formatting comes leaving the container under the header
