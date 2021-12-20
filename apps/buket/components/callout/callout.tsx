import Image from 'next/image';
import Container from '../container/container';
import { BUKET_PHOTO_1_URL } from '../../lib/constants';
/* eslint-disable-next-line */
export interface CalloutProps {}

export function Callout(props: CalloutProps) {
  return (
    <>
      <Container>
        <div className="wrapper">
          <div className="callout">
            <h1>Tangoyu şampiyondan öğrenin</h1>
            <p>
              Arjantin hükümeti tarafından düzenlenen dünyanın en prestijli
              tango yarışmasında bugüne kadar finale yükselebilen ilk ve tek
              Türk dansçı.
            </p>
            <p>
              6-7 Kasım 2021’de Paris&#39;te yapılan &#39;Championnat
              Inernational de Tango&#39; Yarışması&#39;nda sahne tangosu
              kategorisinde birincilik
            </p>
            <p>
              21-24 Kasım tarihleri arasında Ukrayna’da düzenlenen &#39;Kyiv
              Milonguero Cup&#39; Yarışması’ndaki tüm kategorilerde (Tango,
              Tango Vals ve Milonga) birincilik
            </p>
          </div>
          <div className="image">
            <Image
              src={BUKET_PHOTO_1_URL}
              alt="hero image"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </div>
      </Container>
      <style jsx>{`
        .wrapper {
          display: grid;
          grid-template-columns: 1fr;
          align-items: center;
        }
        .callout {
        }
        .callout h1 {
          font-size: 1.875rem;
          line-height: 2.25rem;
        }
        .image {
          position: relative;
          width: 100%;
          height: 600px;
          overflow: hidden;
        }
        @media screen and (min-width: 640px) {
          .wrapper {
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: center;
            width: 80%;
            margin: 0 auto;
          }
        }
      `}</style>
    </>
  );
}

export default Callout;
