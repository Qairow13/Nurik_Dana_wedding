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
    <section className="bg-cream-50 px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-lg">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-gold-600">Жауап беру</p>
          <FlourishDivider className="mx-auto my-5 h-6 w-40 text-gold-400" />
          <h3 className="font-serif text-3xl font-semibold text-gold-900 sm:text-4xl">Тойға келесіз бе?</h3>
        </div>

        <div className="glass-panel mt-8 rounded-[28px] border border-gold-100 p-6 shadow-soft sm:p-8">
          {submitted ? (
            <div className="flex flex-col items-center py-6 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient text-cream-50 shadow-lg shadow-gold-700/20">
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <p className="mt-4 font-serif text-xl text-gold-800">Жауабыңыз қабылданды!</p>
              <p className="mt-2 text-sm text-gold-700">Уақыт бөліп жауап бергеніңізге рахмет.</p>
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
                  className="w-full rounded-[20px] border border-gold-200 bg-white/90 px-4 py-3 text-gold-900 outline-none transition focus:border-gold-400 focus:ring-2 focus:ring-gold-200"
                />
              </div>

              <div>
                <p className="mb-4 text-sm font-medium text-gold-700">Тойға келесіз бе?</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={() => setStatus('yes')}
                    className={`w-full rounded-[20px] border px-4 py-3 text-sm font-semibold transition ${
                      status === 'yes'
                        ? 'border-gold-500 bg-gold-gradient text-cream-50 shadow-lg shadow-gold-700/20'
                        : 'border-gold-200 bg-white/90 text-gold-700 hover:bg-cream-100'
                    }`}
                  >
                    Әрине, келемін ☺️
                  </button>
                  <button
                    type="button"
                    onClick={() => setStatus('no')}
                    className={`w-full rounded-[20px] border px-4 py-3 text-sm font-semibold transition ${
                      status === 'no'
                        ? 'border-gold-600 bg-gold-800 text-cream-50 shadow-lg shadow-gold-900/20'
                        : 'border-gold-200 bg-white/90 text-gold-700 hover:bg-cream-100'
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
                className="w-full rounded-[20px] bg-gold-gradient py-3 text-sm font-semibold uppercase tracking-[0.22em] text-cream-50 shadow-lg shadow-gold-700/20 transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
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
