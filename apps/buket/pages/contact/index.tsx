import Image from 'next/image';
import Container from '../../components/container/container';
import Address from '../../components/address/address';
import Phone from '../../components/phone/phone';
import Email from '../../components/email/email';
import SocialMedia from '../../components/social-media/social-media';
import { BUKET_PROFILE_PHOTO_URL } from '../../lib/constants';
/* eslint-disable-next-line */
export interface ContactProps {}

export function Contact(props: ContactProps) {
  return (
    <>
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
          <div className="content">
            <iframe
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1505.6862367096228!2d29.041463000000004!3d40.99522!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x58aabbe3a3b12115!2zR8O8cmF5IMSwxZ8gSGFuxLE!5e0!3m2!1sen!2str!4v1636901720722!5m2!1sen!2str"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </Container>
      <style jsx>{`
        .wrapper {
          display: grid;
          grid-template-columns: 1fr;
          row-gap: 1rem;
          /*    max-width: 60rem;
          margin-left: auto;
          margin-right: auto; */
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
        .map {
          width: 100%;
          height: 100%;
          aspect-ratio: 16 / 9;
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

export default Contact;
