import { useState } from 'react';

const links = {
  Fragrances: ['NOCTIS', 'SOLARIS', 'REVERIE', 'ORACLE'],
  'The House': ['Our Story', 'The Atelier', 'Ingredients', 'Press'],
  Visit: ['Paris Boutique', 'New York', 'Appointments', 'Contact'],
};

export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer id="footer" className="bg-midnight border-t border-plum/30">
      {/* Logo area */}
      <div className="text-center py-16 px-8 border-b border-plum/20">
        <div className="font-display text-6xl md:text-8xl tracking-[0.3em] gold-shimmer mb-2">
          ARCANE
        </div>
        <p className="font-body text-smoke/50 text-xs tracking-[0.4em] uppercase">
          Parfumerie · Est. MMXV
        </p>
      </div>

      {/* Main footer columns + newsletter */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Links columns */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <h5 className="font-display text-champagne text-xs tracking-[0.3em] uppercase mb-6">
                {heading}
              </h5>
              <ul className="space-y-3">
                {items.map(item => (
                  <li key={item}>
                    <a
                      href="#"
                      className="font-body text-smoke/70 text-xs hover:text-champagne transition-colors duration-300 tracking-wide"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h5 className="font-display text-champagne text-xs tracking-[0.3em] uppercase mb-6">
              Correspondence
            </h5>
            <p className="font-body text-smoke/60 text-xs leading-loose mb-5">
              Receive our quarterly notes on fragrance, rarity, and the art of the invisible.
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="arcane-input"
              />
              <button className="font-body text-[0.65rem] tracking-[0.3em] uppercase text-gold border border-gold/40 hover:border-gold hover:bg-gold/5 py-3 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-plum/20 px-8 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-smoke/30 text-xs tracking-widest">
            © MMXXVI ARCANE Parfumerie. All rights reserved.
          </p>
          <div className="flex gap-8">
            {['Privacy Policy', 'Terms', 'Cookies'].map(link => (
              <a
                key={link}
                href="#"
                className="font-body text-smoke/30 text-xs hover:text-smoke/60 transition-colors duration-300 tracking-wide"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
