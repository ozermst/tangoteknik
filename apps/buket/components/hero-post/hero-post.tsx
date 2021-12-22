import Avatar from '../../components/avatar/avatar';
import Date from '../../components/date/date';
import CoverImage from '../../components/cover-image/cover-image';
import Link from 'next/link';
import { Author } from '../../types/blog';
/* eslint-disable-next-line */

export interface HeroPostProps {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
}

export function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: HeroPostProps) {
  return (
    <>
      <section>
        <div className="coverImage">
          <CoverImage slug={slug} title={title} image={coverImage} />
        </div>
        <div className="post">
          <div>
            <h3 className="postLinkWrapper">
              <Link href={`/posts/${slug}`}>
                <a className="postLink">{title}</a>
              </Link>
            </h3>
            <div className="date">
              <Date dateString={date} />
            </div>
          </div>
          <div>
            <p className="excerpt">{excerpt}</p>
            <Avatar name={author.name} picture={author.picture} />
          </div>
        </div>
      </section>
      <style jsx>{`
        .coverImage {
          margin-bottom: 2rem;
        }
        .post {
          margin-bottom: 5rem;
        }
        .postLinkWrapper {
          margin-bottom: 1rem;
          font-size: 2.25rem;
          line-height: 1.25;
        }
        .postLink:hover {
          text-decoration: underline;
        }
        .date {
          margin-bottom: 1rem;
          font-size: 1.125rem;
          line-height: 1.75rem;
        }
        .excerpt {
          font-size: 1.125rem;
          line-height: 1.625;
          margin-bottom: 1rem;
        }
        @media screen and (min-width: 640px) {
          .post {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            column-gap: 4rem;
            margin-bottom: 7rem;
          }
          .coverImage {
            margin-bottom: 4rem;
          }
          .postLinkWrapper {
            font-size: 3.75rem;
            line-height: 1;
          }
          .date {
            margin-bottom: 0;
          }
        }
      `}</style>
    </>
  );
}

export default HeroPost;
