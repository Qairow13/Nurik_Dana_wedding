import { HOSTS } from '@/lib/hosts';
import { FlourishDivider } from './Ornaments';

export default function HostsBlock() {
  return (
    <section className="bg-cream-50 px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-gold-600">Той иелері</p>
        <FlourishDivider className="my-5 text-gold-400" />

        <div className="ornament-border mx-auto max-w-sm rounded-2xl bg-cream-100/60 px-6 py-8 shadow-sm shadow-gold-900/5">
          {HOSTS.map((name, index) => (
            <p
              key={name}
              className={
                index === 0
                  ? 'font-serif text-lg text-gold-800 sm:text-xl'
                  : 'mt-3 border-t border-gold-200 pt-3 font-serif text-lg text-gold-800 sm:text-xl'
              }
            >
              {name}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
