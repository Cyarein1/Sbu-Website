import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const whatsappLink = 'https://wa.me/27737649083';
const phoneLink = 'tel:0737649083';
const emailLink = 'mailto:hello@zithande.com';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-brand-600 font-black uppercase tracking-[0.2em] text-xs mb-4">Contact Us</h2>
              <p className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter">
                READY TO <br />
                <span className="text-brand-600">GET STARTED?</span>
              </p>
              <p className="text-slate-600 text-lg mb-12 max-w-lg font-medium leading-relaxed">
                Fill out the form below for a professional site assessment and a detailed, no-obligation quote.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: Phone, label: 'Call Us', value: '0737649083', href: phoneLink },
                  { icon: Phone, label: 'WhatsApp', value: '0737649083', href: whatsappLink },
                  { icon: Mail, label: 'Email Us', value: 'hello@zithande.com', href: emailLink },
                ].map((item) => (
                  <div key={item.label} className="space-y-2">
                    <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-brand-600" />
                    </div>
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-bold text-slate-900 hover:text-brand-600 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-bold text-slate-900">{item.value}</p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-100"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Full Name</label>
                  <input
                    type="text"
                    placeholder="Sibusiso Dlamini"
                    className="w-full px-6 py-4 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all font-bold text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email Address</label>
                  <input
                    type="email"
                    placeholder="sibusiso@gmail.com"
                    className="w-full px-6 py-4 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all font-bold text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Service Required</label>
                <select className="w-full px-6 py-4 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all font-bold text-sm appearance-none">
                  <option>Commercial Maintenance</option>
                  <option>Residential Landscaping</option>
                  <option>Tree & Stump Removal</option>
                  <option>Site Preparation</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Your Message</label>
                <textarea
                  rows={4}
                  placeholder="Describe your project requirements..."
                  className="w-full px-6 py-4 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all resize-none font-bold text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full py-5 rounded-xl bg-brand-600 text-white font-black uppercase tracking-[0.2em] text-xs hover:bg-brand-700 transition-all flex items-center justify-center gap-3 shadow-xl shadow-brand-600/30"
              >
                Submit Request
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
