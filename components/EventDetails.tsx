import { FlourishDivider } from './Ornaments';
import { EVENT_DAY, EVENT_TIME_LABEL, EVENT_YEAR, getEventWeekday } from '@/lib/event';

export default function EventDetails() {
  const weekday = getEventWeekday();

  return (
    <section className="relative bg-gold-gradient px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl text-center text-cream-50">
        <p className="text-xs uppercase tracking-[0.35em] text-cream-50/90">Той салтанаты</p>
        <FlourishDivider className="my-5 text-cream-50/80" />

        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10">
          <div className="flex flex-col items-center">
            <span className="font-serif text-6xl leading-none sm:text-7xl">{EVENT_DAY}</span>
            <span className="mt-1 text-sm uppercase tracking-[0.3em]">тамыз</span>
          </div>

          <div className="hidden h-16 w-px bg-cream-50/50 sm:block" />

          <div className="flex flex-col items-center text-center">
            <span className="font-serif text-3xl sm:text-4xl">{EVENT_YEAR}</span>
            <span className="mt-1 text-sm uppercase tracking-[0.3em]">{weekday}</span>
          </div>

          <div className="hidden h-16 w-px bg-cream-50/50 sm:block" />

          <div className="flex flex-col items-center">
            <span className="font-serif text-4xl sm:text-5xl">{EVENT_TIME_LABEL}</span>
            <span className="mt-1 text-sm uppercase tracking-[0.3em]">басталу уақыты</span>
          </div>
        </div>
      </div>
    </section>
  );
}
