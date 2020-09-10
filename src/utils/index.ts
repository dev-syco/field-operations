import TDate from '@/services/fieldService/models/TDate';
import moment, { Moment } from 'moment';

export function transformTDatToMoment(tDate: TDate): Moment {
  const { day, month, year } = tDate || {};
  return (day && month && year && moment(new Date(`${year}-${month}-${day}`))) || moment();
}

export function transformMomentToTDate(date: Moment): TDate {
  return new TDate({
    day: date.date(),
    month: date.month() + 1,
    year: date.year(),
  });
}

export default {};
