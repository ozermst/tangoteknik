/* eslint-disable-next-line */
export interface SiteNameProps {}

export function SiteName(props: SiteNameProps) {
  return (
    <>
      <h1 className="siteName">
        Tango<span className="teknik">Teknik</span>{' '}
        <span className="byBuket">by buket akdol</span>
      </h1>
      <style jsx>{`
        .siteName {
          font-size: 1.875rem;
          font-weight: var(--font-weight-bold);
          letter-spacing: -0.05em;
          line-height: 2.25rem;
          flex-grow: 1;
          text-align: center;
        }
        .teknik {
          color: var(--primary);
        }
        .byBuket {
          font-size: initial;
          font-weight: initial;
          letter-spacing: initial;
        }
        @media screen and (min-width: 640px) {
          .siteName {
            flex-grow: unset;
          }
        }
      `}</style>
    </>
  );
}

export default SiteName;
