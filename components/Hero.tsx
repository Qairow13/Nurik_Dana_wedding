'use client';
import { useEffect, useMemo, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react';
import { FlourishDivider } from './Ornaments';
import { EVENT_DATE_LABEL } from '@/lib/event';

function HeroMusicButton() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [position, setPosition] = useState({ x: 16, y: 20 });
  const dragRef = useRef<{ startX: number; startY: number; originX: number; originY: number } | null>(null);

  const buttonStyle = useMemo(
    () => ({
      transform: `translate(${position.x}px, ${position.y}px)`,
    }),
    [position]
  );

  useEffect(() => {
    const syncMobile = () => setIsMobile(window.matchMedia('(max-width: 767px)').matches);
    syncMobile();
    window.addEventListener('resize', syncMobile);
    return () => window.removeEventListener('resize', syncMobile);
  }, []);

  useEffect(() => {
    const handleStateChange = (event: Event) => {
      const custom = event as CustomEvent<{ isPlaying: boolean }>;
      setIsPlaying(Boolean(custom.detail?.isPlaying));
    };

    const handleScroll = () => {
      const section = document.getElementById('hero-section');
      if (!section) return;
      const rect = section.getBoundingClientRect();
      setVisible(rect.bottom > 0 && rect.top < window.innerHeight);
    };

    window.addEventListener('music-state-change', handleStateChange);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    window.dispatchEvent(new Event('music-state-request'));

    return () => {
      window.removeEventListener('music-state-change', handleStateChange);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

  const handleToggle = () => {
    if (dragRef.current) return;
    window.dispatchEvent(new Event('music-toggle'));
    setIsPlaying((current) => !current);
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLButtonElement>) => {
    if (!isMobile) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    const hero = document.getElementById('hero-section');
    if (!hero) return;
    const rect = hero.getBoundingClientRect();
    dragRef.current = {
      startX: event.clientX,
      startY: event.clientY,
      originX: position.x,
      originY: position.y,
    };

    const handleMove = (moveEvent: PointerEvent) => {
      if (!dragRef.current) return;
      const deltaX = moveEvent.clientX - dragRef.current.startX;
      const deltaY = moveEvent.clientY - dragRef.current.startY;
      const maxX = rect.width - 64 - 16;
      const maxY = rect.height - 64 - 16;
      setPosition({
        x: clamp(dragRef.current.originX + deltaX, 16, maxX),
        y: clamp(dragRef.current.originY + deltaY, 16, maxY),
      });
    };

    const handleUp = () => {
      dragRef.current = null;
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('pointerup', handleUp);
    };

    window.addEventListener('pointermove', handleMove);
    window.addEventListener('pointerup', handleUp);
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={handleToggle}
      onPointerDown={handlePointerDown}
      aria-label={isPlaying ? 'Әуенді тоқтату' : 'Әуенді ойнату'}
      className="glass-button absolute top-6 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full border border-white/70 text-gold-700 shadow-xl transition duration-300 ease-out hover:-translate-y-0.5 active:scale-95 sm:static sm:translate-y-0"
      style={buttonStyle}
    >
      <span className="text-2xl leading-none transition-all duration-300">
        {isPlaying ? '⏸' : '▶'}
      </span>
    </button>
  );
}

export default function Hero() {
  return (
    <section id="hero-section" className="relative min-h-[100dvh] overflow-hidden bg-cream-50 px-6 pt-[env(safe-area-inset-top,1rem)]">
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt="Жас жұбайлардың суреті"
          className="h-full w-full object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.42),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(212,169,79,0.18),_transparent_30%)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-6xl flex-col items-center justify-center text-center text-[#4a3520]">
        <HeroMusicButton />
        <div className="glass-panel w-full max-w-3xl rounded-[28px] border border-white/70 px-6 py-10 shadow-soft backdrop-blur-xl sm:px-12 sm:py-14">
          <p className="animate-fadeScale text-xs uppercase tracking-[0.35em] text-gold-700/80 sm:text-sm">
            Үйлену тойы
          </p>

          <h1 className="animate-fadeScale animate-delay-100 mt-5 font-serif text-[clamp(2.75rem,6vw,4.75rem)] font-semibold leading-tight text-[#4a3520]">
            Нұрқанат &amp; Дана
          </h1>

          <div className="animate-fadeScale animate-delay-200 mt-6 flex flex-wrap justify-center gap-3 text-2xl text-[#4a3520] sm:gap-5 sm:text-4xl">
            <span className="inline-flex items-center gap-2">Жүректерін қосқан күні</span>
          </div>

          <FlourishDivider className="animate-fadeScale animate-delay-300 mx-auto mt-8 text-gold-500" />

          <p className="animate-fadeScale animate-delay-400 mt-6 text-sm uppercase tracking-[0.30em] text-gold-700 sm:text-base">
            {EVENT_DATE_LABEL}
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10">
        <svg viewBox="0 0 1440 120" className="h-24 w-full" preserveAspectRatio="none">
          <path d="M0 16C180 48 360 96 540 76C720 56 900 12 1080 20C1260 28 1440 60 1440 60V120H0V16Z" fill="rgba(255, 255, 250, 0.95)" />
        </svg>
      </div>
    </section>
  );
}
