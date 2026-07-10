import { HOSTS } from '@/lib/hosts';
import { FlourishDivider } from './Ornaments';

export default function HostsBlock() {
  return (
    <section className="bg-cream-50 px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-gold-600">Той иелері</p>
        <FlourishDivider className="mx-auto my-5 text-gold-400" />

        <div className="glass-panel mx-auto max-w-3xl rounded-[28px] border border-gold-100 px-6 py-10 shadow-soft sm:px-10">
          <div className="space-y-4 text-left">
            {HOSTS.map((name, index) => (
              <p
                key={name}
                className={`font-serif text-lg text-gold-800 sm:text-xl ${index > 0 ? 'border-t border-gold-100 pt-4' : ''}`}
              >
                {name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
