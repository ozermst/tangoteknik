import Image from 'next/image';
import { urlForImage } from '../../lib/sanity';
/* eslint-disable-next-line */
export interface AvatarProps {
  name: string;
  picture: string;
}

export function Avatar({ name, picture }: AvatarProps) {
  return (
    <>
      <div className="avatar">
        <div className="image">
          <Image
            src={urlForImage(picture).height(96).width(96).fit('crop').url()}
            layout="fill"
            className="rounded-full"
            alt={name}
          />
        </div>
        <div className="name">{name}</div>
      </div>
      <style jsx>{`
        .avatar {
          display: flex;
          align-items: center;
        }
        .image {
          position: relative;
          width: 2.75rem;
          height: 2.75rem;
          margin-right: 1rem;
          border-radius: 9999px;
          overflow: hidden;
        }
        .name {
          font-size: 1.25rem;
          line-height: 1.75rem;
          font-weight: 700;
        }
        .rounded-full {
          border-radius: 9999px;
        }
      `}</style>
    </>
  );
}

export default Avatar;
