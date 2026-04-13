import { Link } from 'react-router-dom';

const links = [
  { name: 'GitHub',   href: 'https://github.com/jaydipvaliya', external: true },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/jaydip-valiya-a1009737b/', external: true },
  { name: 'LeetCode', href: 'https://leetcode.com/u/jaydip_valiya/', external: true },
  { name: 'Twitter',  href: 'https://x.com/JaydipValiya024', external: true },
  { name: 'Email',    href: 'mailto:jaydip.valiya.cg@gmail.com', external: true },
];

const navLinks = [
  { name: 'Home',         to: '/'             },
  { name: 'About',        to: '/about'        },
  { name: 'Journey',      to: '/journey'      },
  { name: 'Skills',       to: '/skills'       },
  { name: 'Projects',     to: '/projects'     },
  { name: 'Certificates', to: '/certificates' },
  { name: 'Contact',      to: '/contact'      },
];

export default function Footer() {
  return (
    <footer className="px-6 md:px-16 pb-10" style={{ background: 'transparent', borderTop: '1px solid rgba(255,255,255,0.06)' }}
      role="contentinfo">
      <div className="max-w-6xl mx-auto pt-8">
        {/* Top row: logo + nav links */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6">
          <Link to="/" className="font-black text-white/80 text-lg tracking-tighter hover:opacity-60 transition-opacity"
            aria-label="Jaydip Valiya — Home">
            JV<span className="text-white/15" aria-hidden="true">.</span>
          </Link>
          <nav className="flex flex-wrap gap-4" aria-label="Footer navigation">
            {navLinks.map(({ name, to }) => (
              <Link key={name} to={to}
                className="font-mono text-xs tracking-widest uppercase text-white/20 hover:text-white/60 transition-colors">
                {name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom row: socials + copyright */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <nav className="flex flex-wrap gap-6" aria-label="Social links">
            {links.map(({ name, href }) => (
              <a key={name} href={href}
                target={href.startsWith('mailto:') ? '_self' : '_blank'}
                rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="font-mono text-xs tracking-widest uppercase text-white/25 hover:text-white/70 transition-colors"
                aria-label={`Visit ${name}`}>
                {name}
              </a>
            ))}
          </nav>
          <span className="font-mono text-xs text-white/15 tracking-widest">
            © {new Date().getFullYear()} Jaydip Valiya
          </span>
        </div>
      </div>
    </footer>
  );
}