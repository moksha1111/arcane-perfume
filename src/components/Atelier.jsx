import useInView from '../hooks/useInView';

const steps = [
  {
    number: '01',
    title: 'Consultation',
    description:
      'A private session with our master perfumer. We explore your olfactive memory, emotional landscape, and the moments you wish to inhabit. This is not a questionnaire — it is a conversation between two people and the invisible.',
  },
  {
    number: '02',
    title: 'Composition',
    description:
      'Over six to twelve weeks, our atelier constructs your fragrance from up to forty raw materials. Three iterations are presented; each refined until the composition speaks without equivocation. You approve nothing until it is right.',
  },
  {
    number: '03',
    title: 'Revelation',
    description:
      'Your fragrance is bottled in numbered crystal, sealed with hand-poured wax, and delivered in a bespoke lacquered case. The formula is yours alone — held in our archives, never recreated for another.',
  },
];

// Art Nouveau ornament for Atelier section
function AtelierOrnament() {
  return (
    <svg
      viewBox="0 0 160 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-40 h-10 text-gold opacity-40 mx-auto mb-8"
    >
      <path d="M80 2 L80 38" stroke="currentColor" strokeWidth="0.8" />
      <path d="M80 2 L60 20 L80 38 L100 20 Z" stroke="currentColor" strokeWidth="0.6" fill="none" />
      <path d="M0 20 L55 20" stroke="currentColor" strokeWidth="0.6" strokeDasharray="3 4" />
      <path d="M105 20 L160 20" stroke="currentColor" strokeWidth="0.6" strokeDasharray="3 4" />
      <circle cx="80" cy="20" r="3" stroke="currentColor" strokeWidth="0.8" fill="none" />
      <circle cx="80" cy="2" r="1.5" fill="currentColor" opacity="0.6" />
      <circle cx="80" cy="38" r="1.5" fill="currentColor" opacity="0.6" />
      <circle cx="0" cy="20" r="1.5" fill="currentColor" opacity="0.4" />
      <circle cx="160" cy="20" r="1.5" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

export default function Atelier() {
  const [headerRef, headerInView] = useInView();
  const [stepsRef, stepsInView] = useInView();

  return (
    <section id="atelier" className="bg-void py-32 px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Ornament */}
        <AtelierOrnament />

        {/* Header */}
        <div ref={headerRef} className={`fade-up ${headerInView ? 'visible' : ''}`}>
          <p className="font-body text-[0.6rem] tracking-[0.5em] uppercase text-smoke/60 mb-4">
            Bespoke Fragrance Creation
          </p>
          <h2 className="font-display text-5xl md:text-6xl tracking-widest text-petal mb-4">
            THE ATELIER
          </h2>
          <hr className="gold-rule w-24 mx-auto mb-6" />
          <p className="font-serif italic text-smoke text-xl max-w-xl mx-auto leading-relaxed mb-16">
            For those who understand that the rarest luxury is irreplicability.
          </p>
        </div>

        {/* Steps */}
        <div
          ref={stepsRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-plum/30 mb-16 fade-up ${stepsInView ? 'visible' : ''}`}
        >
          {steps.map((step, i) => (
            <div key={step.number} className="px-10 py-10 group" style={{ transitionDelay: `${i * 150}ms` }}>
              <div className="font-display text-6xl text-gold/10 group-hover:text-gold/20 transition-colors duration-500 mb-4">
                {step.number}
              </div>
              <h3 className="font-display text-petal text-xl tracking-widest mb-4">
                {step.title}
              </h3>
              <hr className="gold-rule w-10 mx-auto mb-5" />
              <p className="font-body text-smoke text-sm leading-loose">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4">
          <a
            href="#visit"
            className="font-body text-xs tracking-[0.3em] uppercase text-gold border border-gold/50 hover:border-gold hover:bg-gold/5 px-12 py-4 transition-all duration-300 inline-block"
          >
            Begin Your Consultation
          </a>
          <p className="font-body text-smoke/40 text-xs tracking-widest">
            By appointment only · Paris & New York
          </p>
        </div>
      </div>
    </section>
  );
}
