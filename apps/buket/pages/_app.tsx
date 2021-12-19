import { AppProps } from 'next/app';
import Layout from '../components/layout/layout';
import './styles.scss';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default CustomApp;
