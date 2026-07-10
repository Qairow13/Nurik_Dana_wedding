import { FlourishDivider } from './Ornaments';
import {
  VENUE_2GIS_URL,
  VENUE_ADDRESS,
  VENUE_GOOGLE_MAPS_URL,
  VENUE_NAME,
  VENUE_TIME,
} from '@/lib/venue';

export default function LocationBlock() {
  return (
    <section className="bg-cream-50 px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-gold-600">Мекен-жайымыз</p>
          <FlourishDivider className="mx-auto my-5 text-gold-400" />
        </div>

        <div className="glass-panel rounded-[28px] border border-gold-100 px-6 py-10 shadow-soft sm:px-10">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gold-100 text-gold-700 shadow-sm">
              <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
              </svg>
            </div>

            <div className="space-y-3 text-center">
              <h3 className="font-serif text-3xl font-semibold text-gold-900 sm:text-4xl">{VENUE_NAME}</h3>
              <p className="text-base text-gold-700">{VENUE_ADDRESS}</p>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-gold-600 sm:text-base">
                Басталу уақыты: {VENUE_TIME}
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <a
              href={VENUE_2GIS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl bg-[rgba(212,169,79,0.07)] px-5 py-3 text-sm font-semibold text-gold-800 transition hover:bg-[rgba(212,169,79,0.12)]"
            >
              2GIS-тен қарау
            </a>
            <a
              href={VENUE_GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl bg-gold-gradient px-5 py-3 text-sm font-semibold text-cream-50 transition hover:opacity-95"
            >
              Google Maps-тен қарау
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
