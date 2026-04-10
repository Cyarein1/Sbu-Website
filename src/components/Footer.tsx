import { Leaf, Facebook } from 'lucide-react';

const whatsappLink = 'https://wa.me/27737649083';
const facebookLink = 'https://www.facebook.com/share/1NVqaNyDsk/';
const tiktokLink = 'https://tiktok.com/@zithande_c_s';

// Custom TikTok Icon
const WhatsApp = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.52 0 .19 5.33.19 11.88c0 2.1.55 4.15 1.6 5.96L0 24l6.35-1.66a11.83 11.83 0 0 0 5.72 1.46h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.23-6.14-3.44-8.44ZM12.08 21.8h-.01a9.83 9.83 0 0 1-5-1.37l-.36-.21-3.77.99 1.01-3.67-.24-.38a9.83 9.83 0 0 1-1.52-5.28c0-5.43 4.42-9.85 9.86-9.85 2.63 0 5.1 1.02 6.96 2.89a9.79 9.79 0 0 1 2.89 6.96c0 5.44-4.42 9.86-9.85 9.86Zm5.4-7.37c-.3-.15-1.77-.87-2.04-.96-.27-.1-.47-.15-.67.15-.2.3-.76.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.39-1.46-.88-.79-1.48-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.06 2.88 1.2 3.08c.15.2 2.09 3.2 5.07 4.49.71.31 1.27.49 1.7.62.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.69.25-1.29.18-1.42-.08-.12-.27-.2-.57-.35Z" />
  </svg>
);

const TikTok = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47V14.5c0 1.94-.32 3.88-1.35 5.44-1.23 1.88-3.37 3.11-5.64 3.01-2.99-.14-5.58-2.51-5.93-5.49-.41-3.48 2.06-6.85 5.51-7.3 1.05-.14 2.13-.08 3.13.23V.02z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-brand-950 pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-mower-pattern pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Leaf className="w-8 h-8 text-brand-400" />
              <span className="text-2xl font-serif font-bold tracking-tight text-white">
                Zithande
              </span>
            </div>
            <p className="text-brand-100/70 leading-relaxed">
              Creating and maintaining beautiful outdoor spaces in Durban since 2019. Your local experts in landscaping and lawn care.
            </p>
            <div className="flex gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-brand-900/40 text-brand-100/70 hover:text-white hover:bg-brand-900/60 transition-all"
              >
                <WhatsApp className="w-5 h-5" />
              </a>
              <a
                href={facebookLink}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-brand-900/40 text-brand-100/70 hover:text-white hover:bg-brand-900/60 transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={tiktokLink}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-brand-900/40 text-brand-100/70 hover:text-white hover:bg-brand-900/60 transition-all"
              >
                <TikTok className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'Blog', 'Contact', 'Privacy Policy'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-brand-100/70 hover:text-brand-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              {['Lawn Maintenance', 'Tree Removal', 'Hedge Pruning', 'Garden Design', 'Pest Control'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-brand-100/70 hover:text-brand-400 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-brand-100/70 mb-6">
              Subscribe to get gardening tips and seasonal offers.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-3 rounded-xl bg-brand-900/40 border border-white/10 text-sm text-white placeholder:text-brand-100/50 focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
              <button className="px-4 py-3 rounded-xl bg-brand-600 text-white font-bold text-sm hover:bg-brand-700 transition-all">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-100/60">
          <p>&copy; 2026 Zithande Landscaping. All rights reserved.</p>
          <p>Designed with care for your garden.</p>
        </div>
      </div>
    </footer>
  );
}
