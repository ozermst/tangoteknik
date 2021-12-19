import Header from '../header/header';
import Footer from '../footer/footer';
/* eslint-disable-next-line */
export interface LayoutProps {
  children: JSX.Element;
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
