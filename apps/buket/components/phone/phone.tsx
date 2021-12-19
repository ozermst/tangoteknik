import { phones } from '../../data/data';
import { FaPhoneSquareAlt } from 'react-icons/fa';
/* eslint-disable-next-line */
export interface PhoneProps {
  name: string;
  icon: string;
}

export function Phone({ name, icon }: PhoneProps) {
  return (
    <>
      <div>
        <ul>
          {phones
            .filter((phone) => phone.name == name)
            .map((phone) => (
              <li key={phone.id}>
                <a href="mailto:{email.email}" target="_blank" rel="noreferrer">
                  <ul className="iconWithText">
                    {icon == 'on' ? (
                      <li className="icon">
                        <FaPhoneSquareAlt />
                      </li>
                    ) : null}
                    <li>{phone.phone}</li>
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

export default Phone;
