import { emails } from '../../data/data';
import { FaEnvelope } from 'react-icons/fa';
/* eslint-disable-next-line */
export interface EmailProps {
  name: string;
  icon: string;
}

export function Email({ name, icon }: EmailProps) {
  return (
    <>
      <div>
        <ul>
          {emails
            .filter((email) => email.name == name)
            .map((email) => (
              <li key={email.id}>
                <a href="mailto:{email.email}" target="_blank" rel="noreferrer">
                  <ul className="iconWithText">
                    {icon == 'on' ? (
                      <li className="icon">
                        <FaEnvelope />
                      </li>
                    ) : null}
                    <li>{email.email}</li>
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

export default Email;
