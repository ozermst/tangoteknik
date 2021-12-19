import Image from 'next/image';
import Container from '../../components/container/container';
import Address from '../../components/address/address';
import Phone from '../../components/phone/phone';
import Email from '../../components/email/email';
import SocialMedia from '../../components/social-media/social-media';
import { PROFILE_IMAGE_URL } from '../../lib/constants';
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
                src={PROFILE_IMAGE_URL}
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193386.58269556295!2d29.828910209289944!3d40.76938447932576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb4f821ffdb3f1%3A0x5b3ad356597f9b33!2zxLB6ZMO8xZ_DvG0gUHNpa29sb2ppayBEYW7EscWfbWFubMSxayBNZXJrZXpp!5e0!3m2!1sen!2str!4v1638567496533!5m2!1sen!2str"
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
