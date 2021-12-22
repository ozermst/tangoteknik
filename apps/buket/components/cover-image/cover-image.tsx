import Image from 'next/image';
import Link from 'next/link';
// import cn from "classnames";
import { urlForImage } from '../../lib/sanity';
/* eslint-disable-next-line */
export interface CoverImageProps {
  title: string;
  slug: string;
  image: string;
}

export function CoverImage({ title, slug, image: source }: CoverImageProps) {
  const image = source ? (
    <Image
      width={2000}
      height={1000}
      alt={`Cover Image for ${title}`}
      src={urlForImage(source).height(1000).width(2000).url()}
      className=""
    />
  ) : (
    <div style={{ paddingTop: '50%', backgroundColor: '#ddd' }} />
  );

  return (
    <div>
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}

export default CoverImage;
