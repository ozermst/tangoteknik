import Image from 'next/image';
import Container from '../container/container';
import useBreakpoints from '../../lib/useBreakpoints';
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
          height: 50vh;
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
