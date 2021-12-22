import Head from 'next/head';
import Container from '../../components/container/container';
import HeroPost from '../../components/hero-post/hero-post';
import MoreStories from '../../components/more-stories/more-stories';
import BlogLayout from '../../components/blog-layout/blog-layout';
import { indexQuery } from '../../lib/queries';
import { getClient, overlayDrafts } from '../../lib/sanity.server';
import { Post } from '../../types/blog';
import { SITE_NAME } from '../../lib/constants';
/* eslint-disable-next-line */
export interface BlogProps {
  allPosts: Array<Post>;
  preview: boolean;
}

export function Blog({ allPosts, preview }: BlogProps) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <BlogLayout preview={preview}>
        <Head>
          <title>{SITE_NAME}</title>
        </Head>
        <Container>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </BlogLayout>
      <style jsx>{``}</style>
    </>
  );
}

export default Blog;

export async function getStaticProps({ preview = false }) {
  const allPosts = overlayDrafts(await getClient(preview).fetch(indexQuery));
  return {
    props: { allPosts, preview },
  };
}
