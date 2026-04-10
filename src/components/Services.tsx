import { Scissors, TreeDeciduous, Shovel, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    title: 'Lawn Care & Maintenance',
    description: 'Precision mowing, edging, and fertilization to keep your grass lush, green, and healthy year-round.',
    icon: Shovel,
    image: 'https://images.unsplash.com/photo-1592419044706-39796d40f98c?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Expert Pruning',
    description: 'Professional trimming and shaping of shrubs and hedges to promote growth and aesthetic appeal.',
    icon: Scissors,
    image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Safe Tree Removal',
    description: 'Specialized tree removal and stump grinding services, ensuring safety and minimal impact on your landscape.',
    icon: TreeDeciduous,
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Pest Prevention',
    description: 'Integrated pest management solutions to protect your garden from invasive species and diseases.',
    icon: ShieldCheck,
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800&auto=format&fit=crop',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white bg-mower-pattern relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-brand-600 font-black uppercase tracking-[0.2em] text-xs mb-4">Our Core Services</h2>
              <p className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">
                INDUSTRIAL GRADE <br />
                <span className="text-brand-600">SOLUTIONS</span>
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <p className="text-slate-500 font-bold text-sm uppercase tracking-widest max-w-xs text-right">
              Serving residential and commercial properties with precision and safety.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:bg-brand-600 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-brand-600" />
              </div>
              <h3 className="text-lg font-black uppercase tracking-widest text-slate-900 mb-4 group-hover:text-white transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm font-medium leading-relaxed mb-8 group-hover:text-brand-50 transition-colors">
                {service.description}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-brand-600 font-black uppercase tracking-widest text-[10px] group-hover:text-white transition-colors"
              >
                Get Quote <ArrowRight className="w-3 h-3" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
