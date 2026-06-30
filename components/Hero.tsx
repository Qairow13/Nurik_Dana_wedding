import { FlourishDivider } from './Ornaments';
import { EVENT_DATE_LABEL } from '@/lib/event';

export default function Hero() {
  return (
    <section className="relative flex min-h-[100vh] items-center justify-center overflow-hidden bg-gold-gradient">
      <div className="pointer-events-none absolute inset-3 border border-[#4A3520]/30 sm:inset-6" />

      <div className="relative z-10 mx-auto flex flex-col items-center px-6 text-center text-[#4A3520]">
        <p className="animate-fadeIn text-xs uppercase tracking-[0.35em] sm:text-sm">
          Үйлену тойы
        </p>

        <h1 className="animate-fadeIn animate-delay-100 mt-4 font-serif text-4xl font-medium sm:text-6xl">
          Той салтанаты
        </h1>

        <div className="animate-fadeIn animate-delay-200 mt-6 flex items-center gap-3 font-serif text-2xl sm:gap-5 sm:text-4xl">
          <span>Нұрқанат</span>
          <span>&amp;</span>
          <span>Дана</span>
        </div>

        <FlourishDivider className="animate-fadeIn animate-delay-300 mt-6 text-[#4A3520]" />

        <p className="animate-fadeIn animate-delay-400 mt-5 text-sm uppercase tracking-[0.25em] sm:text-base">
          {EVENT_DATE_LABEL}
        </p>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 animate-float text-[#4A3520]/70">
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 4v15M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
