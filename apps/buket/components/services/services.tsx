import Image from 'next/image';
import Container from '../container/container';
import { ourServices } from '../../data/data';
/* eslint-disable-next-line */
export interface ServicesProps {}

export function Services(props: ServicesProps) {
  return (
    <>
      <Container>
        <div className="services">
          {ourServices.map((service) => (
            <div className="service" key={service.id}>
              <div className="image">
                <Image
                  src={service.imageUrl}
                  alt="Our services"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="title">{service.title}</div>
              <div>{service.description}</div>
            </div>
          ))}
        </div>
      </Container>
      <style jsx>{`
        .services {
          display: grid;
          grid-template-columns: 1fr;
          row-gap: 1rem;
        }
        .service {
          height: 100%;
        }
        .image {
          position: relative;
          height: 300px;
        }
        @media screen and (min-width: 640px) {
          .services {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            column-gap: 1rem;
            align-items: stretch;
            justify-items: center;
          }
        }
      `}</style>
    </>
  );
}

export default Services;
