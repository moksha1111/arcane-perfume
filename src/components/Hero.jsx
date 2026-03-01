// Art Nouveau corner ornament SVG
function ArtNouveauCorner() {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
      className="w-20 h-20 text-gold opacity-25"
    >
      {/* Outer L-frame */}
      <path d="M8 8 L8 48" stroke="currentColor" strokeWidth="0.8" />
      <path d="M8 8 L48 8" stroke="currentColor" strokeWidth="0.8" />
      {/* Inner L-frame */}
      <path d="M14 14 L14 38" stroke="currentColor" strokeWidth="0.5" />
      <path d="M14 14 L38 14" stroke="currentColor" strokeWidth="0.5" />
      {/* Dashed accent */}
      <path d="M20 8 L8 20" stroke="currentColor" strokeWidth="0.4" strokeDasharray="2 3" opacity="0.6" />
      {/* Corner jewel */}
      <rect x="5.5" y="5.5" width="5" height="5" stroke="currentColor" strokeWidth="0.6" fill="none" transform="rotate(45 8 8)" />
      {/* Flourish curves */}
      <path d="M8 28 Q18 18 28 8" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.4" />
      {/* Dots */}
      <circle cx="8" cy="48" r="1.2" fill="currentColor" opacity="0.5" />
      <circle cx="48" cy="8" r="1.2" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

// Central decorative medallion
function Medallion() {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg"
      className="w-32 h-32 text-gold opacity-20"
    >
      <circle cx="60" cy="60" r="52" stroke="currentColor" strokeWidth="0.6" />
      <circle cx="60" cy="60" r="44" stroke="currentColor" strokeWidth="0.4" strokeDasharray="3 5" />
      <circle cx="60" cy="60" r="36" stroke="currentColor" strokeWidth="0.6" />
      {/* 8 radial lines */}
      {[0,45,90,135,180,225,270,315].map(a => {
        const r = Math.PI * a / 180;
        const x1 = 60 + 36 * Math.cos(r);
        const y1 = 60 + 36 * Math.sin(r);
        const x2 = 60 + 52 * Math.cos(r);
        const y2 = 60 + 52 * Math.sin(r);
        return <line key={a} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="0.5" />;
      })}
      {/* Center diamond */}
      <path d="M60 52 L68 60 L60 68 L52 60 Z" stroke="currentColor" strokeWidth="0.6" fill="none" />
      <circle cx="60" cy="60" r="3" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col bg-midnight overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 80% 70% at 50% 40%, rgba(123,79,160,0.14) 0%, rgba(9,6,11,0.98) 65%)',
      }}
    >
      {/* Art Nouveau Corners */}
      <div className="absolute top-5 left-5 pointer-events-none"><ArtNouveauCorner /></div>
      <div className="absolute top-5 right-5 pointer-events-none rotate-90"><ArtNouveauCorner /></div>
      <div className="absolute bottom-5 left-5 pointer-events-none -rotate-90"><ArtNouveauCorner /></div>
      <div className="absolute bottom-5 right-5 pointer-events-none rotate-180"><ArtNouveauCorner /></div>

      {/* Side vertical rules */}
      <div className="absolute left-10 inset-y-0 w-px bg-gradient-to-b from-transparent via-gold/15 to-transparent pointer-events-none" />
      <div className="absolute right-10 inset-y-0 w-px bg-gradient-to-b from-transparent via-gold/15 to-transparent pointer-events-none" />

      {/* Content — split layout */}
      <div className="flex-1 flex flex-col md:flex-row items-center max-w-7xl mx-auto w-full px-16 pt-28 pb-16 gap-12">

        {/* ── Left: Text stack ───────────────────────── */}
        <div className="flex-1 flex flex-col justify-center">
          {/* Eyebrow */}
          <p className="font-body text-[0.6rem] tracking-[0.55em] text-gold/60 uppercase mb-7">
            Maison de Parfum · Est. MMXV
          </p>

          {/* Headline */}
          <h1 className="font-display text-petal leading-[1.05] mb-7"
            style={{ fontSize: 'clamp(2.8rem, 5vw, 5.5rem)' }}>
            Where<br />
            <span style={{ color: '#C9A84C' }}>Darkness</span><br />
            Blooms
          </h1>

          {/* Thin rule */}
          <div className="w-20 gold-rule mb-7" />

          {/* Subtitle */}
          <p className="font-serif italic text-smoke text-lg leading-relaxed mb-10 max-w-sm">
            Rare essences, alchemised in shadow.<br />
            Worn by those who need no introduction.
          </p>

          {/* CTA row */}
          <div className="flex items-center gap-6">
            <a
              href="#collection"
              className="font-body text-[0.65rem] tracking-[0.3em] uppercase text-gold border border-gold/50 hover:border-gold hover:bg-gold/5 px-8 py-4 transition-all duration-300"
            >
              Enter the Collection
            </a>
            <a
              href="#story"
              className="font-body text-[0.65rem] tracking-[0.25em] uppercase text-smoke/60 hover:text-smoke transition-colors duration-300"
            >
              Our Story →
            </a>
          </div>
        </div>

        {/* ── Right: Typographic centrepiece ─────────── */}
        <div className="flex-1 flex flex-col items-center justify-center relative">
          {/* Amethyst bloom behind */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div style={{
              width: '420px', height: '420px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(123,79,160,0.18) 0%, transparent 70%)',
            }} />
          </div>

          {/* Medallion */}
          <div className="relative z-10 mb-4">
            <Medallion />
          </div>

          {/* Large ghost roman numeral */}
          <div
            className="relative z-10 font-display select-none leading-none"
            style={{
              fontSize: 'clamp(10rem, 18vw, 18rem)',
              color: 'rgba(201,168,76,0.06)',
              letterSpacing: '0.02em',
              lineHeight: 1,
              marginTop: '-2rem',
            }}
          >
            I
          </div>

          {/* Fragrance name overlay */}
          <div className="relative z-20 -mt-16 text-center">
            <p className="font-display text-gold/40 text-xs tracking-[0.6em] uppercase mb-1">No.</p>
            <p className="font-display text-champagne/60 text-2xl tracking-[0.4em]">NOCTIS</p>
            <p className="font-body text-smoke/40 text-[0.6rem] tracking-[0.35em] uppercase mt-1">Oriental Woody</p>
          </div>

          {/* Circular text ring — decorative */}
          <div className="relative z-10 mt-10">
            <svg viewBox="0 0 200 200" className="w-44 h-44 text-smoke/20 animate-spin"
              style={{ animationDuration: '30s' }}>
              <defs>
                <path id="circle" d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
              </defs>
              <text fontSize="10" fontFamily="Jost,system-ui" letterSpacing="6" fill="currentColor">
                <textPath href="#circle">
                  ARCANE · PARFUMERIE · PARIS · NEW YORK ·&nbsp;
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="flex flex-col items-center gap-2 opacity-30 pb-8">
        <span className="font-body text-[0.55rem] tracking-[0.4em] uppercase text-smoke">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-smoke to-transparent" />
      </div>
    </section>
  );
}
