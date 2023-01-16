import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import styled from 'styled-components'
import icon from 'assets/icon.png'

import {Page} from "components/Page"
import {PageHeader} from "components/PageHeader"
import Image from "next/image"
import {Container} from 'components/Container';
import {Balances} from 'components/Balances';
import { Spacer } from 'components/Spacer';
import { Button } from 'components/Button';

export default function Home() {
  return (
    <Page>
      <PageHeader
        icon={<Image src={icon} height={240} width={240} alt="WOOF" />}
        title="MotorChef is Ready"
        subtitle="Stake Forteswap LP tokens to farm your share of WCANTO!"
      />
      <Container>
        <Balances/>
      </Container>
      <Spacer size="lg" />
      <div
        style={{
          margin: '0 auto',
        }}
      >
        <Button text="🧑‍🌾 Get to farming" to="/farms" variant="secondary" />
      </div>
    </Page>
  );
};

// issue with formatting comes leaving the container under the header
