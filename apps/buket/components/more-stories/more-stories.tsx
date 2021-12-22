import PostPreview from '../../components/post-preview/post-preview';
// import Post from '../../pages/index';
import { Post } from '../../types/blog';

/* eslint-disable-next-line */
export interface MoreStoriesProps {
  posts: Array<Post>;
}

export function MoreStories({ posts }: MoreStoriesProps) {
  return (
    <>
      <section>
        <h2 className="header">Diğer hikayeler</h2>
        <div className="preview">
          {posts.map((post) => (
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          ))}
        </div>
      </section>
      <style jsx>{`
        .header {
          margin-bottom: 2rem;
          font-size: 3.75rem;
          font-weight: 700;
          letter-spacing: -0.05em;
          line-height: 1.25;
        }
        .preview {
          display: grid;
          grid-template-columns: repeat(1, minmax(0, 1fr));
          row-gap: 5rem;
          margin-bottom: 8rem;
        }
        @media screen and (min-width: 640px) {
          .header {
            font-size: 4.5rem;
            line-height: 1;
          }
          .preview {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            column-gap: 4rem;
            row-gap: 8rem;
          }
        }
      `}</style>
    </>
  );
}

export default MoreStories;
