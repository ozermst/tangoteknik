/* eslint-disable-next-line */
export interface ContainerProps {
  children: JSX.Element | JSX.Element[];
}

export function Container({ children }: ContainerProps) {
  return (
    <>
      <div>{children}</div>
      <style jsx>{`
        div {
          width: 95%;
          margin: 0 auto;
        }
        @media only screen and (max-width: 640px) {
          div {
            max-width: 640px;
          }
        }
        @media only screen and (max-width: 768px) {
          div {
            max-width: 768px;
          }
        }
        @media only screen and (max-width: 1024px) {
          div {
            max-width: 1024px;
          }
        }
        @media only screen and (max-width: 1280px) {
          div {
            max-width: 1280px;
          }
        }
        @media only screen and (max-width: 1536px) {
          div {
            max-width: 1536px;
          }
        }
      `}</style>
    </>
  );
}

export default Container;
