import { Author } from '../../types/blog';
import Avatar from '../../components/avatar/avatar';
import Date from '../../components/date/date';
import CoverImage from '../../components/cover-image/cover-image';
import PostTitle from '../../components/post-title/post-title';
/* eslint-disable-next-line */

export interface PostHeaderProps {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
  slug: string;
}

export function PostHeader({
  title,
  coverImage,
  date,
  author,
  slug,
}: PostHeaderProps) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="avatar">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="coverImage">
        <CoverImage title={title} image={coverImage} slug={slug} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="avatarMobile">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="date">
          <Date dateString={date} />
        </div>
      </div>
      <style jsx>{`
        .avatar {
          display: none;
        }
        .avatarMobile {
          display: block;
          margin-bottom: 1.5rem;
        }
        .coverImage {
          margin-bottom: 2rem;
          margin-left: 0px;
          margin-right: 0px;
        }
        .date {
          margin-bottom: 1.5rem;
          font-size: 1.125rem;
          line-height: 1.75rem;
        }
        @media screen and (min-width: 640px) {
          .avatar {
            display: block;
            margin-bottom: 3rem;
          }
          .avatarMobile {
            display: none;
          }
          .coverImage {
            margin-bottom: 4rem;
          }
        }
      `}</style>
    </>
  );
}

export default PostHeader;
