'use client';

import { useEffect, useState } from 'react';
import { EVENT_DATE_ISO } from '@/lib/event';
import { FlourishDivider } from './Ornaments';

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(): TimeLeft {
  const diff = new Date(EVENT_DATE_ISO).getTime() - Date.now();
  const total = Math.max(diff, 0);

  return {
    days: Math.floor(total / (1000 * 60 * 60 * 24)),
    hours: Math.floor((total / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((total / (1000 * 60)) % 60),
    seconds: Math.floor((total / 1000) % 60),
  };
}

const UNITS: { key: keyof TimeLeft; label: string }[] = [
  { key: 'days', label: 'күн' },
  { key: 'hours', label: 'сағат' },
  { key: 'minutes', label: 'минут' },
  { key: 'seconds', label: 'секунд' },
];

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-cream-100 px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-gold-600">Тойға дейін</p>
        <FlourishDivider className="my-5 text-gold-400" />

        <div className="grid grid-cols-4 gap-2 sm:gap-5">
          {UNITS.map((unit) => (
            <div
              key={unit.key}
              className="ornament-border flex flex-col items-center rounded-xl bg-cream-50 py-4 shadow-sm shadow-gold-900/5 sm:py-6"
            >
              <span className="font-serif text-3xl text-gold-700 tabular-nums sm:text-5xl">
                {String(timeLeft ? timeLeft[unit.key] : 0).padStart(2, '0')}
              </span>
              <span className="mt-1 text-[10px] uppercase tracking-wider text-gold-500 sm:text-xs">
                {unit.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
