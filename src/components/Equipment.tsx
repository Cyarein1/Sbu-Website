import { motion } from 'motion/react';
import { Settings, Zap, Shield, Sparkles } from 'lucide-react';

const tools = [
  {
    name: 'Commercial Zero-Turn Mowers',
    description: 'High-efficiency mowers for a perfectly level cut on any terrain.',
    image: 'https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Professional Grade Trimmers',
    description: 'Precision tools for clean edges and perfectly shaped hedges.',
    image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Eco-Friendly Blowers',
    description: 'Low-noise, high-power equipment to keep your paths spotless.',
    image: 'https://images.unsplash.com/photo-1621905252507-b354bcadcabc?q=80&w=800&auto=format&fit=crop',
  },
];

export default function Equipment() {
  return (
    <section id="equipment" className="py-24 bg-brand-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-brand-400 font-semibold tracking-wide uppercase text-sm mb-3">Our Arsenal</h2>
            <p className="text-4xl md:text-5xl font-serif font-bold mb-8">
              The Best Tools for the <br />
              <span className="text-brand-400 italic">Best Results</span>
            </p>
            <p className="text-brand-100/70 text-lg mb-12 leading-relaxed max-w-lg">
              We invest in premium, commercial-grade equipment to ensure every job is done efficiently and safely. Our tools are regularly maintained for peak performance.
            </p>

            <div className="space-y-8">
              {[
                { icon: Settings, title: 'Precision Engineering', desc: 'Our mowers are calibrated weekly for a perfect cut.' },
                { icon: Zap, title: 'High Efficiency', desc: 'Commercial grade power means we get the job done faster.' },
                { icon: Shield, title: 'Safety First', desc: 'All equipment meets the highest industry safety standards.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-brand-900/50 border border-brand-800 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-brand-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                    <p className="text-brand-100/60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative h-48 rounded-3xl overflow-hidden border border-white/10"
              >
                <img
                  src={tool.image}
                  alt={tool.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/40 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-center">
                  <h4 className="text-2xl font-bold mb-2">{tool.name}</h4>
                  <p className="text-brand-100/70 max-w-xs">{tool.description}</p>
                </div>
                <div className="absolute top-8 right-8">
                  <Sparkles className="w-6 h-6 text-brand-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
