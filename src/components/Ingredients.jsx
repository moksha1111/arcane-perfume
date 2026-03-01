// Oud:       29805437  — dark luxury perfume bottle on dark wood (Pexels, verified 200)
// Rose:      9951169   — red rose on pure black background (Pexels, verified 200)
// Sandalwood:7550097   — reed diffuser / incense sticks on dark bg (Pexels, verified 200)
import useInView from '../hooks/useInView';

const ingredients = [
  {
    name: 'OUD RESINOID',
    origin: 'Laos',
    season: 'Harvested: October – February',
    character: 'Deep, smoky, balsamic with leather and dark wood undertones',
    description:
      'Sourced from the resin-saturated heartwood of Aquilaria trees infected with Phialophora parasitica, our Laotian oud is aged a minimum of four years before distillation. The result is a material of extraordinary complexity — simultaneously ancient, intimate, and unsettling.',
    collections: ['NOCTIS', 'ORACLE'],
    img: 'https://images.pexels.com/photos/29805437/pexels-photo-29805437.jpeg?auto=compress&cs=tinysrgb&w=900&q=80',
    flip: false,
  },
  {
    name: 'ROSE ABSOLUTE',
    origin: 'Bulgaria',
    season: 'Harvested: May Dawn',
    character: 'Honeyed, heady, deeply floral with green and spice facets',
    description:
      'Rosa damascena petals picked before sunrise in Bulgaria\'s Kazanlak valley, when their essential oil content peaks. Over 3.5 tonnes of petals yield a single kilogram of absolute. Ours is cold-extracted to preserve the living quality of the flower — a warmth that no synthetic can replicate.',
    collections: ['SOLARIS', 'REVERIE'],
    img: 'https://images.pexels.com/photos/9951169/pexels-photo-9951169.jpeg?auto=compress&cs=tinysrgb&w=900&q=80',
    flip: true,
  },
  {
    name: 'MYSORE SANDALWOOD',
    origin: 'India',
    season: 'Harvested: 40-year-old trees',
    character: 'Creamy, milky, softly woody with sweet and animalic depth',
    description:
      'True Mysore sandalwood (Santalum album) from government-sanctioned sustainable harvests in Karnataka. Trees are harvested only after four decades of growth. The oil — warm, creamy, profoundly skin-like — is the closest thing perfumery has to pure comfort. It is the final word in every ARCANE composition.',
    collections: ['REVERIE', 'NOCTIS'],
    img: 'https://images.pexels.com/photos/7550097/pexels-photo-7550097.jpeg?auto=compress&cs=tinysrgb&w=900&q=80',
    flip: false,
  },
];

function IngredientRow({ item, index }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`flex flex-col ${item.flip ? 'md:flex-row-reverse' : 'md:flex-row'} min-h-[450px] fade-up ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image half */}
      <div className="md:w-1/2 relative overflow-hidden">
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover"
          style={{ minHeight: '400px' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: item.flip
              ? 'linear-gradient(to left, rgba(9,6,11,0) 60%, rgba(18,13,20,0.7) 100%)'
              : 'linear-gradient(to right, rgba(9,6,11,0) 60%, rgba(18,13,20,0.7) 100%)',
          }}
        />
      </div>

      {/* Text half */}
      <div className="md:w-1/2 flex flex-col justify-center px-12 py-16 bg-midnight">
        <p className="font-body text-[0.55rem] tracking-[0.5em] uppercase text-gold/60 mb-3">
          {item.origin} · {item.season}
        </p>
        <h3 className="font-display text-petal text-3xl tracking-widest mb-2">{item.name}</h3>
        <hr className="gold-rule w-16 mb-4" />
        <p className="font-serif italic text-amethyst text-sm mb-5 leading-relaxed">
          {item.character}
        </p>
        <p className="font-body text-smoke text-sm leading-loose mb-6">
          {item.description}
        </p>
        <div className="flex items-center gap-2">
          <span className="font-body text-[0.55rem] tracking-[0.3em] uppercase text-smoke/50">
            Found in
          </span>
          {item.collections.map(c => (
            <span key={c} className="note-tag">{c}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Ingredients() {
  const [ref, inView] = useInView();

  return (
    <section id="ingredients" className="bg-midnight">
      {/* Section header */}
      <div
        ref={ref}
        className={`text-center py-24 px-8 fade-up ${inView ? 'visible' : ''}`}
      >
        <p className="font-body text-[0.6rem] tracking-[0.5em] uppercase text-smoke/60 mb-4">
          The Raw Materials
        </p>
        <h2 className="font-display text-5xl md:text-6xl tracking-widest text-petal mb-6">
          INGREDIENTS
        </h2>
        <hr className="gold-rule w-24 mx-auto mb-6" />
        <p className="font-serif italic text-smoke max-w-xl mx-auto text-lg">
          Three materials. Three continents. One obsession with provenance.
        </p>
      </div>

      {/* Alternating rows */}
      {ingredients.map((item, i) => (
        <IngredientRow key={item.name} item={item} index={i} />
      ))}
    </section>
  );
}
