import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import styled from 'styled-components'
import icon from 'assets/icon.png'

import {Page} from "components/Page"
import {PageHeader} from "components/PageHeader"
import Image from "next/image"

const Home: NextPage = () => {
  return (
    <Page>
      <PageHeader
        icon={<Image src={icon} />}
        title="MotorChef is Ready"
        subtitle="Stake Forteswap LP tokens to farm your share of WCANTO!"
      />
    </Page>
  );
};

export default Home;
