import Container from '../container/container';
import SiteName from '../site-name/site-name';
/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <>
      <footer>
        <Container>
          <div className="wrapper">
            <SiteName />
          </div>
        </Container>
      </footer>
      <style jsx>{`
        footer {
        }
        .wrapper {
          display: flex;
          min-height: 10rem;
          align-items: center;
        }
      `}</style>
    </>
  );
}

export default Footer;
