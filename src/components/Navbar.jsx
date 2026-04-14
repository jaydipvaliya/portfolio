import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home',         to: '/'              },
  { name: 'About',        to: '/about'         },
  { name: 'Journey',      to: '/journey'       },
  { name: 'Skills',       to: '/skills'        },
  { name: 'Projects',     to: '/projects'      },
  { name: 'Certificates', to: '/certificates'  },
  { name: 'Contact',      to: '/contact'       },
];

export default function Navbar() {
  const [isOpen, setIsOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      role="navigation"
      aria-label="Main navigation"
      style={{
        background: scrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      }}>
      <div className="max-w-6xl mx-auto px-6 md:px-16">
        <div className="flex justify-between h-16 items-center">
          <NavLink to="/"
            className="font-black text-white text-xl tracking-tighter hover:opacity-60 transition-opacity"
            aria-label="Jaydip Valiya — Home">
            JV<span className="text-white/20" aria-hidden="true">.</span>
          </NavLink>
          <div className="hidden md:flex items-center ">
            {navLinks.map(l => (
              <NavLink key={l.name} to={l.to}
                className={({ isActive }) =>
                  `font-mono text-xs tracking-widest uppercase transition-colors duration-200 p-4 ${
                    isActive ? 'text-white' : 'text-white/30 hover:text-white/70'
                  }`
                }
                end={l.to === '/'}
              >
                {l.name}
              </NavLink>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}
              className="text-white/60 hover:text-white p-1"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}>
              {isOpen ? <X size={22}/> : <Menu size={22}/>}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
            style={{ background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.06)' }}
            role="menu">
          <div className="px-6 py-2 flex flex-col">
              {navLinks.map(l => (
                <NavLink
                  key={l.name}
                  to={l.to}
                  end={l.to === '/'}
                  role="menuitem"
                  className={({ isActive }) =>
                    `text-left font-mono text-sm tracking-widest uppercase py-4 border-b border-white/[0.05] transition-colors w-full flex items-center justify-between ${
                      isActive ? 'text-white' : 'text-white/40 hover:text-white/80'
                    }`
                  }
                >
                  {l.name}
                  {location.pathname === l.to && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white/60" aria-hidden="true" />
                  )}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}