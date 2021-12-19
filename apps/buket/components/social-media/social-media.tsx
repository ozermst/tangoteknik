import { socialMedia } from '../../data/data';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
/* eslint-disable-next-line */
export interface SocialMediaProps {
  name: string;
  icon: string;
}

export function SocialMedia({ name, icon }: SocialMediaProps) {
  return (
    <>
      <div>
        <ul>
          {socialMedia
            .filter((media) => media.name == name)
            .map((media) => (
              <li key={media.id}>
                <a href={media.url} target="_blank" rel="noreferrer">
                  <ul className="iconWithText">
                    {icon == 'on' ? (
                      <li className="icon">
                        {media.name == 'instagram' ? (
                          <FaInstagram />
                        ) : (
                          <FaYoutube />
                        )}
                      </li>
                    ) : null}
                    <li>{media.name}</li>
                  </ul>
                </a>
              </li>
            ))}
        </ul>
      </div>
      <style jsx>{`
        .iconWithText {
          display: flex;
          align-items: center;
        }
        .icon {
          margin-right: 0.3rem;
        }
      `}</style>
    </>
  );
}

export default SocialMedia;
