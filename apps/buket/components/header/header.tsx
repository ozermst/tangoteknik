import Link from 'next/link';
import { useRouter } from 'next/router';
import Container from '../container/container';
import SiteName from '../site-name/site-name';
/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  const router = useRouter();
  return (
    <>
      <header>
        <Container>
          <div className="appBar">
            <SiteName />
            <nav>
              <ul className="navLinks">
                <li className={router.pathname == '/' ? 'active' : ''}>
                  <Link href="/" passHref>
                    <a id="homeLink">Anasayfa</a>
                  </Link>
                </li>
                <li className={router.pathname == '/blog' ? 'active' : ''}>
                  <Link href="/blog" passHref>
                    <a id="blogLink">Blog</a>
                  </Link>
                </li>
                <li className={router.pathname == '/about' ? 'active' : ''}>
                  <Link href="/about" passHref>
                    <a id="aboutLink">Hakkımda</a>
                  </Link>
                </li>
                <li className={router.pathname == '/contact' ? 'active' : ''}>
                  <Link href="/contact" passHref>
                    <a id="contactLink">İletişim</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </Container>
      </header>
      <style jsx>{`
        .appBar {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          column-gap: 1rem;
          padding: 2rem 0;
        }
        .navLinks {
          display: flex;
          justify-content: center;
          column-gap: 0.5rem;
          flex-grow: 1;
          padding: 5px 0;
        }
        .active {
          border-color: var(--primary);
          border-style: solid;
          border-bottom-width: 4px;
        }
        @media screen and (min-width: 640px) {
          .appBar {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }
          .siteName {
            flex-grow: unset;
          }
          .navLinks {
            flex-grow: unset;
          }
        }
      `}</style>
    </>
  );
}

export default Header;
