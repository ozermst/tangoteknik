/* eslint-disable-next-line */
export interface SectionSeparatorProps {}

export function SectionSeparator(props: SectionSeparatorProps) {
  return (
    <>
      <hr className="seperator" />
      <style jsx>{`
        .seperator {
          margin-top: 7rem;
          margin-bottom: 6rem;
        }
        @media screen and (min-width: 640px) {
        }
      `}</style>
    </>
  );
}

export default SectionSeparator;
