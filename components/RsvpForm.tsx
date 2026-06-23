'use client';

import { FormEvent, useState } from 'react';
import { FlourishDivider } from './Ornaments';

type Status = 'yes' | 'no';

export default function RsvpForm() {
  const [name, setName] = useState('');
  const [status, setStatus] = useState<Status | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !status) {
      setError('Аты-жөніңізді жазып, жауабыңызды таңдаңыз.');
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), status }),
      });

      if (!res.ok) throw new Error('request_failed');

      setSubmitted(true);
    } catch {
      setError('Жіберу кезінде қате пайда болды. Қайталап көріңіз.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-gold-gradient px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-lg">
        <div className="text-center text-cream-50">
          <p className="text-xs uppercase tracking-[0.35em]">Жауап беру</p>
          <FlourishDivider className="my-5 text-cream-50/80" />
          <h3 className="font-serif text-2xl sm:text-3xl">Тойға келесіз бе?</h3>
        </div>

        <div className="mt-8 rounded-2xl bg-cream-50 p-6 shadow-lg shadow-gold-900/15 sm:p-8">
          {submitted ? (
            <div className="flex flex-col items-center py-6 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient text-cream-50">
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <p className="mt-4 font-serif text-xl text-gold-800">Жауабыңыз қабылданды!</p>
              <p className="mt-2 text-sm text-gold-600">Уақыт бөліп жауап бергеніңізге рахмет.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gold-700">
                  Аты-жөніңіз
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Аты-жөніңізді жазыңыз"
                  className="w-full rounded-xl border border-gold-300/70 bg-cream-50 px-4 py-2.5 text-gold-900 outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-300"
                />
              </div>

              <div>
                <p className="mb-2 text-sm font-medium text-gold-700">Тойға келесіз бе?</p>
                <div className="flex flex-col gap-2.5 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => setStatus('yes')}
                    className={`flex-1 rounded-xl border px-4 py-2.5 text-sm font-medium transition ${
                      status === 'yes'
                        ? 'border-gold-500 bg-gold-gradient text-cream-50 shadow shadow-gold-700/30'
                        : 'border-gold-300/70 text-gold-700 hover:bg-cream-100'
                    }`}
                  >
                    Әрине, келемін ☺️
                  </button>
                  <button
                    type="button"
                    onClick={() => setStatus('no')}
                    className={`flex-1 rounded-xl border px-4 py-2.5 text-sm font-medium transition ${
                      status === 'no'
                        ? 'border-gold-600 bg-gold-800 text-cream-50 shadow shadow-gold-900/30'
                        : 'border-gold-300/70 text-gold-700 hover:bg-cream-100'
                    }`}
                  >
                    Өкінішке орай, келе алмаймын 😔
                  </button>
                </div>
              </div>

              {error && <p className="text-sm text-red-600">{error}</p>}

              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-xl bg-gold-gradient py-3 text-sm font-semibold uppercase tracking-wide text-cream-50 shadow shadow-gold-700/30 transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? 'Жіберілуде...' : 'Жауапты жіберу'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
