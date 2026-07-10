'use client';

import { useEffect, useRef, useState } from 'react';

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const dispatchState = (playing: boolean) => {
      setIsPlaying(playing);
      window.dispatchEvent(new CustomEvent('music-state-change', { detail: { isPlaying: playing } }));
    };

    const handlePlay = () => dispatchState(true);
    const handlePause = () => dispatchState(false);
    const handleEnded = () => dispatchState(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);

    const tryAutoplay = async () => {
      try {
        await audio.play();
      } catch {
        dispatchState(false);
      }
    };

    tryAutoplay();

    const toggleListener = () => {
      if (!audio) return;
      if (audio.paused) {
        audio.play().catch(() => {});
      } else {
        audio.pause();
      }
    };

    const requestListener = () => {
      window.dispatchEvent(new CustomEvent('music-state-change', { detail: { isPlaying: !audio.paused } }));
    };

    window.addEventListener('music-toggle', toggleListener);
    window.addEventListener('music-state-request', requestListener);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
      window.removeEventListener('music-toggle', toggleListener);
      window.removeEventListener('music-state-request', requestListener);
    };
  }, []);

  return <audio ref={audioRef} src="/music/wedding.mp3" loop preload="auto" />;
}
