import { FlourishDivider } from './Ornaments';

export default function Greeting() {
  return (
    <section className="relative bg-cream-50 px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div className="space-y-6 text-center lg:text-left">
            <p className="text-xs uppercase tracking-[0.35em] text-gold-600">Тарихымыз</p>
            <FlourishDivider className="mx-auto h-6 w-40 text-gold-400 lg:mx-0" />

            <h2 className="font-serif text-3xl font-semibold text-gold-900 sm:text-4xl lg:text-5xl">
              Бірге бастаған жолымыз — мәңгілікке жалғасатын әдемі ертегі.
            </h2>

            <div className="space-y-4 text-base leading-8 text-gold-800 sm:text-lg">
              <p>
                Бізде әрбір сәттің өз әуені, өз иісі, өз күтімі бар. Нұрқанат пен Дананың есімі
                бірге аталғанда, әрбір өмірлік әңгіме ерекше жылылықта жалғасады.
              </p>
              <p>
                Қазір сол ерекше сәтті сіздермен бөлісіп, бірге тойлауымызға шақырамыз.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-[28px] border border-gold-100 bg-cream-50 shadow-soft transition hover:-translate-y-1 hover:shadow-glass">
            <img
              src="/images/story.jpg"
              alt="Жас жұбайлардың тарихы"
              className="h-full w-full min-h-[320px] object-cover object-center transition duration-500 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
