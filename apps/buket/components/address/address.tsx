import { addresses } from '../../data/data';
/* eslint-disable-next-line */
export interface AddressProps {
  name: string;
}

export function Address({ name }: AddressProps) {
  return (
    <>
      <div>
        {addresses
          .filter((address) => address.name == name)
          .map((address) => (
            <ul key={address.id}>
              <li>{address.street1}</li>
              <li>{address.street2}</li>
              <li>{address.street3}</li>
              <li>{address.postalCode}</li>
              <li>{address.district}</li>
              <li>{address.city}</li>
            </ul>
          ))}
      </div>
      <style jsx>{``}</style>
    </>
  );
}

export default Address;
