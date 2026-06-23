import { EVENT_DAY, EVENT_MONTH, EVENT_YEAR } from '@/lib/event';
import { FlourishDivider } from './Ornaments';

const WEEKDAY_LABELS = ['Дс', 'Сс', 'Ср', 'Бс', 'Жм', 'Сб', 'Жс'];
const MONTH_NAMES = [
  'Қаңтар', 'Ақпан', 'Наурыз', 'Сәуір', 'Мамыр', 'Маусым',
  'Шілде', 'Тамыз', 'Қыркүйек', 'Қазан', 'Қараша', 'Желтоқсан',
];

function buildCalendarGrid(year: number, month: number): (number | null)[] {
  const firstDay = new Date(year, month - 1, 1);
  const daysInMonth = new Date(year, month, 0).getDate();

  const mondayBasedFirstWeekday = (firstDay.getDay() + 6) % 7;

  const cells: (number | null)[] = [];
  for (let i = 0; i < mondayBasedFirstWeekday; i++) cells.push(null);
  for (let day = 1; day <= daysInMonth; day++) cells.push(day);
  while (cells.length % 7 !== 0) cells.push(null);

  return cells;
}

export default function CalendarBlock() {
  const cells = buildCalendarGrid(EVENT_YEAR, EVENT_MONTH);

  return (
    <section className="bg-cream-50 px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-md text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-gold-600">Мерекелік күн</p>
        <FlourishDivider className="my-5 text-gold-400" />

        <h3 className="font-serif text-2xl text-gold-800">
          {MONTH_NAMES[EVENT_MONTH - 1]} {EVENT_YEAR}
        </h3>

        <div className="ornament-border mt-6 rounded-2xl bg-cream-100/70 p-4 shadow-sm shadow-gold-900/5 sm:p-6">
          <div className="grid grid-cols-7 gap-1 text-[11px] uppercase tracking-wide text-gold-500 sm:text-xs">
            {WEEKDAY_LABELS.map((label) => (
              <div key={label} className="py-2 font-medium">
                {label}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {cells.map((day, idx) => {
              const isEventDay = day === EVENT_DAY;
              return (
                <div
                  key={idx}
                  className="flex aspect-square items-center justify-center text-sm sm:text-base"
                >
                  {day && (
                    <span
                      className={
                        isEventDay
                          ? 'flex h-8 w-8 items-center justify-center rounded-full bg-gold-gradient font-semibold text-cream-50 shadow shadow-gold-700/40 sm:h-10 sm:w-10'
                          : 'flex h-8 w-8 items-center justify-center text-gold-700 sm:h-10 sm:w-10'
                      }
                    >
                      {day}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
