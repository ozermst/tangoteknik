import { parseISO, format } from 'date-fns';
import { tr } from 'date-fns/locale';
/* eslint-disable-next-line */
export interface DateProps {
  dateString: string;
}

export function Date({ dateString }: DateProps) {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>
      {format(date, 'LLLL	d, yyyy', { locale: tr })}
    </time>
  );
}

export default Date;
