import farm from 'assets/farm.png'

import {Page} from "components/Page"
import {PageHeader} from "components/PageHeader"
import Image from "next/image"
import { Spacer } from 'components/Spacer';
import { Text } from 'styles';
import { TopBar } from 'components/TopBar';
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
              <Image src={farm}  alt="WOOF" />
            </div>
          }
          title="So farming, much Free Public Infrastructure"
          subtitle="Deposit CINU/CANTO LP Tokens and earn CANTO"
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
              Make sure to head over to&nbsp; 
          </Text>
          <PassLink href="https://app.leetswap.finance/#/add/v2/0x7264610A66EcA758A8ce95CF11Ff5741E1fd0455/CANTO">
            <Text
                as="a"
                fontSize={16}
                textDecoration="underline"
                fontWeight={600}>
                Leetswap 
            </Text>
          </PassLink>
          <Text
              as="a"
              textDecoration="none"
              fontSize={16}
              fontWeight={400}>
              &nbsp;to pool your CINU🐶 and CANTO🟩⛓️ 
          </Text>
          <Spacer size="xl" />
        </div>
      </Page>
      </>
  );
};
