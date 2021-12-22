import Head from 'next/head';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import BlogLayout from '../../components/blog-layout/blog-layout';
import Container from '../../components/container/container';
import PostBody from '../../components/post-body/post-body';
import MoreStories from '../../components/more-stories/more-stories';
// import Header from "../../components/header";
import PostHeader from '../../components/post-header/post-header';
import SectionSeparator from '../../components/section-separator/section-separator';
// import BlogLayout from "../../components/blog-layout/blog-layout";
import PostTitle from '../../components/post-title/post-title';
// import { SITE_NAME } from "../../lib/constants";
import { Post } from '../../types/blog';
import { postQuery, postSlugsQuery } from '../../lib/queries';
import { urlForImage, usePreviewSubscription } from '../../lib/sanity';
import {
  sanityClient,
  getClient,
  overlayDrafts,
} from '../../lib/sanity.server';
import { AnyRecord } from 'dns';

interface Data {
  post: Post;
  morePosts: Array<Post>;
}

/* eslint-disable-next-line */
export interface PostProps {
  data: Data;
  preview: boolean;
}

export function Post({
  data = {
    post: undefined,
    morePosts: [],
  },
  preview,
}: PostProps) {
  const router = useRouter();
  const slug = data?.post?.slug;

  console.log('Enabled: ', preview && slug);

  const {
    data: { post, morePosts },
  } = usePreviewSubscription(postQuery, {
    params: { slug },
    initialData: data,
    // enabled: preview && slug,
    enabled: false,
  });

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <BlogLayout preview={preview}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>{post.title}</title>
                {post.coverImage && (
                  <meta
                    key="ogImage"
                    property="og:image"
                    content={urlForImage(post.coverImage)
                      .width(1200)
                      .height(627)
                      .fit('crop')
                      .url()}
                  />
                )}
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                slug={slug}
              />
              <PostBody content={post.content} />
            </article>
            <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </BlogLayout>
  );
}

export default Post;

export async function getStaticProps({ params, preview = false }) {
  const { post, morePosts } = await getClient(preview).fetch(postQuery, {
    slug: params.slug,
  });

  return {
    props: {
      preview,
      data: {
        post,
        morePosts: overlayDrafts(morePosts),
      },
    },
  };
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(postSlugsQuery);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}
