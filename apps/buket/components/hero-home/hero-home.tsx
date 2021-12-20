import Image from 'next/image';
import Container from '../container/container';
import useBreakpoints from '../../lib/useBreakpoints';
import {
  HERO_HOME_IMAGE_URL,
  HERO_HOME_MOBILE_IMAGE_URL,
} from '../../lib/constants';
/* eslint-disable-next-line */
export interface HeroHomeProps {}

export function HeroHome(props: HeroHomeProps) {
  const { isXs, isSm, isMd, isLg, active } = useBreakpoints();

  return (
    <>
      <Container>
        <div className="hero">
          <div className="image">
            {isXs ? (
              <Image
                src={HERO_HOME_MOBILE_IMAGE_URL}
                alt="hero image"
                layout="fill"
                objectFit="contain"
                priority
              />
            ) : (
              <Image
                src={HERO_HOME_IMAGE_URL}
                alt="hero image"
                layout="fill"
                objectFit="cover"
                // objectPosition={position}
                priority
              />
            )}
          </div>
        </div>
      </Container>
      <style jsx>{`
        .hero {
          width: 100%;
          height: 70vh;
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

export default HeroHome;
