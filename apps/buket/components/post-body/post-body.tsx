import BlockContent from '@sanity/block-content-to-react';
/* eslint-disable-next-line */

export interface PostBodyProps {
  content: string;
}

export function PostBody({ content }: PostBodyProps) {
  return (
    <>
      <div className="content">
        <BlockContent blocks={content} />
      </div>
      <style jsx>{`
        .content {
          max-width: 42rem;
          margin-left: auto;
          margin-right: auto;
        }
        @media screen and (min-width: 640px) {
        }
      `}</style>
    </>
  );
}

export default PostBody;
