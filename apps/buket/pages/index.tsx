import Head from 'next/head';
import Hero from '../components/hero/hero';
import Services from '../components/services/services';
import Callout from '../components/callout/callout';
import Spacer from '../components/spacer/spacer';
import { HERO_IMAGE_URL } from '../lib/constants';
// import styles from './index.module.scss';

export function Index() {
  return (
    <>
      <Head>
        <title>Welcome to buket!</title>
      </Head>
      <Hero heroImageUrl={HERO_IMAGE_URL} />
      <Spacer height="5rem" />
      <Callout />
      <Spacer height="5rem" />
      <Services />
      <style jsx>{``}</style>
    </>
  );
}

export default Index;
