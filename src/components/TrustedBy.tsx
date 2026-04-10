import { motion } from 'motion/react';

const partners = [
  { name: 'Microsoft', logo: 'https://cdn.simpleicons.org/microsoft/F25022' },
  { name: 'Google', logo: 'https://cdn.simpleicons.org/google/4285F4' },
  { name: 'Amazon', logo: 'https://cdn.simpleicons.org/amazon/FF9900' },
  { name: 'Netflix', logo: 'https://cdn.simpleicons.org/netflix/E50914' },
  { name: 'Spotify', logo: 'https://cdn.simpleicons.org/spotify/1DB954' },
  { name: 'Nike', logo: 'https://cdn.simpleicons.org/nike/111111' },
  { name: 'Adobe', logo: 'https://cdn.simpleicons.org/adobe/FF0000' },
  { name: 'Airbnb', logo: 'https://cdn.simpleicons.org/airbnb/FF5A5F' },
  { name: 'Uber', logo: 'https://cdn.simpleicons.org/uber/111111' },
  { name: 'Coca-Cola', logo: 'https://cdn.simpleicons.org/cocacola/D00013' },
];

export default function TrustedBy() {
  return (
    <section className="py-12 bg-slate-50 border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 text-center">
          Trusted By Industry Leaders
        </p>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[...partners, ...partners].map((partner, index) => (
            <motion.div
              key={`${partner.name}-${index}`}
              className="flex items-center gap-4 mx-10 px-2 py-2 opacity-70 hover:opacity-100 transition-all duration-500"
              whileHover={{ y: -2 }}
            >
              <div className="flex h-12 w-12 items-center justify-center">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="h-full w-full object-contain"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-sm font-black text-slate-900 tracking-tighter uppercase">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
