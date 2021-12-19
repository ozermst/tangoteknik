import Image from 'next/image';
import Container from '../container/container';
/* eslint-disable-next-line */
export interface HeroProps {
  heroImageUrl: string;
}

export function Hero({ heroImageUrl }: HeroProps) {
  return (
    <>
      <Container>
        <div className="hero">
          <div className="image">
            <Image
              src={heroImageUrl}
              alt="hero image"
              // width={1460}
              // height={600}
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </div>
      </Container>
      <style jsx>{`
        .hero {
          width: 100%;
          height: 600px;
        }
        .image {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        @media screen and (min-width: 640px) {
          .hero {
            width: 100%;
            height: 600px;
          }
        }
      `}</style>
    </>
  );
}

export default Hero;
