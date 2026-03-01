// Story: 30320460 — moody atmospheric portrait (Pexels, verified 200)
import useInView from '../hooks/useInView';

const STORY_IMG = 'https://images.pexels.com/photos/30320460/pexels-photo-30320460.jpeg?auto=compress&cs=tinysrgb&w=900&q=80';

export default function Story() {
  const [ref, inView] = useInView();

  return (
    <section id="story" className="bg-void overflow-hidden">
      <div className="flex flex-col md:flex-row min-h-[700px]">
        {/* Left: image */}
        <div className="md:w-[55%] relative overflow-hidden">
          <img
            src={STORY_IMG}
            alt="Master perfumer at work"
            className="w-full h-full object-cover"
            style={{ minHeight: '500px' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-void/60" />
        </div>

        {/* Right: dark panel */}
        <div
          ref={ref}
          className={`md:w-[45%] relative flex flex-col justify-center px-12 py-20 fade-up ${inView ? 'visible' : ''}`}
        >
          {/* Ghost numeral */}
          <div
            className="absolute top-8 left-8 font-display leading-none select-none pointer-events-none"
            style={{ fontSize: '14rem', color: 'rgba(240,234,242,0.03)', lineHeight: 1 }}
          >
            I
          </div>

          <div className="relative z-10">
            <p className="font-body text-[0.6rem] tracking-[0.5em] uppercase text-gold/60 mb-6">
              Our Philosophy
            </p>

            {/* Pull quote */}
            <p className="font-serif italic text-champagne text-2xl md:text-3xl leading-relaxed mb-8">
              "Perfume is not a product. It is a reckoning — a confrontation with every self you have ever been."
            </p>

            <hr className="gold-rule w-20 mb-8" />

            <p className="font-body text-smoke text-sm leading-loose mb-5">
              ARCANE was founded on a single conviction: that the most profound fragrances are those which illuminate darkness rather than flee from it. Our perfumers work exclusively with rare, ethically sourced raw materials — oud resins aged in Laos, rose absolute distilled in Bulgaria's Rose Valley, sandalwood from the last sustainable Mysore groves.
            </p>

            <p className="font-body text-smoke text-sm leading-loose mb-10">
              Each composition begins not with a brief, but with a question. NOCTIS asked: what does courage smell like at 3 AM? ORACLE asked: what would certainty feel like, worn on skin? The answers, when they come, are not words. They are molecules.
            </p>

            <a
              href="#ingredients"
              className="inline-block font-body text-[0.65rem] tracking-[0.3em] uppercase text-gold border border-gold/50 hover:border-gold hover:bg-gold/5 px-8 py-3.5 transition-all duration-300"
            >
              Our Ingredients
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
