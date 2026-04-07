const links = [
  { name: 'GitHub',   href: 'https://github.com/jaydipvaliya' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/jaydip-valiya-a1009737b/' },
  { name: 'LeetCode', href: 'https://leetcode.com/u/jaydip_valiya/' },
  { name: 'Twitter',  href: 'https://x.com/JaydipValiya024' },
  { name: 'Email',    href: 'mailto:jaydip.valiya.cg@gmail.com' },
];

export default function Footer() {
  return (
    <footer className="px-6 md:px-16 pb-10" style={{ background: 'transparent', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-6xl mx-auto pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <span className="font-black text-white/80 text-lg tracking-tighter">
          JV<span className="text-white/15">.</span>
        </span>
        <div className="flex flex-wrap gap-6">
          {links.map(({ name, href }) => (
            <a key={name} href={href}
              target={href.startsWith('mailto:') ? '_self' : '_blank'}
              rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className="font-mono text-xs tracking-widest uppercase text-white/25 hover:text-white/70 transition-colors">
              {name}
            </a>
          ))}
        </div>
        <span className="font-mono text-xs text-white/15 tracking-widest">© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}