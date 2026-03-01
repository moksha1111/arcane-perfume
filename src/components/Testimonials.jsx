import useInView from '../hooks/useInView';

const testimonials = [
  {
    quote:
      'NOCTIS is not a perfume — it is a philosophy. I wore it to the most important meeting of my career. I did not need to say a word.',
    name: 'Isabelle Morel',
    title: 'Creative Director, Paris',
  },
  {
    quote:
      'The Atelier experience changed how I think about identity. My bespoke fragrance is the only luxury I will never share with another person.',
    name: 'Alistair Vane',
    title: 'Collector, London',
  },
  {
    quote:
      'ORACLE arrived and I understood immediately. Every note is a certainty dressed as mystery. I have worn nothing else in fourteen months.',
    name: 'Nadia Osei',
    title: 'Architect, New York',
  },
];

export default function Testimonials() {
  const [ref, inView] = useInView();

  return (
    <section className="bg-midnight py-32 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-body text-[0.6rem] tracking-[0.5em] uppercase text-smoke/60 mb-4">
            Worn By
          </p>
          <h2 className="font-display text-4xl md:text-5xl tracking-widest text-petal">
            THE INITIATED
          </h2>
          <hr className="gold-rule w-24 mx-auto mt-6" />
        </div>

        {/* Cards */}
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-plum fade-up ${inView ? 'visible' : ''}`}
        >
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="px-10 py-12"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Large opening quote */}
              <div className="font-serif text-gold text-6xl leading-none mb-4 opacity-60">
                "
              </div>

              <p className="font-serif italic text-champagne text-lg leading-relaxed mb-8">
                {t.quote}
              </p>

              <hr className="gold-rule w-12 mb-5" />

              <div>
                <p className="font-display text-petal text-sm tracking-widest">{t.name}</p>
                <p className="font-body text-smoke/60 text-xs tracking-[0.2em] uppercase mt-1">
                  {t.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
