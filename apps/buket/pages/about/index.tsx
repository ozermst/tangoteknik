import Image from 'next/image';
import Container from '../../components/container/container';
import Address from '../../components/address/address';
import Phone from '../../components/phone/phone';
import Email from '../../components/email/email';
import SocialMedia from '../../components/social-media/social-media';
import Hero from '../../components/hero/hero';
import Spacer from '../../components/spacer/spacer';
import { BUKET_PROFILE_PHOTO_URL } from '../../lib/constants';
/* eslint-disable-next-line */
export interface AboutProps {}

export function About(props: AboutProps) {
  return (
    <>
      <Hero heroImageUrl="/images/tango.jpeg" />
      <Spacer height="5rem" />
      <Container>
        <div className="wrapper">
          <div className="sidebar">
            <div className="image">
              <Image
                src={BUKET_PROFILE_PHOTO_URL}
                alt="Özge'nin fotoğrafı"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div>
              <Address name="work" />
              <Email name="work" icon="on" />
              <Phone name="work" icon="on" />
              <SocialMedia name="instagram" icon="on" />
              <SocialMedia name="youtube" icon="on" />
            </div>
          </div>
          <div className="about">
            <Spacer height="2rem" />
            <p>
              Buket Akdol İstanbul Üniversitesi’nde Uluslararası İlişkiler ve
              İktisat lisansı, İşletme masterı ve Yönetim Organizasyon doktora
              derecesini tamamlamıştır. İlk ve orta öğretim yıllarında Latin
              Amerikan dansları ve Halk oyunlarıyla ilgilenmiş, üniversite
              yıllarında profesyonel dansçı olarak sahne performansları
              gerçekleştirmeye başlamıştır. 2004 yılından itibaren Arjantin
              tango dalında uzmanlaşmıştır. Türkiye Dans Sporları Federasyonu
              antrenörü, hakemi, eğitim kurulu ve hakem kurulu üyesidir. 2012
              yılında Buenos Aires’te yapılan Dünya Şampiyonası’nda finalist
              olmuştur. Arjantin hükümeti tarafından düzenlenen ve dünyanın en
              prestijli tango yarışması olarak görülen bu yarışmada bugüne kadar
              finale yükselebilen ilk ve tek Türk dansçıdır.
            </p>
          </div>
        </div>
      </Container>
      <style jsx>{`
        .wrapper {
          display: grid;
          grid-template-columns: 1fr;
          row-gap: 1rem;
        }
        .sidebar {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: max-content;
          row-gap: 2rem;
        }
        .image {
          position: relative;
          width: 80%;
          overflow: hidden;
          aspect-ratio: 1 / 1;
          justify-self: center;
          // border-radius: 9999px;
        }
        @media screen and (min-width: 640px) {
          .wrapper {
            display: grid;
            grid-template-columns: 1fr 3fr;
            column-gap: 2rem;
          }
          .image {
            position: relative;
            width: 100%;
            aspect-ratio: 1 / 1;
          }
        }
      `}</style>
    </>
  );
}

export default About;
