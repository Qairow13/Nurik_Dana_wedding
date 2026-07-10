import { FlourishDivider } from './Ornaments';
import { EVENT_DAY, EVENT_TIME_LABEL, EVENT_YEAR, getEventWeekday } from '@/lib/event';

export default function EventDetails() {
  const weekday = getEventWeekday();

  return (
    <section className="bg-[radial-gradient(circle_at_top,_rgba(212,169,79,0.12),transparent_30%),linear-gradient(180deg,#fff9f1,#f6ead3)] px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-gold-700">Той салтанаты</p>
        <FlourishDivider className="mx-auto my-5 text-gold-400" />

        <div className="glass-panel mx-auto flex max-w-4xl flex-col gap-6 rounded-[28px] border border-gold-100 px-6 py-10 text-[#4a3520] shadow-soft sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <div className="space-y-2 text-center sm:text-left">
            <p className="text-xs uppercase tracking-[0.30em] text-gold-600">күні</p>
            <p className="font-serif text-6xl font-semibold sm:text-7xl">{EVENT_DAY}</p>
          </div>

          <div className="hidden h-24 w-px bg-gold-100/80 sm:block" />

          <div className="space-y-2 text-center sm:text-left">
            <p className="text-xs uppercase tracking-[0.30em] text-gold-600">күн</p>
            <p className="font-serif text-3xl font-semibold sm:text-4xl">{EVENT_YEAR}</p>
            <p className="text-sm uppercase tracking-[0.25em] text-gold-700">{weekday}</p>
          </div>

          <div className="hidden h-24 w-px bg-gold-100/80 sm:block" />

          <div className="space-y-2 text-center sm:text-left">
            <p className="text-xs uppercase tracking-[0.30em] text-gold-600">уақыты</p>
            <p className="font-serif text-4xl font-semibold sm:text-5xl">{EVENT_TIME_LABEL}</p>
            <p className="text-sm uppercase tracking-[0.25em] text-gold-700">басталу уақыты</p>
          </div>
        </div>
      </div>
    </section>
  );
}
