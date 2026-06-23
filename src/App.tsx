import { useState, useEffect, FormEvent } from 'react';
import {
  ShieldCheck,
  Award,
  Leaf,
  Briefcase,
  Zap,
  Cpu,
  Flame,
  Network,
  Globe,
  Wrench,
  Building,
  Building2,
  Layers,
  ArrowRight,
  Send,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Sparkles,
  Info,
  ChevronRight,
  ArrowUp
} from 'lucide-react';

// Import local modular resources
import { ABOUT_FEATURES, SERVICES, PARTNER_REASONS, STATS, INDUSTRIES } from './data';
import { Service, Feature, InquiryForm } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import ServiceModal, { LucideIcon } from './components/ServiceModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  
  // Back to top indicator
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Form states
  const [form, setForm] = useState<InquiryForm>({
    fullName: '',
    email: '',
    inquiryType: 'EPC Projects',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Scroll tracking to update navigation active indicators
  useEffect(() => {
    const handleScroll = () => {
      // Toggle back to top button
      setShowBackToTop(window.scrollY > 400);

      const sections = ['home', 'about', 'services', 'contact'];
      const scrollPosition = window.scrollY + 180; // offset

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll helper
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // header spacing
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  // Form submission simulated handler
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.message) {
      return;
    }
    setIsSubmitting(true);
    
    // Simulate premium submission sequence and open mail client redirect
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);

      const subject = encodeURIComponent(`New Inquiry: ${form.inquiryType} from ${form.fullName}`);
      const body = encodeURIComponent(
        `Name: ${form.fullName}\n` +
        `Email: ${form.email}\n` +
        `Inquiry Type: ${form.inquiryType}\n\n` +
        `Message:\n${form.message}`
      );
      window.location.href = `mailto:info@edeworenergy.com?subject=${subject}&body=${body}`;

      // clean form
      setForm({
        fullName: '',
        email: '',
        inquiryType: 'EPC Projects',
        message: ''
      });
      // automatically hide success state after 6 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#f4f4f4] text-neutral-800 selection:bg-amber-100 selection:text-amber-800 transition-colors duration-300">
      
      {/* Header/Nav */}
      <Header onScrollTo={handleScrollTo} activeSection={activeSection} />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-neutral-950"
      >
        {/* Dark elegant hero image background with custom overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/hero.jpg"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (target.src.endsWith('/assets/hero.jpg')) {
                target.src = "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1920&auto=format&fit=crop";
              }
            }}
            alt="Nigeria power station with reflecting pool at twilight"
            className="w-full h-full object-cover opacity-85 filter brightness-105 contrast-110 saturate-105 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          {/* Subtle horizontal gradient to protect text readability on the left, leaving the glowing plant on the right fully visible */}
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/70 to-neutral-950/20 md:from-neutral-950/95 md:via-neutral-950/60 md:to-transparent" />
          {/* Vertical gradient to blend smoothly with header and the sections below */}
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-transparent to-[#0a1120]" />
        </div>
        <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-amber-500/10 blur-[90px] pointer-events-none z-10" />
        <div className="absolute bottom-1/4 left-10 w-96 h-96 rounded-full bg-blue-500/10 blur-[130px] pointer-events-none z-10" />

        <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero text */}
          <div className="lg:col-span-8 flex flex-col items-start space-y-6 text-left">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900/60 border border-amber-500/30 text-amber-500 font-display text-xs font-semibold uppercase tracking-wider shadow-sm backdrop-blur-sm animate-pulse">
              <Sparkles size={12} className="text-amber-500" />
              NIGERIA'S PREMIER ENERGY PARTNER
            </span>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
              Powering Nigeria's <br />
              <span className="text-[#dfa759] bg-gradient-to-r from-[#dfa759] to-amber-500 bg-clip-text text-transparent animate-pulse">Energy Future</span>
            </h1>

            <p className="text-neutral-300 font-sans text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl font-normal">
              Delivering reliable power generation, energy infrastructure, EPC solutions and gas-to-power services for industrial, commercial and institutional clients.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-3">
              <button
                onClick={() => handleScrollTo('contact')}
                className="px-8 py-4 bg-[#dfa759] hover:bg-[#cb8b36] text-neutral-950 font-bold rounded-xl text-center shadow-lg shadow-amber-500/10 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                Get In Touch
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => handleScrollTo('services')}
                className="px-8 py-4 bg-transparent hover:bg-white/5 text-white font-semibold rounded-xl text-center border-2 border-white/20 hover:border-[#dfa759] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
              >
                Our Services
              </button>
            </div>
          </div>

          {/* Quick Floating Cards on Right side for premium display feel */}
          <div className="lg:col-span-4 hidden lg:block relative z-10">
            <div className="space-y-4">
              <div className="bg-slate-900/40 backdrop-blur-md p-5 rounded-2xl border border-white/10 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-20 h-20 bg-amber-500/5 rounded-full -mr-5 -mt-5" />
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-amber-500/10 text-[#dfa759] rounded-xl border border-amber-500/20">
                    <Zap size={22} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white">High-uptime Supply</h4>
                    <p className="text-xs text-neutral-300 font-sans mt-1">Ensuring local heavy manufacturing never halts.</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/40 backdrop-blur-md p-5 rounded-2xl border border-white/10 shadow-xl relative overflow-hidden group ml-6">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full -mr-5 -mt-5" />
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-white/5 text-neutral-200 rounded-xl border border-white/10">
                    <Cpu size={22} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white">Custom Engineering</h4>
                    <p className="text-xs text-neutral-300 font-sans mt-1">Turnkey solutions for specialized load demands.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-stretch items-start">
            
            {/* Left side Content Column */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-600 font-bold block">
                  PIONEERING NIGERIAN ENERGIES
                </span>
                <h2 className="font-display text-4xl font-extrabold text-neutral-900 leading-tight">
                  About <span className="text-amber-600">EDEWOR ENERGY LTD</span>
                </h2>
                <div className="h-1 w-20 bg-amber-500 rounded-full" />
              </div>

              <div className="space-y-4 text-neutral-600 font-sans text-[15px] sm:text-base leading-relaxed">
                <p>
                  EDEWOR ENERGY LTD is a distinguished leader in Nigeria's energy landscape, committed to bridging the power deficit through innovative engineering and strategic infrastructure development. We specialize in end-to-end energy solutions that empower industries and communities.
                </p>
                <p>
                  With a foundation built on technical excellence and local market intelligence, we deliver complex EPC projects and sustainable power solutions that meet the highest international standards of safety and efficiency.
                </p>
              </div>

              {/* 4 Feature Subgrids inside About */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {ABOUT_FEATURES.map((feat) => (
                  <div
                    key={feat.id}
                    className="p-5 rounded-2xl bg-[#f4f4f4]/60 border border-neutral-100/80 hover:bg-[#f4f4f4]/90 transition-colors duration-200 group"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="p-2.5 bg-white text-amber-600 rounded-xl shadow-sm border border-neutral-100 group-hover:scale-105 transition-transform">
                        <LucideIcon name={feat.iconName} size={18} />
                      </div>
                      <h4 className="font-display font-bold text-neutral-900 text-sm md:text-base">
                        {feat.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-500 font-sans mt-2.5 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side Portrait Image with Quote */}
            <div className="lg:col-span-5 relative h-auto lg:h-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-100 h-auto lg:h-full">
                <img
                  src="/assets/about.png"
                  alt="Solar array and professional engineers with tablet"
                  className="w-full h-auto lg:h-full lg:object-cover filter brightness-95"
                  referrerPolicy="no-referrer"
                />
                
                {/* Embedded overlay gradient to mirror the visual style safely and render legible quotes */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-900/10 to-transparent flex flex-col justify-end p-6 md:p-8" />
                
                <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:right-8 border-l-4 border-amber-500 pl-4 text-white">
                  <p className="italic text-sm md:text-base font-semibold font-sans leading-relaxed">
                    "Our mission is to catalyze Nigeria's industrial growth by providing the backbone of modern energy infrastructure."
                  </p>
                  <span className="block mt-2 font-display text-xs uppercase tracking-wider font-bold text-amber-500">
                    Edewor Leadership Vision
                  </span>
                </div>
              </div>

              {/* Decorative Accent Ring */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-500/10 rounded-full -z-10 blur-xl" />
            </div>

          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section id="services" className="py-24 bg-[#f4f4f4]">
        <div className="max-w-7xl mx-auto px-5 md:px-8 text-center space-y-12">
          
          {/* Heading */}
          <div className="max-w-xl mx-auto space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-600 font-bold">
              WHAT WE EXCEL AT
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-900">
              Our <span className="text-amber-600 relative inline-block">
                Core Services
                <span className="absolute bottom-1 left-0 right-0 h-1 bg-amber-500/30 rounded" />
              </span>
            </h2>
            <p className="font-sans text-neutral-500 text-sm md:text-base">
              Comprehensive energy solutions tailored to meet the dynamic needs of Nigeria's growing economy.
            </p>
          </div>

          {/* Grid of 6 Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {SERVICES.map((serv) => (
              <div
                key={serv.id}
                onClick={() => setSelectedService(serv)}
                className="bg-white p-6 rounded-2xl border border-neutral-150 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between items-start text-left cursor-pointer group"
              >
                <div className="space-y-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600 border border-amber-100 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                    <LucideIcon name={serv.iconName} size={20} />
                  </div>
                  <h3 className="font-display font-extrabold text-lg text-neutral-900 group-hover:text-amber-700 transition-colors">
                    {serv.title}
                  </h3>
                  <p className="text-neutral-500 text-[13.5px] font-sans leading-relaxed">
                    {serv.description}
                  </p>
                </div>
                
                <button className="mt-5 text-xs font-bold text-amber-600 flex items-center gap-1 group-hover:text-amber-700 transition-colors">
                  Learn More
                  <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Why Partner With Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Col Benefits */}
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-600 font-bold block">
                  THE EDEWOR ADVANTAGE
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-900">
                  Why Partner <span className="text-amber-600">With Us</span>
                </h2>
                <p className="text-neutral-500 font-sans text-sm md:text-[15px] leading-relaxed max-w-lg">
                  We deploy engineering expertise alongside extensive commercial knowledge to accelerate project success and ensure absolute grid durability.
                </p>
              </div>

              {/* Bullet Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {PARTNER_REASONS.map((reason, idx) => (
                  <div key={idx} className="flex gap-3.5 items-start">
                    <div className="p-1 rounded-full bg-amber-50 text-amber-600 border border-amber-100 shrink-0 mt-0.5">
                      <CheckCircle2 size={16} />
                    </div>
                    <div>
                      <h4 className="font-display font-extrabold text-[15px] text-neutral-900">
                        {reason.title}
                      </h4>
                      <p className="text-xs text-neutral-500 font-sans mt-1.5 leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Col 2x2 Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-[#f4f4f4]/60 p-6 sm:p-8 rounded-2xl border border-neutral-100/80 text-center flex flex-col justify-center items-center group hover:bg-[#f4f4f4] transition-colors"
                >
                  <span className="font-display text-4xl sm:text-5xl font-extrabold text-amber-600 tracking-tight group-hover:scale-105 transition-transform duration-200">
                    {stat.value}
                  </span>
                  <span className="font-mono text-[10px] sm:text-xs text-neutral-500 tracking-widest font-semibold uppercase mt-3 text-center">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Industries We Support Section */}
      <section className="py-16 bg-[#eef0f2] border-t border-b border-neutral-200/50">
        <div className="max-w-7xl mx-auto px-5 md:px-8 text-center space-y-8">
          <p className="font-mono text-xs uppercase tracking-widest text-neutral-500 font-bold">
            Industries We <span className="text-amber-600">Support</span>
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {INDUSTRIES.map((ind, idx) => (
              <div
                key={idx}
                className="bg-white px-4 py-5 rounded-xl border border-neutral-100/70 shadow-sm flex flex-col items-center gap-3 hover:shadow-md hover:border-amber-500/20 transition-all cursor-default group"
              >
                <div className="p-2 rounded-lg bg-neutral-50 text-neutral-500 group-hover:bg-amber-50 group-hover:text-amber-600 transition-colors">
                  <LucideIcon name={ind.iconName} size={18} />
                </div>
                <span className="font-display text-xs font-bold text-neutral-800 tracking-tight">
                  {ind.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-24 bg-white relative">
        <div className="absolute top-1/2 right-10 w-96 h-96 rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left contact card info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-600 font-bold block">
                  READY TO POWER YOUR FACILITY
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-900 col-span-12">
                  Let's Discuss Your <span className="text-amber-600">Energy Needs</span>
                </h2>
                <p className="text-neutral-500 font-sans text-sm md:text-base leading-relaxed">
                  Connect with our team for professional energy advisory, project partnership, or technical inquiries.
                </p>
              </div>

              {/* Direct Info list */}
              <div className="space-y-4 font-sans">
                <a
                  href="mailto:info@edeworenergy.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#f4f4f4]/60 hover:bg-[#f4f4f4] border border-neutral-100/50 transition-colors group"
                >
                  <div className="p-2.5 bg-amber-50 text-amber-600 rounded-lg group-hover:scale-105 transition-transform">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold text-neutral-400 uppercase tracking-wider font-mono">Email Us</span>
                    <span className="text-sm font-semibold text-neutral-800">info@edeworenergy.com</span>
                  </div>
                </a>

                <a
                  href="tel:+2348100645569"
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#f4f4f4]/60 hover:bg-[#f4f4f4] border border-neutral-100/50 transition-colors group"
                >
                  <div className="p-2.5 bg-amber-50 text-amber-600 rounded-lg group-hover:scale-105 transition-transform">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold text-neutral-400 uppercase tracking-wider font-mono">Call Our Office</span>
                    <span className="text-sm font-semibold text-neutral-800">+234 8100645569</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-[#f4f4f4]/60 border border-neutral-100/50 transition-colors group">
                  <div className="p-2.5 bg-amber-50 text-amber-600 rounded-lg group-hover:scale-105 transition-transform">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold text-neutral-400 uppercase tracking-wider font-mono">Main Office</span>
                    <span className="text-sm font-semibold text-neutral-800">Victoria Island, Lagos, Nigeria</span>
                  </div>
                </div>
              </div>

              {/* Energy corporate Hub image */}
              <div className="rounded-xl overflow-hidden shadow-md border border-neutral-100">
                <img
                  src="/assets/facility.png"
                  alt="Edewor Energy Hub Futuristic curved eco-architectural facility"
                  className="w-full object-cover h-48 filter brightness-95 saturate-90 hover:brightness-100 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Right form submission space */}
            <div className="lg:col-span-7">
              <div className="bg-[#f4f4f4]/80 p-6 md:p-8 rounded-2xl border border-neutral-150 relative">
                
                <h3 className="font-display font-extrabold text-xl text-neutral-900 mb-6">
                  Inquiry Submission Form
                </h3>

                <form onSubmit={handleFormSubmit} className="space-y-5 font-sans">
                  
                  {/* Name & Email inputs row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="fullName" className="text-xs font-bold text-neutral-500 uppercase tracking-wide">
                        Full Name
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        placeholder="John Doe"
                        value={form.fullName}
                        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 text-sm placeholder:text-neutral-400 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-bold text-neutral-500 uppercase tracking-wide">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 text-sm placeholder:text-neutral-400 transition-all"
                      />
                    </div>
                  </div>

                  {/* Inquiry Dropdown */}
                  <div className="space-y-1.5">
                    <label htmlFor="inquiryType" className="text-xs font-bold text-neutral-500 uppercase tracking-wide">
                      Inquiry Type
                    </label>
                    <div className="relative">
                      <select
                        id="inquiryType"
                        value={form.inquiryType}
                        onChange={(e) => setForm({ ...form, inquiryType: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 text-sm text-neutral-800 transition-all appearance-none cursor-pointer"
                      >
                        <option value="EPC Projects">EPC Projects</option>
                        <option value="Electricity Generation">Electricity Generation & Supply</option>
                        <option value="Gas Solutions">Gas Supply Solutions</option>
                        <option value="Energy Infrastructure">Energy Infrastructure Development</option>
                        <option value="Consultancy Advisory">Energy Consultancy</option>
                        <option value="Equipment Import">Equipment Import & Sourcing</option>
                      </select>
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-neutral-400">
                        <ChevronRight className="rotate-90" size={16} />
                      </div>
                    </div>
                  </div>

                  {/* Message box */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-bold text-neutral-500 uppercase tracking-wide">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="How can we help power your project?"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 text-sm placeholder:text-neutral-400 resize-none transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    id="submitInquiry"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 bg-amber-600 hover:bg-amber-700 disabled:bg-neutral-300 text-white font-semibold rounded-xl text-center shadow-lg shadow-amber-600/10 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Deploying Inquiry...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Inquiry
                      </>
                    )}
                  </button>

                  {/* Success Banner Overlay inside Card */}
                  {submitSuccess && (
                    <div
                      className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start gap-3 mt-4 animate-in fade-in slide-in-from-bottom-2 duration-200"
                    >
                      <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                      <div>
                        <span className="block font-bold text-sm">Inquiry Succeeded!</span>
                        <span className="block text-xs text-emerald-700 mt-1 font-sans leading-relaxed">
                          Thank you for reaching out to EDEWOR ENERGY LTD. Our technical team has been notified and will contact you back shortly.
                        </span>
                      </div>
                    </div>
                  )}

                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer onScrollTo={handleScrollTo} />

      {/* Service Modal detailed overlay */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />

      {/* Back to Top Circular button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-30 w-11 h-11 bg-white hover:bg-neutral-50 text-neutral-700 rounded-full border border-neutral-200 shadow-lg flex items-center justify-center hover:-translate-y-1 transition-all duration-200 cursor-pointer animate-in fade-in zoom-in-95"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      )}

    </div>
  );
}
