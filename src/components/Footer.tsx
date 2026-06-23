import { Twitter, Linkedin, Mail, ExternalLink } from 'lucide-react';

interface FooterProps {
  onScrollTo: (id: string) => void;
}

export default function Footer({ onScrollTo }: FooterProps) {
  const currentYear = 2026;

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Our Services', id: 'services' },
    { label: 'Contact', id: 'contact' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Sustainability Report', href: '#' },
    { label: 'Careers', href: '#' },
  ];

  return (
    <footer className="bg-neutral-900 text-neutral-300 font-sans border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16">
          {/* Brand/About Col */}
          <div className="lg:col-span-5 space-y-6">
            <span className="font-display text-2xl font-extrabold tracking-tight text-white block">
              EDEWOR <span className="text-amber-500">ENERGY</span>
            </span>
            <p className="text-neutral-400 text-sm md:text-[15px] leading-relaxed max-w-sm">
              Pioneering sustainable and efficient energy infrastructure solutions across Nigeria and West Africa.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center hover:bg-neutral-700 hover:text-white transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center hover:bg-neutral-700 hover:text-white transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:info@edeworenergy.com"
                className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center hover:bg-neutral-700 hover:text-white transition-colors"
                aria-label="Contact us directly via Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 sm:col-span-1 space-y-4">
            <h4 className="font-display font-semibold text-white tracking-wide uppercase text-xs">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onScrollTo(link.id)}
                    className="text-neutral-400 hover:text-amber-500 transition-colors duration-200 text-left focus:outline-none cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Corporate */}
          <div className="lg:col-span-2 sm:col-span-1 space-y-4">
            <h4 className="font-display font-semibold text-white tracking-wide uppercase text-xs">
              Legal & Corporate
            </h4>
            <ul className="space-y-2.5 text-sm">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-amber-500 transition-colors duration-200 flex items-center gap-1"
                  >
                    {link.label}
                    {link.href !== '#' && <ExternalLink size={12} />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-semibold text-white tracking-wide uppercase text-xs">
              Talk to Us
            </h4>
            <address className="not-italic space-y-3 text-sm text-neutral-400">
              <p>
                <span className="text-white block font-medium">Headquarters:</span>
                Victoria Island, Lagos, Nigeria.
              </p>
              <p>
                <span className="text-white block font-medium">Contact Lines:</span>
                <a href="tel:+2348100645569" className="hover:text-amber-500 transition-colors">+234 8100645569</a>
              </p>
            </address>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {currentYear} EDEWOR ENERGY LTD. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-neutral-300 transition-colors">Security Policy</a>
            <span className="text-neutral-700">•</span>
            <a href="#" className="hover:text-neutral-300 transition-colors font-mono">UTC TIME: 2026</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
