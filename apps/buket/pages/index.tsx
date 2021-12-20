import Head from 'next/head';
import HeroHome from '../components/hero-home/hero-home';
import Services from '../components/services/services';
import Callout from '../components/callout/callout';
import Spacer from '../components/spacer/spacer';
// import styles from './index.module.scss';

export function Index() {
  return (
    <>
      <Head>
        <title>Welcome to buket!</title>
      </Head>
      <HeroHome />
      <Spacer height="5rem" />
      <Callout />
      <Spacer height="5rem" />
      <Services />
      <style jsx>{``}</style>
    </>
  );
}

export default Index;
