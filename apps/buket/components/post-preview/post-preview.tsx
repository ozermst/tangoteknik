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
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} image={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/posts/${slug}`}>
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <Date dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  );
}

export default PostPreview;
