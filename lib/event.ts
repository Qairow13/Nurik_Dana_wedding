// Бір жерден басқару: той күні/уақыты осында өзгертіледі.
// Бұл мән Countdown, EventDetails және CalendarBlock компоненттерінде қолданылады.
export const EVENT_DATE_ISO = '2026-08-23T17:00:00+05:00';
export const EVENT_YEAR = 2026;
export const EVENT_MONTH = 8; // тамыз (1-12)
export const EVENT_DAY = 23;

export const EVENT_DATE_LABEL = '23 тамыз 2026';
export const EVENT_TIME_LABEL = '17:00';

export const KAZAKH_WEEKDAYS = [
  'Жексенбі',
  'Дүйсенбі',
  'Сейсенбі',
  'Сәрсенбі',
  'Бейсенбі',
  'Жұма',
  'Сенбі',
];

export function getEventWeekday(): string {
  const date = new Date(EVENT_DATE_ISO);
  return KAZAKH_WEEKDAYS[date.getDay()];
}
