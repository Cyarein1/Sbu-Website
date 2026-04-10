import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import heroPortrait from '../assets/confident-man-in-blue-overalls-outdoors.png';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-brand-950">
      {/* Background Image - High Quality Grass/Garden */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1533460004989-cef01064af7c?q=80&w=2000&auto=format&fit=crop"
          alt="Lush green garden background"
          className="w-full h-full object-cover opacity-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/40 to-transparent" />
      </div>

      {/* Background Pattern - Mower Icons */}
      <div className="absolute inset-0 z-0 opacity-10 bg-mower-pattern" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-20 lg:pr-8 xl:pr-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-600 text-white text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-xl">
              <ShieldCheck className="w-4 h-4" />
              Licensed & Fully Insured
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-6xl xl:text-[5rem] font-black text-white leading-[1.02] mb-8 tracking-tighter">
              <span className="whitespace-nowrap">UMGABABA'S #1</span> <br />
              LANDSCAPING <br />
              <span className="text-brand-400 text-4xl md:text-6xl lg:text-6xl xl:text-[5rem]">PARTNER</span>
            </h1>
            
            <p className="text-lg md:text-xl text-brand-100/80 mb-10 leading-relaxed max-w-lg font-medium">
              Serving Umgababa, the South Coast, and surrounding areas with professional landscaping services and elite results your property deserves.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-lg bg-brand-600 text-white font-black text-sm uppercase tracking-widest transition-all hover:bg-brand-700 hover:-translate-y-1 shadow-2xl shadow-brand-600/40"
              >
                Book Service Now
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-lg bg-white text-brand-900 font-black text-sm uppercase tracking-widest transition-all hover:bg-brand-50 hover:-translate-y-1 shadow-xl"
              >
                View Services
              </a>
            </div>

            <div className="flex flex-wrap gap-8">
              {[
                'Zero-Turn Mowers',
                'Stump Grinding',
                'Site Clearance',
                'Pest Eradication',
                'Treefelling',
                'Roof Cleaning and Painting'
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-white">
                  <div className="w-2 h-2 bg-brand-400 rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-widest">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border-[12px] border-white/5 shadow-2xl aspect-[4/5]">
              <img
                src={heroPortrait}
                alt="Portrait of Sibusiso J. outdoors"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-10 bg-brand-900/40 backdrop-blur-md border-t border-white/10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-brand-600 flex items-center justify-center font-black text-white">SJ</div>
                  <div>
                    <p className="text-white font-black uppercase tracking-widest text-sm">Sibusiso J.</p>
                    <p className="text-brand-400 text-[10px] font-bold uppercase tracking-widest">Founder</p>
                  </div>
                </div>
                <p className="text-brand-50 text-sm font-medium leading-relaxed italic">
                  "We use the same equipment for your home that we use for golf courses. Precision is non-negotiable."
                </p>
              </div>
            </div>
            
            {/* Background decorative element */}
            <div className="absolute -top-12 -right-12 w-full h-full bg-brand-600/20 rounded-2xl -z-10 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
