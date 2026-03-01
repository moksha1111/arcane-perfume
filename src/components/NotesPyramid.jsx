import { useState } from 'react';
import useInView from '../hooks/useInView';

const bands = [
  {
    id: 'top',
    label: 'Top Notes',
    subtitle: 'The first impression — fleeting, brilliant.',
    notes: ['Bergamot', 'Saffron', 'Black Pepper'],
    description:
      'The opening of NOCTIS strikes with cold citrus and spice. Bergamot provides luminous freshness while saffron introduces an earthy, honeyed quality. Black pepper crackles beneath like embers catching light.',
    widthClass: 'w-[30%]',
    bgStyle: { background: 'rgba(201,168,76,0.08)' },
    borderStyle: { borderColor: 'rgba(201,168,76,0.15)' },
  },
  {
    id: 'heart',
    label: 'Heart Notes',
    subtitle: 'The soul — what remains after the opening fades.',
    notes: ['Black Rose', 'Oud', 'Iris'],
    description:
      'At the heart, a shadowed floral emerges. Black rose — its petals steeped in darkness — entwines with the complex resinous depth of aged oud. Iris adds powdery, violet-tinged softness that bridges earth and bloom.',
    widthClass: 'w-[60%]',
    bgStyle: { background: 'rgba(201,168,76,0.12)' },
    borderStyle: { borderColor: 'rgba(201,168,76,0.2)' },
  },
  {
    id: 'base',
    label: 'Base Notes',
    subtitle: 'The memory — what lingers on skin for hours.',
    notes: ['Vetiver', 'Dark Musk', 'Ambergris'],
    description:
      'The dry-down is the signature of NOCTIS. Vetiver — smoky, earthy, green — anchors the composition. Dark musk breathes warmth into every movement. Ambergris, rare and marine, creates an almost skin-like intimacy that is utterly irreplaceable.',
    widthClass: 'w-full',
    bgStyle: { background: 'rgba(201,168,76,0.16)' },
    borderStyle: { borderColor: 'rgba(201,168,76,0.25)' },
  },
];

export default function NotesPyramid() {
  const [activeBand, setActiveBand] = useState(null);
  const [ref, inView] = useInView();

  const active = bands.find(b => b.id === activeBand) || null;

  return (
    <section id="pyramid" className="bg-void py-32 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={ref} className={`text-center mb-20 fade-up ${inView ? 'visible' : ''}`}>
          <p className="font-body text-[0.6rem] tracking-[0.5em] uppercase text-smoke/60 mb-4">
            Olfactive Architecture
          </p>
          <h2 className="font-display text-4xl md:text-5xl tracking-widest text-petal mb-3">
            THE ANATOMY OF
          </h2>
          <h2 className="font-display text-4xl md:text-5xl tracking-widest text-gold mb-6">
            NOCTIS
          </h2>
          <hr className="gold-rule w-24 mx-auto" />
        </div>

        <div className="flex flex-col md:flex-row gap-16 items-start">
          {/* Left: Pyramid */}
          <div className="flex-1 flex flex-col items-center gap-3">
            {bands.map((band) => (
              <div
                key={band.id}
                className={`pyramid-band ${band.widthClass} border`}
                style={{
                  ...band.bgStyle,
                  ...band.borderStyle,
                  padding: '1.25rem 1.5rem',
                  filter: activeBand && activeBand !== band.id ? 'brightness(0.6)' : 'brightness(1)',
                }}
                onMouseEnter={() => setActiveBand(band.id)}
                onMouseLeave={() => setActiveBand(null)}
              >
                <p className="font-body text-[0.6rem] tracking-[0.4em] uppercase text-gold/70 mb-1 text-center">
                  {band.label}
                </p>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {band.notes.map(n => (
                    <span key={n} className="note-tag">{n}</span>
                  ))}
                </div>
              </div>
            ))}

            {/* Triangle decorative base */}
            <div className="mt-4 flex flex-col items-center gap-1 opacity-30">
              <div className="w-px h-8 bg-gold/40" />
              <div className="w-3 h-px bg-gold/40" />
            </div>
          </div>

          {/* Right: Description panel */}
          <div className="flex-1 min-h-[280px] flex flex-col justify-center">
            {active ? (
              <div className="border-l-2 border-gold/30 pl-8">
                <p className="font-body text-[0.6rem] tracking-[0.4em] uppercase text-gold mb-2">
                  {active.label}
                </p>
                <p className="font-serif italic text-smoke text-lg mb-4 leading-relaxed">
                  {active.subtitle}
                </p>
                <hr className="gold-rule w-12 mb-4" />
                <p className="font-body text-smoke/80 text-sm leading-relaxed">
                  {active.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {active.notes.map(n => (
                    <span key={n} className="note-tag">{n}</span>
                  ))}
                </div>
              </div>
            ) : (
              <div className="border-l-2 border-plum/30 pl-8">
                <p className="font-body text-[0.6rem] tracking-[0.4em] uppercase text-smoke/40 mb-4">
                  Hover a band to explore
                </p>
                <p className="font-serif italic text-smoke/50 text-lg leading-relaxed">
                  "Every note in NOCTIS was chosen to evoke a specific hour of darkness — that precise moment when the familiar becomes unknowable."
                </p>
                <p className="font-body text-smoke/30 text-xs mt-4 tracking-widest uppercase">
                  — Maison ARCANE
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
