import { useState, useEffect } from 'react';
import { Leaf, Menu, X, Phone, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const whatsappLink = 'https://wa.me/27737649083';
const facebookLink = 'https://www.facebook.com/share/1NVqaNyDsk/';
const tiktokLink = 'https://tiktok.com/@zithande_c_s';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-brand-900 text-white py-2 hidden md:block border-b border-brand-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs font-bold uppercase tracking-widest">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <Phone className="w-3 h-3 text-brand-400" />
              Call Us: 0737649083
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-3 h-3 text-brand-400" />
              Mon - Sat: 8am - 6pm
            </span>
          </div>
          <div className="flex gap-4">
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="hover:text-brand-400 transition-colors">WhatsApp</a>
            <a href={facebookLink} target="_blank" rel="noreferrer" className="hover:text-brand-400 transition-colors">Facebook</a>
            <a href={tiktokLink} target="_blank" rel="noreferrer" className="hover:text-brand-400 transition-colors">TikTok</a>
          </div>
        </div>
      </div>

      <nav
        className={`transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg py-3' : 'bg-white/95 backdrop-blur-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="bg-brand-600 p-2 rounded-lg">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-extrabold tracking-tighter text-slate-900 flex flex-col leading-none">
                ZITHANDE
                <span className="text-[10px] tracking-[0.3em] text-brand-600">CLEANERS</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-brand-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-600 text-white text-xs font-black uppercase tracking-widest transition-all hover:bg-brand-700 shadow-md hover:shadow-brand-600/20"
              >
                Get a Quote
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden p-2 rounded-lg text-slate-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-sm font-bold uppercase tracking-widest text-slate-600 hover:text-brand-600"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-5 py-4 rounded-xl bg-brand-600 text-white font-black uppercase tracking-widest"
                >
                  Get a Quote
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
