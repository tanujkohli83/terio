import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Hexagon } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Intit', href: '#' },
    { name: 'Leaderboard', href: '#' },
    { name: 'Factions', href: '#how-it-works' },
    { name: 'Rewards', href: '#' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-md border-b border-white/5 h-16' : 'bg-transparent h-20'
      }`}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo(0, 0)}>
          <div className="relative">
             <Hexagon className="w-8 h-8 text-neon-blue group-hover:rotate-180 transition-transform duration-500" />
             <div className="absolute inset-0 bg-neon-blue/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <span className="text-sm font-black tracking-[0.2em] text-white uppercase hidden sm:block">Territory Fitness</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-secondary hover:text-neon-blue transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#waitlist" className="bg-neon-blue text-black py-2 px-6 rounded-lg font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-all box-glow-cyan shadow-[0_0_15px_rgba(0,240,255,0.3)]">
            Launch App
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-white/10"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <a key={link.name} onClick={() => setIsMobileMenuOpen(false)} href={link.href} className="text-xs font-bold uppercase tracking-widest text-text-secondary">
                  {link.name}
                </a>
              ))}
              <a href="#waitlist" className="text-neon-blue font-black uppercase text-xs tracking-widest">Launch App</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
