import { motion } from 'motion/react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';

const mapQuery = 'Umgababa Beach, Umgababa, KwaZulu-Natal';
const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;
const googleMapsEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

export default function MapSection() {
  return (
    <section id="location" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-brand-600 font-black uppercase tracking-[0.2em] text-xs mb-4">Our Location</h2>
            <p className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tighter">
              SERVING THE <br />
              <span className="text-brand-600 underline decoration-brand-200 underline-offset-8">ENTIRE REGION</span>
            </p>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
              Our team is based around Umgababa, which lets us reach nearby homes, businesses, and coastal properties quickly and efficiently.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-brand-600 flex items-center justify-center shadow-lg shadow-brand-600/20">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-black uppercase tracking-widest mb-1">Headquarters</h4>
                  <p className="text-slate-600">Umgababa Main Road, Umgababa</p>
                </div>
              </div>

              <div className="flex gap-4 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-brand-900 flex items-center justify-center shadow-lg shadow-brand-900/20">
                  <Navigation className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-black uppercase tracking-widest mb-1">Service Area</h4>
                  <p className="text-slate-600">Umgababa Beach, Umgababa Hills, Ilfracombe, Ezembeni, and surrounding areas.</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <a
                href={googleMapsLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-brand-600 font-black uppercase tracking-widest text-xs hover:gap-4 transition-all"
              >
                Open in Google Maps
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-50"
          >
            <iframe
              title="Business Location"
              src={googleMapsEmbed}
              className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              loading="lazy"
            ></iframe>
            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100">
              <p className="text-[10px] font-black uppercase tracking-widest text-brand-600 mb-1">Current Status</p>
              <p className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Open & Operating
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
