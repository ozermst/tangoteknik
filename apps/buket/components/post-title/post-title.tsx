/* eslint-disable-next-line */
export interface PostTitleProps {
  children: string;
}

export function PostTitle({ children }: PostTitleProps) {
  return (
    <>
      <h1 className="title">{children}</h1>
      <style jsx>{`
        .title {
          font-size: 3.75rem;
          font-weight: 700;
          letter-spacing: -0.05em;
          line-height: 1.25;
          margin-bottom: 3rem;
          text-align: center;
        }
        @media screen and (min-width: 640px) {
          .title {
            font-size: 4.5rem;
            line-height: 1;
            line-height: 1;
            text-align: left;
          }
        }
      `}</style>
    </>
  );
}

export default PostTitle;
