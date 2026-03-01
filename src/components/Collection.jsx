import { useState } from 'react';
import useInView from '../hooks/useInView';

const fragrances = [
  {
    numeral: 'I',
    name: 'NOCTIS',
    family: 'Oriental Woody',
    copy: 'A breath taken in darkness, slowly released into silk.',
    top: ['Bergamot', 'Saffron', 'Black Pepper'],
    heart: ['Black Rose', 'Oud', 'Iris'],
    base: ['Vetiver', 'Dark Musk', 'Ambergris'],
  },
  {
    numeral: 'II',
    name: 'SOLARIS',
    family: 'Floral Amber',
    copy: 'The hour before the sun vanishes, captured in glass.',
    top: ['Bergamot', 'Neroli', 'Pink Pepper'],
    heart: ['Jasmine Absolute', 'Tuberose', 'Ylang-Ylang'],
    base: ['Amber', 'Tonka Bean', 'Musk'],
  },
  {
    numeral: 'III',
    name: 'REVERIE',
    family: 'Chypre Floral',
    copy: 'Memory dressed in violet and morning dew.',
    top: ['Lemon', 'Violet Leaf', 'Green Notes'],
    heart: ['Iris', 'Orris Butter', 'Rose'],
    base: ['Oakmoss', 'Sandalwood', 'Patchouli'],
  },
  {
    numeral: 'IV',
    name: 'ORACLE',
    family: 'Smoky Resinous',
    copy: 'The answer written in smoke before the question was asked.',
    top: ['Incense', 'Cardamom', 'Elemi'],
    heart: ['Myrrh', 'Labdanum', 'Cistus'],
    base: ['Dark Musk', 'Oud', 'Benzoin'],
  },
];

function FragranceCard({ f, delay }) {
  const [hovered, setHovered] = useState(false);
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`fade-up ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="relative bg-void border border-plum/40 hover:border-gold/40 amethyst-glow transition-all duration-500 p-8 h-full group"
        style={{
          transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
          transition: 'transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease',
        }}
      >
        {/* Roman numeral */}
        <div
          className="font-display text-7xl absolute top-4 right-6 leading-none select-none"
          style={{ color: 'rgba(201,168,76,0.07)' }}
        >
          {f.numeral}
        </div>

        {/* Header */}
        <div className="relative z-10 mb-6">
          <p className="font-body text-[0.6rem] tracking-[0.4em] uppercase text-gold/60 mb-2">
            {f.numeral} — {f.family}
          </p>
          <h3 className="font-display text-petal text-3xl tracking-widest mb-3">{f.name}</h3>
          <hr className="gold-rule w-16 mb-4" />
          <p className="font-serif italic text-smoke text-base leading-relaxed">{f.copy}</p>
        </div>

        {/* Note pills — revealed on hover */}
        <div
          className="relative z-10 overflow-hidden transition-all duration-500"
          style={{ maxHeight: hovered ? '120px' : '0', opacity: hovered ? 1 : 0 }}
        >
          <div className="pt-4 border-t border-plum/30">
            {[
              { label: 'Top', notes: f.top },
              { label: 'Heart', notes: f.heart },
              { label: 'Base', notes: f.base },
            ].map(({ label, notes }) => (
              <div key={label} className="flex items-start gap-2 mb-2">
                <span className="font-body text-[0.55rem] tracking-widest uppercase text-smoke/60 w-10 pt-0.5 shrink-0">
                  {label}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {notes.map(n => (
                    <span key={n} className="note-tag">{n}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-6 pt-4 border-t border-plum/20">
          <button className="font-body text-[0.65rem] tracking-[0.3em] uppercase text-gold/70 hover:text-gold transition-colors duration-300">
            Explore →
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Collection() {
  const [ref, inView] = useInView();

  return (
    <section id="collection" className="bg-midnight py-32 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={ref} className={`text-center mb-20 fade-up ${inView ? 'visible' : ''}`}>
          <p className="font-body text-[0.6rem] tracking-[0.5em] uppercase text-smoke/60 mb-4">
            Four Expressions · One Vision
          </p>
          <h2 className="font-display text-5xl md:text-6xl tracking-widest gold-shimmer mb-6">
            THE COLLECTION
          </h2>
          <hr className="gold-rule w-24 mx-auto" />
        </div>

        {/* 2×2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {fragrances.map((f, i) => (
            <FragranceCard key={f.name} f={f} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
