import farm from 'assets/farm.png'

import {Page} from "components/Page"
import {PageHeader} from "components/PageHeader"
import Image from "next/image"
import { Spacer } from 'components/Spacer';
import { Text } from 'styles';
import { TopBar } from 'components/TopBar';
import { Seo } from 'components/Seo';
import { PassLink } from 'components/PassLink';
import {BurnCard} from 'components/BurnCard';

export default function Burn() {
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
          title="Burn CINU"
          subtitle="Make Dev Poor Again"
        />
        <Spacer size="lg" />
        <Text
              as="a"
              textDecoration="none"
              fontSize={16}
              fontWeight={400}>
              Send CANTO to
          </Text>
          <PassLink href="https://tuber.build/address/0xDE7Aa2B085bef0d752AA61058837827247Cc5253">
            <Text
                as="a"
                fontSize={16}
                textDecoration="underline"
                fontWeight={600}>
                &nbsp;WOOF
            </Text>
          </PassLink>
          <Text
              as="a"
              textDecoration="none"
              fontSize={16}
              fontWeight={400}>
              &nbsp;to burn CINU 
          </Text>
        <Spacer size="xl" />
        <BurnCard/>
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
          <PassLink href="https://alto.build/collections/0xde7aa2b085bef0d752aa61058837827247cc5253">
            <Text
                as="a"
                fontSize={16}
                textDecoration="underline"
                fontWeight={600}>
                Alto
            </Text>
          </PassLink>
          <Text
              as="a"
              textDecoration="none"
              fontSize={16}
              fontWeight={400}>
              &nbsp;to see your WOOF NFTs 
          </Text>
          <Spacer size="xl" />
        </div>
      </Page>
      </>
  );
};
