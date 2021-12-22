import Avatar from '../avatar/avatar';
import Date from '../date/date';
import CoverImage from '../cover-image/cover-image';
import Link from 'next/link';
/* eslint-disable-next-line */

interface Author {
  name: string;
  picture: string;
}

export interface PostPreviewProps {
  // _id: number;
  // name: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  author: Author;
  slug: string;
}

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: PostPreviewProps) {
  return (
    <>
      <div className="coverImage">
        <CoverImage slug={slug} title={title} image={coverImage} />
      </div>
      <h3 className="title">
        <Link href={`/posts/${slug}`}>
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="date">
        <Date dateString={date} />
      </div>
      <p className="avatar">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
      <style jsx>{`
        .coverImage {
          margin-bottom: 1.25rem;
        }
        .title {
          font-size: 1.875rem;
          line-height: 2.25rem;
          margin-bottom: 0.75rem;
          line-height: 1.375;
        }
        .date {
          font-size: 1.125rem;
          line-height: 1.75rem;
          margin-bottom: 1rem;
        }
        .avatar {
          font-size: 1.125rem;
          line-height: 1.75rem;
          line-height: 1.625;
          margin-bottom: 1rem;
        }
        @media screen and (min-width: 640px) {
        }
      `}</style>
    </>
  );
}

export default PostPreview;
