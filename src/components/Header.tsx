import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onScrollTo: (id: string) => void;
  activeSection: string;
}

export default function Header({ onScrollTo, activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onScrollTo(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-neutral-200/50 shadow-md py-4'
            : 'bg-transparent py-5 md:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-1.5 focus:outline-none cursor-pointer group"
          >
            <span className="font-display text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300">
              <span className="text-amber-500">EDEWOR</span>{' '}
              <span className={isScrolled ? 'text-neutral-900' : 'text-white'}>ENERGY</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className={`hidden md:flex items-center gap-8 font-sans text-[15px] font-medium transition-colors duration-300 ${
            isScrolled ? 'text-neutral-600' : 'text-white/80'
          }`}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative py-1.5 transition-colors duration-200 hover:text-amber-500 cursor-pointer ${
                  activeSection === item.id 
                    ? isScrolled ? 'text-neutral-950 font-semibold' : 'text-white font-semibold'
                    : ''
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500 rounded-full"
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Header Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => handleNavClick('contact')}
              className={`px-5 py-2.5 font-semibold text-sm rounded-xl transition-all duration-300 flex items-center gap-1.5 cursor-pointer border ${
                isScrolled
                  ? 'bg-amber-600 hover:bg-amber-700 text-white border-transparent shadow shadow-amber-600/10'
                  : 'bg-[#dfa759] hover:bg-[#cb8b36] text-neutral-950 border-amber-500/20 shadow-lg shadow-amber-500/10'
              }`}
            >
              Partner With Us
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 focus:outline-none cursor-pointer transition-colors duration-300 ${
              isScrolled ? 'text-neutral-700' : 'text-white'
            }`}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile menu container */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 pt-24 pb-6 px-5 bg-white md:hidden flex flex-col justify-between transition-opacity duration-200"
        >
          <div className="flex flex-col gap-5 mt-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left font-display text-xl font-semibold py-2.5 border-b border-neutral-100 ${
                  activeSection === item.id ? 'text-amber-600' : 'text-neutral-850'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full py-3.5 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-xl text-center shadow-lg shadow-amber-600/15"
            >
              Partner With Us
            </button>
            <p className="text-center text-xs text-neutral-400 font-sans mt-2">
              © 2026 EDEWOR ENERGY LTD.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
