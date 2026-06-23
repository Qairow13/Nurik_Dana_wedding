import { CornerOrnament, FlourishDivider } from './Ornaments';

export default function Greeting() {
  return (
    <section className="relative bg-cream-50 px-6 py-16 sm:py-24">
      <div className="relative mx-auto max-w-2xl">
        <CornerOrnament className="absolute -left-2 -top-2 h-12 w-12 text-gold-400 sm:h-16 sm:w-16" />
        <CornerOrnament className="absolute -right-2 -top-2 h-12 w-12 rotate-90 text-gold-400 sm:h-16 sm:w-16" />
        <CornerOrnament className="absolute -bottom-2 -left-2 h-12 w-12 -rotate-90 text-gold-400 sm:h-16 sm:w-16" />
        <CornerOrnament className="absolute -bottom-2 -right-2 h-12 w-12 rotate-180 text-gold-400 sm:h-16 sm:w-16" />

        <div className="px-8 py-10 text-center sm:px-14 sm:py-12">
          <p className="font-serif text-xl text-gold-600 sm:text-2xl">
            Құрметті ағайын-туыс, дос-жаран!
          </p>

          <FlourishDivider className="my-6 text-gold-400" />

          <p className="text-sm leading-relaxed text-gold-800 sm:text-base">
            Өміріміздегі ең қуанышты, ең есте қаларлық сәтті — жүректерін бір-біріне
            қосқан <span className="font-semibold text-gold-700">Нұрканат</span> пен{' '}
            <span className="font-semibold text-gold-700">Дананың</span> үйлену тойын —
            сіздермен бөлісуге шақырамыз.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-gold-800 sm:text-base">
            Жас жұбайға ақ батаңызды беріп, тойымыздың қадірлі қонағы болуыңызды сұраймыз!
          </p>
        </div>
      </div>
    </section>
  );
}
