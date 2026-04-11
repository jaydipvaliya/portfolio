import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Code2, Download, ArrowDown } from 'lucide-react';

const socials = [
  { icon: Github,   href: 'https://github.com/jaydipvaliya',                             label: 'GitHub'   },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/jaydip-valiya-a1009737b/',        label: 'LinkedIn' },
  { icon: Twitter,  href: 'https://x.com/JaydipValiya024',                               label: 'Twitter'  },
  { icon: Code2,    href: 'https://leetcode.com/u/jaydip_valiya/',                       label: 'LeetCode' },
];

const tags = ['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Python', 'Git', 'REST APIs', 'C++', 'Figma'];

function Marquee() {
  const repeated = [...tags, ...tags, ...tags];
  return (
    <div className="overflow-hidden py-4 border-t border-b border-white/[0.07] my-10">
      <motion.div className="flex gap-10 whitespace-nowrap"
        animate={{ x: ['0%', '-33.33%'] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}>
        {repeated.map((t, i) => (
          <span key={i} className="flex items-center gap-3 text-sm font-mono text-white/35 uppercase tracking-widest shrink-0">
            <span className="text-white/15">✦</span>{t}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-20 pb-10 px-6 md:px-16"
      style={{ background: 'transparent' }}>
      <div className="max-w-6xl mx-auto w-full">

        {/* Top row */}
        <motion.div className="flex items-center justify-between mb-10"
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="font-mono text-xs tracking-[0.3em] text-white/30 uppercase">Hi there 👋</span>
          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="text-white/25 hover:text-white transition-colors duration-200">
                <Icon size={18}/>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Giant name */}
        <div className="overflow-hidden mb-1">
          <motion.h1 className="font-black leading-none text-white"
            style={{ fontSize: 'clamp(3.5rem, 12vw, 9rem)', letterSpacing: '-0.03em' }}
            initial={{ y: '100%' }} animate={{ y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            I'm Jaydip
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-6">
          <motion.h1 className="font-black leading-none"
            style={{ fontSize: 'clamp(3.5rem, 12vw, 9rem)', letterSpacing: '-0.03em', WebkitTextStroke: '1px rgba(255,255,255,0.22)', color: 'transparent' }}
            initial={{ y: '100%' }} animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}>
            Valiya.
          </motion.h1>
        </div>

        {/* Descriptor + CTAs */}
        <motion.div className="flex flex-wrap items-center gap-4 md:gap-8 mb-4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <p className="text-white/45 text-base md:text-lg font-light max-w-md leading-relaxed">
            Full-Stack Developer based in Gujarat, India. Building scalable MERN-stack products.
            B.Tech CSE @ Swaminarayan University.
          </p>
          <div className="ml-auto flex gap-3 shrink-0">
            <button
              onClick={() => navigate('/contact')}
              className="px-6 py-3 text-sm font-semibold text-black bg-white hover:bg-white/90 transition-colors cursor-pointer">
              Get in Touch
            </button>
            <a href="/resume.pdf" download="Jaydip_Valiya_Resume.pdf"
              className="px-6 py-3 text-sm font-semibold text-white border border-white/20 hover:border-white/50 transition-colors flex items-center gap-2">
              <Download size={15}/> Resume
            </a>
          </div>
        </motion.div>

        {/* Marquee */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          <Marquee />
        </motion.div>

        {/* Scroll hint */}
        <motion.div className="flex items-center gap-2 text-white/20 text-xs font-mono tracking-widest"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ArrowDown size={14}/>
          </motion.div>
          SCROLL
        </motion.div>
      </div>
    </section>
  );
}