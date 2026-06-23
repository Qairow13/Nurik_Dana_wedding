import { FlourishDivider } from './Ornaments';
import { VENUE_2GIS_URL, VENUE_ADDRESS, VENUE_GOOGLE_MAPS_URL, VENUE_NAME } from '@/lib/venue';

export default function LocationBlock() {
  return (
    <section className="bg-cream-100 px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-gold-600">Мекен-жайымыз</p>
        <FlourishDivider className="my-5 text-gold-400" />

        <div className="ornament-border rounded-2xl bg-cream-50 px-6 py-10 shadow-sm shadow-gold-900/5 sm:px-10">
          <svg viewBox="0 0 24 24" className="mx-auto h-9 w-9 text-gold-500" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
          </svg>

          <h3 className="mt-4 font-serif text-2xl text-gold-800">{VENUE_NAME}</h3>
          <p className="mt-2 text-sm text-gold-700 sm:text-base">{VENUE_ADDRESS}</p>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={VENUE_2GIS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gold-400 px-5 py-2 text-sm font-medium text-gold-700 transition hover:bg-gold-400 hover:text-cream-50"
            >
              2GIS-тен қарау
            </a>
            <a
              href={VENUE_GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gold-gradient px-5 py-2 text-sm font-medium text-cream-50 shadow shadow-gold-700/30 transition hover:opacity-90"
            >
              Google Maps-тен қарау
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
