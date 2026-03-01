import { useState } from 'react';
import useInView from '../hooks/useInView';

const locations = [
  {
    city: 'Paris',
    address: '14 Rue du Faubourg Saint-Honoré',
    neighborhood: '8ème Arrondissement',
    phone: '+33 1 42 00 00 00',
  },
  {
    city: 'New York',
    address: '831 Madison Avenue',
    neighborhood: 'Upper East Side',
    phone: '+1 212 000 0000',
  },
];

const hours = [
  { days: 'Monday – Friday', time: '10:00 – 19:00' },
  { days: 'Saturday', time: '11:00 – 18:00' },
  { days: 'Sunday', time: 'By Appointment' },
];

export default function Visit() {
  const [ref, inView] = useInView();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <section id="visit" className="bg-midnight">
      {/* Location band */}
      <div className="border-b border-plum/30 py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {locations.map((loc) => (
              <div key={loc.city} className="flex flex-col">
                <p className="font-body text-[0.6rem] tracking-[0.5em] uppercase text-gold/60 mb-3">
                  Boutique
                </p>
                <h3 className="font-display text-petal text-3xl tracking-widest mb-4">{loc.city}</h3>
                <hr className="gold-rule w-16 mb-5" />
                <p className="font-body text-smoke text-sm">{loc.address}</p>
                <p className="font-body text-smoke/60 text-xs tracking-widest uppercase mt-1">
                  {loc.neighborhood}
                </p>
                <p className="font-body text-smoke/60 text-sm mt-3">{loc.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hours + Contact form */}
      <div
        ref={ref}
        className={`py-24 px-8 bg-void fade-up ${inView ? 'visible' : ''}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-body text-[0.6rem] tracking-[0.5em] uppercase text-smoke/60 mb-4">
              Come & Visit
            </p>
            <h2 className="font-display text-4xl md:text-5xl tracking-widest text-petal">
              THE BOUTIQUE
            </h2>
            <hr className="gold-rule w-24 mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Hours */}
            <div>
              <h4 className="font-display text-champagne text-xl tracking-widest mb-8">
                Opening Hours
              </h4>
              <div className="space-y-4">
                {hours.map(h => (
                  <div key={h.days} className="flex justify-between items-center border-b border-plum/20 pb-4">
                    <span className="font-body text-smoke text-sm">{h.days}</span>
                    <span className="font-body text-champagne text-sm">{h.time}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <h4 className="font-display text-champagne text-xl tracking-widest mb-4">
                  Appointments
                </h4>
                <p className="font-body text-smoke text-sm leading-loose">
                  Private consultations for our Atelier service require advance booking. Appointments are available seven days a week outside of regular hours.
                </p>
                <a
                  href="mailto:atelier@arcane-parfumerie.com"
                  className="inline-block mt-4 font-body text-[0.65rem] tracking-[0.3em] uppercase text-gold hover:text-champagne transition-colors duration-300"
                >
                  atelier@arcane-parfumerie.com
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h4 className="font-display text-champagne text-xl tracking-widest mb-8">
                Send a Message
              </h4>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="arcane-input"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="arcane-input"
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="arcane-input"
                />
                <textarea
                  name="message"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="arcane-input resize-none"
                />
                <button
                  type="submit"
                  className="w-full font-body text-xs tracking-[0.3em] uppercase text-gold border border-gold/50 hover:border-gold hover:bg-gold/5 py-4 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
