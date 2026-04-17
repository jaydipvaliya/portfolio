import { ArrowUp, Github, Linkedin, Twitter, Mail, Code2 } from 'lucide-react';

const links = [
  { name: 'GitHub',   href: 'https://github.com/jaydipvaliya', icon: Github, external: true },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/jaydip-valiya-a1009737b/', icon: Linkedin, external: true },
  { name: 'LeetCode', href: 'https://leetcode.com/u/jaydip_valiya/', icon: Code2, external: true },
  { name: 'Twitter',  href: 'https://x.com/JaydipValiya024', icon: Twitter, external: true },
  { name: 'Email',    href: 'mailto:jaydip.valiya.cg@gmail.com', icon: Mail, external: true },
];

export default function Footer() {
  return (
    <footer className="px-6 md:px-16 pb-10" style={{ background: 'transparent', borderTop: '1px solid rgba(255,255,255,0.06)' }}
      role="contentinfo">
      <div className="max-w-6xl mx-auto pt-8">
        {/* Top row: Back to top button */}
        <div className="flex justify-end items-center mb-6">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group"
            aria-label="Scroll to top">
            <span className="font-mono text-xs tracking-widest uppercase text-white/30 group-hover:text-white/80 transition-colors">
              Back to Top
            </span>
            <div className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 group-hover:border-white/30 bg-white/5 group-hover:bg-white/10 transition-all">
              <ArrowUp size={16} className="text-white/50 group-hover:text-white transition-colors"/>
            </div>
          </button>
        </div>

        {/* Bottom row: socials + copyright */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <nav className="flex flex-wrap gap-5" aria-label="Social links">
            {links.map(({ name, href, icon: Icon }) => (
              <a key={name} href={href}
                target={href.startsWith('mailto:') ? '_self' : '_blank'}
                rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="text-white/30 hover:text-white hover:scale-110 transition-all duration-300"
                aria-label={`Visit ${name}`}>
                <Icon size={18} strokeWidth={1.5} />
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