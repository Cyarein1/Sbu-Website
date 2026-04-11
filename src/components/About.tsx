import { motion } from 'motion/react';
import { Award, Users, Clock, Heart } from 'lucide-react';
import aboutImage from '../assets/autumn-landscaping-crew-in-action.png';

export default function About() {
  const stats = [
    { icon: Users, label: 'Happy Clients', value: '100+' },
    { icon: Award, label: 'Years Experience', value: '6+' },
    { icon: Clock, label: 'Projects Done', value: '500+' },
    { icon: Heart, label: 'Team Members', value: '4' },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img
                src={aboutImage}
                alt="Our landscaping team at work"
                className="w-full h-auto"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 z-20 bg-brand-600 text-white p-8 rounded-3xl shadow-xl">
              <p className="text-4xl font-bold font-serif">6+</p>
              <p className="text-sm font-bold uppercase tracking-wider opacity-80">Years of Excellence</p>
            </div>
            {/* Decorative background element */}
            <div className="absolute -top-10 -left-10 w-full h-full bg-white rounded-[2.5rem] -z-10" />
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3">Our Story</h2>
              <p className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                Dedicated to the Art of <br />
                <span className="text-brand-600">Outdoor Living</span>
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Founded by Sibusiso J. in 2019, Zithande Cleaners started with a single lawn mower and a passion for nature. Today, we are a full-service cleaning team dedicated to transforming local gardens into personal sanctuaries.
              </p>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Our team wears our signature green overalls with pride, representing a commitment to hard work, safety, and professional results. We don't just maintain gardens; we build lasting relationships with our community.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <stat.icon className="w-8 h-8 text-brand-500 mb-3 mx-auto lg:mx-0" />
                    <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
