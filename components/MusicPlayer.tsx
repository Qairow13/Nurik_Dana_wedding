'use client';

import { useEffect, useRef, useState } from 'react';

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const tryAutoplay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    };
    tryAutoplay();
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  return (
    <div className="fixed top-3 left-1/2 z-50 -translate-x-1/2">
      <audio ref={audioRef} src="/music/wedding.mp3" loop preload="auto" />
      <button
        onClick={toggle}
        aria-label={isPlaying ? 'Әуенді тоқтату' : 'Әуенді ойнату'}
        className="flex items-center gap-2 rounded-full border border-gold-300/70 bg-cream-50/90 px-3 py-1.5 shadow-md shadow-gold-900/10 backdrop-blur-sm transition hover:bg-cream-100"
      >
        <span
          className={`relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-gradient text-cream-50 ${
            isPlaying ? 'animate-[spin_4s_linear_infinite]' : ''
          }`}
        >
          {isPlaying ? (
            <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor">
              <rect x="5" y="4" width="4" height="16" rx="1" />
              <rect x="15" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor">
              <path d="M6 4l14 8-14 8V4z" />
            </svg>
          )}
        </span>
        <span className="max-w-[160px] overflow-hidden whitespace-nowrap text-[10px] font-medium uppercase tracking-wider text-gold-700 sm:max-w-none">
          Той әуені • {isPlaying ? 'Тоқтату' : 'Ойнату'} • Тыңдаңыз
        </span>
      </button>
    </div>
  );
}
