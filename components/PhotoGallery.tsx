'use client';

import { useState } from 'react';
import { FlourishDivider } from './Ornaments';

const photos = [
  {
    src: '/images/gallery-1.jpg',
    alt: 'Жас жұбайлардың романтикалық суреті 1',
  },
  {
    src: '/images/gallery-2.jpg',
    alt: 'Жас жұбайлардың романтикалық суреті 2',
  },
];

export default function PhotoGallery() {
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  return (
    <section className="bg-cream-50 px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-gold-600">Фото галерея</p>
        <FlourishDivider className="mx-auto my-5 text-gold-400" />
        <h2 className="font-serif text-3xl font-semibold text-gold-900 sm:text-4xl">
          Бізбен бірге есте қалар сәттер.
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {photos.map((photo) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => setActivePhoto(photo.src)}
              className="group overflow-hidden rounded-[28px] border border-gold-100 bg-white shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-glass"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="h-80 w-full object-cover object-center transition duration-500 group-hover:scale-105"
              />
              <div className="bg-gradient-to-t from-black/30 to-transparent px-4 py-4 text-left text-sm text-cream-50">
                <span className="font-medium">Жады</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setActivePhoto(null)}
        >
          <button
            type="button"
            aria-label="Жабу"
            className="absolute right-6 top-6 rounded-full bg-white/95 px-3 py-2 text-sm font-semibold text-gold-900 shadow-lg"
          >
            Жабу
          </button>
          <img
            src={activePhoto}
            alt="Толық экранда сурет"
            className="max-h-[90vh] max-w-full rounded-[24px] object-cover shadow-soft"
          />
        </div>
      )}
    </section>
  );
}
