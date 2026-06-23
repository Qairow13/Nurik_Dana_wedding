import { HOSTS } from '@/lib/hosts';
import { FlourishDivider } from './Ornaments';

export default function HostsBlock() {
  return (
    <section className="bg-cream-50 px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-gold-600">Той иелері</p>
        <FlourishDivider className="my-5 text-gold-400" />

        <div className="grid gap-6 sm:grid-cols-2">
          {HOSTS.map((host) => (
            <div
              key={host.role}
              className="ornament-border rounded-2xl bg-cream-100/60 px-6 py-8 shadow-sm shadow-gold-900/5"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-gold-500">{host.role}</p>
              <p className="mt-3 font-serif text-lg text-gold-800 sm:text-xl">{host.names}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
