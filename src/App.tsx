import { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronRight, Globe, MapPin, ShieldCheck, ArrowRight, HelpCircle, FileText, Send, CheckCircle2, Phone, Mail, Linkedin, Twitter, Instagram, Facebook, Palette, Moon, Sun
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'The Process', href: '#process' },
    { name: 'Transparency', href: '#transparency' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-panel !border-x-0 !border-t-0 !rounded-none py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-accent-main rounded-lg flex items-center justify-center">
            <Globe className="text-accent-fg w-6 h-6" />
          </div>
          <span className={`text-xl font-bold tracking-tight italic text-[#000000] dark:text-[#000000]`}>
            NEXMOVE <span className="font-light">GLOBAL</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-accent-main dark:hover:text-accent-main transition-colors">
              {link.name}
            </a>
          ))}
          <button className="px-6 py-2 bg-accent-main text-accent-fg rounded-full text-sm font-semibold hover:opacity-90 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-accent-glow">
            Contact
          </button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-slate-800 dark:text-slate-200">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="absolute top-full left-0 w-full glass-panel !border-x-0 !border-t-0 !rounded-none p-6 md:hidden flex flex-col gap-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-accent-main dark:hover:text-accent-main">
                {link.name}
              </a>
            ))}
            <button className="w-full py-4 bg-accent-main text-accent-fg rounded-xl font-bold mt-2 shadow-lg shadow-accent-glow">
              Contact Us Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 relative z-10 w-full">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-light text-accent-dark dark:text-slate-900 text-xs font-bold uppercase tracking-widest rounded-full w-fit mb-6">
            <span className="flex h-2 w-2 rounded-full bg-accent-main animate-pulse" />
            Your Global Partner
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#000000] dark:text-[#000000] leading-[0.9] tracking-tighter mb-6">
            Your Next Move <br /> 
            Is <span className="text-accent-main">Global.</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-lg leading-relaxed">
            Professional visa consultancy for the USA, Europe, and Canada. We simplify your journey with expert guidance and transparent processing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-accent-main text-accent-fg rounded-xl font-bold flex items-center justify-center gap-2 hover:-translate-y-1 transition-transform shadow-xl shadow-accent-glow group">
              Start Now
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 glass-panel text-slate-900 dark:text-white rounded-xl font-bold items-center justify-center flex hover:bg-slate-100/50 dark:hover:bg-slate-800/50 hover:-translate-y-1 transition-all">
              View Services
            </button>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <img key={i} src={`https://picsum.photos/seed/${i + 20}/100/100`} className="w-12 h-12 rounded-full border-4 border-white dark:border-slate-800 shadow-sm" alt="Client" referrerPolicy="no-referrer" />
              ))}
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900 dark:text-white">10,000+ Applications</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Successfully processed since 2018</p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1, delay: 0.2 }} className="relative hidden md:block">
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl glass-panel p-2">
            <img src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=2000&auto=format&fit=crop" alt="Global Traveler" className="w-full aspect-[4/5] object-cover rounded-[2rem]" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent rounded-[2rem] pointer-events-none" />
          </div>
          
          {/* Floating Card */}
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-10 -left-10 z-20 glass-panel p-6 rounded-2xl flex items-center gap-4 dark:border-white/10">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center">
              <CheckCircle2 className="text-green-600 dark:text-green-400 w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-slate-900 dark:text-white">Success Rate</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm">98.4% Guaranteed</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const destinations = [
    { country: 'USA', desc: 'B1/B2, F1, H1B pathways with comprehensive interview preparation and document review.', img: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=1000&auto=format&fit=crop' },
    { country: 'Europe', desc: 'Schengen visas, study permits, and EU residency programs across 27+ countries.', img: 'https://images.unsplash.com/photo-1490642914619-7955a3fd483c?q=80&w=1000&auto=format&fit=crop' },
    { country: 'Canada', desc: 'Express Entry, Student Visas, and Provincial Nominee Programs tailored for your profile.', img: 'https://images.unsplash.com/photo-1503614472-8c97d45fb41d?q=80&w=1000&auto=format&fit=crop' }
  ];

  return (
    <section id="services" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tighter leading-[0.9] mb-4">Our Elite Services</h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Specialized expertise for the most sought-after global destinations. Expert handling for every unique application case.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {destinations.map((dest, index) => (
          <motion.div key={index} className="glass-panel rounded-3xl p-6 transition-all border-t-2 border-t-white/60 dark:border-t-white/10 flex flex-col h-full hover:translate-y-[-4px] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:hover:shadow-black/50 group">
            <div className="mb-8 overflow-hidden rounded-2xl h-48 relative">
              <img src={dest.img} alt={dest.country} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{dest.country} Visas</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 flex-grow leading-relaxed">
              {dest.desc}
            </p>
            <button className="flex items-center gap-2 font-bold text-accent-main group-hover:gap-3 transition-all">
              Explore Options 
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    { num: '01', title: 'Free Consultation', desc: 'We analyze your profile, history, and goals to determine the best visa path.', icon: <HelpCircle className="w-6 h-6" /> },
    { num: '02', title: 'Documentation', desc: 'Our experts handle the complex paperwork, translations, and certifications.', icon: <FileText className="w-6 h-6" /> },
    { num: '03', title: 'Final Submission', desc: 'We submit your application with precision tracking and interview prep.', icon: <Send className="w-6 h-6" /> }
  ];

  return (
    <section id="process" className="py-24 relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="glass-panel p-10 rounded-3xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#000000] dark:text-[#000000] tracking-tighter leading-[0.9] mb-10">
              The Path to Your Future <br /> <span className="text-accent-main">in 3 Steps</span>
            </h2>
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6 items-start relative">
                  <div className="z-10 mt-2">
                    <div className="w-12 h-12 bg-accent-light text-accent-main rounded-xl flex items-center justify-center mb-4 border border-white/50 dark:border-white/10">
                       {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-accent-main text-accent-fg rounded-[3rem] p-12 relative z-10 shadow-2xl">
              <ShieldCheck className="w-16 h-16 opacity-50 mb-8" />
              <h3 className="text-3xl font-bold mb-6 italic leading-tight">"Our success depends on your global mobility."</h3>
              <p className="opacity-80 mb-8 text-lg">
                We don't just fill forms. We build cases that win. From financial proofs to intent letters, Nexmove handles it all.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/20 rounded-full overflow-hidden border-2 border-white/30 backdrop-blur-sm">
                  <img src="https://picsum.photos/seed/ceo/100/100" alt="CEO" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="font-bold">Hammad Sharif</p>
                  <p className="text-xs uppercase tracking-widest font-bold opacity-70">Chief Consultant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TransparencyDisclaimer = () => {
  return (
    <section id="transparency" className="py-24 px-6 relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto glass-panel rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 p-8 opacity-[0.03] dark:opacity-10 pointer-events-none">
            <ShieldCheck size={300} className="text-slate-900 dark:text-white" />
        </div>
        <div className="relative z-10">
          <div className="w-16 h-16 bg-accent-light rounded-2xl flex items-center justify-center mb-10 border border-white/50 dark:border-white/10">
            <ShieldCheck className="text-accent-main w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tighter leading-[0.9] mb-6">100% Transparency Commitment</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed mb-8">
            Navigating international borders can be complex. At Nexmove Global, we believe in radical transparency. No hidden fees, no false promises. Just factual assessments and strategic planning.
          </p>
          <ul className="grid sm:grid-cols-2 gap-4">
            {['No Hidden Service Costs', 'Direct Govt. Fee Links', 'Live Application Tracking', 'Direct embassy interface'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-800 dark:text-slate-200 font-medium">
                <CheckCircle2 className="text-accent-main w-5 h-5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="glass-panel !border-x-0 !border-b-0 !rounded-none pt-24 pb-12 mt-20 relative z-10 !bg-slate-100 dark:!bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-accent-main rounded-md flex items-center justify-center">
               <Globe className="text-accent-fg w-5 h-5" />
            </div>
            <span className="text-2xl font-bold tracking-tight italic text-slate-900 dark:text-white">NEXMOVE <span className="font-light">GLOBAL</span></span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 max-w-sm text-lg leading-relaxed mb-8">
            Helping thousands of dreams take flight every year. Your trusted partner for global migration and visa services.
          </p>
          <div className="flex gap-4">
            {[Twitter, Facebook, Linkedin, Instagram].map((Icon, idx) => (
              <a key={idx} href="#" className="w-10 h-10 rounded-full glass-panel !shadow-none flex items-center justify-center hover:bg-accent-main dark:hover:bg-accent-main hover:text-accent-fg transition-all hover:-translate-y-1 text-slate-600 dark:text-slate-400">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-8 text-slate-900 dark:text-white">Destinations</h4>
          <ul className="space-y-4 text-slate-500 dark:text-slate-400 font-medium">
            <li><a href="#" className="hover:text-accent-main transition-colors">United States</a></li>
            <li><a href="#" className="hover:text-accent-main transition-colors">United Kingdom</a></li>
            <li><a href="#" className="hover:text-accent-main transition-colors">Canada (Federal)</a></li>
            <li><a href="#" className="hover:text-accent-main transition-colors">Schengen Area</a></li>
            <li><a href="#" className="hover:text-accent-main transition-colors">Australia</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-8 text-slate-900 dark:text-white">Connect</h4>
          <ul className="space-y-4 text-slate-500 dark:text-slate-400 font-medium">
            <li className="flex items-center gap-3"><Phone size={18} className="text-accent-main" />+1 (888) 555-0123</li>
            <li className="flex items-center gap-3"><Mail size={18} className="text-accent-main" />hello@nexmove.global</li>
            <li className="flex items-start gap-3"><MapPin size={18} className="text-accent-main flex-shrink-0 mt-1" />123 Premium Plaza, <br /> Manhattan, NY 10001</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 dark:text-slate-400 text-sm">
        <p>© 2024 Nexmove Global Consultancy. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [theme, setTheme] = useState(''); // '' is Default (Black/White), 'theme-green' is Green
  
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className={`min-h-screen font-sans selection:bg-accent-main selection:text-accent-fg relative ${theme}`}>
      {/* Animated Glassmorphism Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] right-[-10%] w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-accent-light opacity-50 dark:opacity-30 rounded-full blur-[100px] animate-blob mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-sky-200 dark:bg-sky-900 opacity-40 dark:opacity-20 rounded-full blur-[120px] animate-blob mix-blend-multiply dark:mix-blend-screen" style={{ animationDelay: '3s' }} />
        <div className="absolute top-[40%] left-[20%] w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] bg-emerald-100 dark:bg-emerald-900 opacity-40 dark:opacity-20 rounded-full blur-[100px] animate-blob mix-blend-multiply dark:mix-blend-screen" style={{ animationDelay: '6s' }} />
      </div>

      <Navbar />
      
      {/* Settings Widget */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
         <div className="glass-panel p-2 rounded-2xl flex flex-col gap-3 shadow-2xl">
          {/* Dark mode toggle */}
          <button onClick={() => setIsDark(!isDark)} className="w-10 h-10 rounded-full glass-panel !shadow-none flex items-center justify-center hover:scale-110 transition-transform text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-white/10 border-b-0" title="Toggle Dark Mode">
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <div className="w-full h-[1px] bg-slate-200 dark:bg-slate-700"></div>
          {/* Theme toggles */}
          <button onClick={() => setTheme('')} className={`w-8 h-8 mx-auto rounded-full bg-slate-900 dark:bg-slate-100 border-2 ${theme === '' ? 'border-accent-main scale-110' : 'border-white dark:border-slate-800'} hover:scale-110 transition-transform shadow-md`} title="Black Accent" />
          <button onClick={() => setTheme('theme-green')} className={`w-8 h-8 mx-auto rounded-full bg-emerald-500 border-2 ${theme === 'theme-green' ? 'border-white dark:border-slate-800 scale-110 shadow-lg' : 'border-white dark:border-slate-800'} hover:scale-110 transition-transform shadow-md`} title="Green Accent" />
        </div>
        <div className="glass-panel w-12 h-12 flex flex-col items-center justify-center rounded-full shadow-lg text-slate-600 dark:text-slate-300 pointer-events-none border border-slate-300 dark:border-white/10">
          <Palette size={20} />
        </div>
      </div>

      <main className="relative z-10 pb-20">
        <Hero />
        <Services />
        <ProcessSection />
        <TransparencyDisclaimer />
        
        {/* Contact CTA */}
        <section className="py-24 relative z-10 text-center mx-6">
            <div className="max-w-4xl mx-auto glass-panel p-12 md:p-20 rounded-[3rem]">
                <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-8 leading-[0.9] text-[#000000] dark:text-[#000000]">Ready to start <br /> your global journey?</h2>
                <p className="text-slate-600 dark:text-slate-400 text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
                    Schedule a free 15-minute eligibility session with our senior consultants today.
                </p>
                <button className="px-10 py-5 bg-accent-main text-accent-fg rounded-2xl font-black text-lg hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-accent-glow">
                    Book My Consultation
                </button>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
