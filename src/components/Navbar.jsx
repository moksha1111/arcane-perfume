import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-midnight/95 backdrop-blur-md border-b border-gold/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-5 relative flex items-center justify-between">
        {/* Left links */}
        <div className="hidden md:flex items-center gap-8">
          {['Collection', 'Story'].map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-body text-xs tracking-[0.2em] uppercase text-smoke hover:text-champagne transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Center logo — absolutely centered on the full nav width */}
        <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none">
          <span className="font-display text-gold text-2xl tracking-[0.4em]">ARCANE</span>
          <span className="font-body text-smoke text-[0.6rem] tracking-[0.35em] uppercase mt-0.5">
            Parfumerie
          </span>
        </div>

        {/* Right links + CTA */}
        <div className="hidden md:flex items-center gap-8 ml-auto">
          {['Ingredients', 'Visit'].map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-body text-xs tracking-[0.2em] uppercase text-smoke hover:text-champagne transition-colors duration-300"
            >
              {link}
            </a>
          ))}
          <a
            href="#collection"
            className="font-body text-xs tracking-[0.2em] uppercase text-gold border border-gold/50 hover:border-gold hover:bg-gold/5 px-5 py-2.5 transition-all duration-300"
          >
            Discover
          </a>
        </div>

        {/* Mobile */}
        <div className="md:hidden ml-auto">
          <a
            href="#collection"
            className="font-body text-xs tracking-[0.2em] uppercase text-gold border border-gold/50 px-4 py-2 transition-all duration-300"
          >
            Discover
          </a>
        </div>
      </div>
    </nav>
  );
}
