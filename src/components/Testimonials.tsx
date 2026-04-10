import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Robert Johnson',
    role: 'Homeowner',
    content: 'Zithande transformed my overgrown backyard into a beautiful oasis. The team was professional, on time, and their attention to detail was incredible.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'Emily Davis',
    role: 'Property Manager',
    content: 'We use Zithande for all our commercial properties. Their equipment is top-notch and they always leave the sites looking immaculate.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'David Wilson',
    role: 'Local Resident',
    content: 'Best lawn care service in the area. Sibusiso J. and his team are true professionals who clearly care about the work they do.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-950 overflow-hidden relative">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5 bg-mower-pattern pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-brand-400 font-semibold tracking-wide uppercase text-sm mb-3">Testimonials</h2>
            <p className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              What Our Clients Say
            </p>
            <p className="text-lg text-brand-100/70">
              We take pride in our work, and it shows in the feedback from our community.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-brand-900/40 backdrop-blur-sm p-8 rounded-[2.5rem] shadow-sm border border-white/5 relative group hover:bg-brand-900/60 transition-all duration-300"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-brand-600 rounded-2xl flex items-center justify-center shadow-lg shadow-brand-600/20 group-hover:rotate-12 transition-transform">
                <Quote className="w-6 h-6 text-white" />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-400 text-brand-400" />
                ))}
              </div>

              <p className="text-brand-50 italic mb-8 leading-relaxed">
                "{review.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand-800"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-white">{review.name}</h4>
                  <p className="text-xs text-brand-400 font-bold uppercase tracking-wider">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
