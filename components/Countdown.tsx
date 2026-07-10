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
    <section className="bg-cream-50 px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-gold-600">Тойға дейін</p>
        <FlourishDivider className="mx-auto my-5 text-gold-400" />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {UNITS.map((unit) => (
            <div
              key={unit.key}
              className="glass-panel flex min-h-[140px] flex-col items-center justify-center gap-2 rounded-3xl px-4 py-6"
            >
              <span className="font-serif text-4xl font-semibold tracking-[0.02em] text-gold-800 tabular-nums sm:text-5xl">
                {String(timeLeft ? timeLeft[unit.key] : 0).padStart(2, '0')}
              </span>
              <span className="text-xs uppercase tracking-[0.35em] text-gold-700 sm:text-sm">
                {unit.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
