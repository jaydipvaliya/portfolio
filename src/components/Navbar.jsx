import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home',         href: '#home'         },
  { name: 'About',        href: '#about'        },
  { name: 'Journey',      href: '#journey'      },
  { name: 'Skills',       href: '#skills'       },
  { name: 'Projects',     href: '#projects'     },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact',      href: '#contact'      },
];

export default function Navbar() {
  const [isOpen, setIsOpen]   = useState(false);
  const [active, setActive]   = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: '-40% 0px -55% 0px' }
    );
    navLinks.forEach(l => { const el = document.getElementById(l.href.slice(1)); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const go = href => { setIsOpen(false); document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }); };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      }}>
      <div className="max-w-6xl mx-auto px-6 md:px-16">
        <div className="flex justify-between h-16 items-center">
          <a href="#home" onClick={e => { e.preventDefault(); go('#home'); }}
            className="font-black text-white text-xl tracking-tighter hover:opacity-60 transition-opacity">
            JV<span className="text-white/20">.</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(l => (
              <a key={l.name} href={l.href} onClick={e => { e.preventDefault(); go(l.href); }}
                className={`font-mono text-xs tracking-widest uppercase transition-colors duration-200 ${
                  active === l.href.slice(1) ? 'text-white' : 'text-white/30 hover:text-white/70'
                }`}>
                {l.name}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white/60 hover:text-white p-1">
              {isOpen ? <X size={22}/> : <Menu size={22}/>}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden" style={{ background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="px-6 py-4 flex flex-col">
              {navLinks.map(l => (
                <a key={l.name} href={l.href} onClick={e => { e.preventDefault(); go(l.href); }}
                  className="font-mono text-xs tracking-widest uppercase text-white/40 hover:text-white py-4 border-b border-white/[0.05] transition-colors">
                  {l.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
