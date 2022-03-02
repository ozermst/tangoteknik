import Header from '../header/header';
import Footer from '../footer/footer';
/* eslint-disable-next-line */
export interface LayoutProps {
  children?: React.ReactChild | React.ReactChild[];
  // children?: React.ReactNode; This seems to be the best option
  // children: JSX.Element | JSX.Element[] | string | string[];
}

export function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
