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
    <div className="overflow-hidden py-3 md:py-4 border-t border-b border-white/[0.07] my-6 md:my-10" aria-hidden="true">
      <motion.div className="flex gap-10 whitespace-nowrap"
        animate={{ x: ['0%', '-33.33%'] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}>
        {repeated.map((t, i) => (
          <span key={i} className="flex items-center gap-3 text-xs md:text-sm font-mono text-white/35 uppercase tracking-widest shrink-0">
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
    <section id="home" className="min-h-screen flex flex-col justify-center pt-20 pb-10 px-5 md:px-16"
      style={{ background: 'transparent' }}
      aria-label="Jaydip Valiya — Full-Stack Developer introduction">
      <div className="max-w-6xl mx-auto w-full">

        {/* Top row — stacks on mobile */}
        <motion.div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-between gap-3 mb-8 md:mb-10"
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="font-mono text-sm md:text-xl tracking-[0.3em] text-white/30 uppercase">Hi there 👋</span>
          <nav className="flex items-center gap-4" aria-label="Social media links">
            {socials.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={`Visit Jaydip's ${label} profile`}
                className="text-white/25 hover:text-white transition-colors duration-200">
                <Icon size={22}/>
              </a>
            ))}
          </nav>
        </motion.div>

        {/* Main hero content — two-column layout */}
        <div className="grid md:grid-cols-[1fr_300px] gap-8 md:gap-14 items-center">

          {/* Left — text content */}
          <div className="text-center md:text-left">
            {/* Mobile profile image — circular, shown only on small screens */}
            <motion.div className="block md:hidden mb-6 flex justify-center md:justify-start"
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="relative w-24 h-24 overflow-hidden rounded-full" style={{ border: '2px solid rgba(255,255,255,0.1)' }}>
                <img src="https://res.cloudinary.com/dg4c3rylm/image/upload/v1776188220/profile_mytks0.png"
                  alt="Jaydip Valiya"
                  loading="eager"
                  className="w-full h-full object-cover object-center" />
              </div>
            </motion.div>

            {/* Giant name */}
            <div className="overflow-hidden mb-1">
              <motion.h1 className="font-black leading-none text-white"
                style={{ fontSize: 'clamp(2.8rem, 10vw, 8rem)', letterSpacing: '-0.03em' }}
                initial={{ y: '100%' }} animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
                I'm Jaydip
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-5 md:mb-6">
              <motion.p className="font-black leading-none"
                style={{ fontSize: 'clamp(2.8rem, 10vw, 8rem)', letterSpacing: '-0.03em', WebkitTextStroke: '2px rgba(255,255,255,0.22)', color: 'transparent' }}
                initial={{ y: '100%' }} animate={{ y: 0 }}
                transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                aria-label="Valiya">
                Valiya.
              </motion.p>
            </div>

            {/* Descriptor + CTAs */}
            <motion.div className="space-y-5 md:space-y-0 md:flex md:flex-wrap md:items-center md:gap-8 mb-4"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              <p className="text-white/45 text-sm md:text-lg font-light max-w-md leading-relaxed mx-auto md:mx-0">
                Full-Stack Developer based in Gujarat, India. Building scalable MERN-stack products.
                B.Tech CSE @ Swaminarayan University.
              </p>
              <div className="flex gap-3 justify-center md:justify-start md:ml-auto md:shrink-0">
                <button
                  onClick={() => navigate('/contact')}
                  className="flex-1 md:flex-none px-5 md:px-6 py-3 text-sm font-semibold text-black bg-white hover:bg-white/90 transition-colors cursor-pointer"
                  aria-label="Navigate to contact page">
                  Get in Touch
                </button>
                <a
                  href="/resume.pdf" target="_blank" rel="noopener noreferrer"
                  className="flex-1 md:flex-none px-5 md:px-6 py-3 text-sm font-semibold text-white border border-white/20 hover:border-white/50 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  aria-label="View Jaydip's resume">
                  View Resume
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right — Profile card (desktop only) */}
          <motion.div className="relative hidden md:block"
            initial={{ opacity: 0, x: 40, scale: 0.95 }} animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}>
            <div className="relative overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.08)', aspectRatio: '3/4' }}>
              <div className="absolute inset-0">
                <img src="https://res.cloudinary.com/dg4c3rylm/image/upload/v1776188220/profile_mytks0.png" alt="Jaydip Valiya — Full-Stack Developer from Gujarat, India"
                  loading="eager"
                  width="300"
                  height="400"
                  className="w-full h-full object-cover object-center brightness-75"
                  onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
                <div className="hidden absolute inset-0 items-center justify-center" style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <span className="font-black text-6xl text-white/10" aria-hidden="true">JV</span>
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-2/5 pointer-events-none"
                style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.9), transparent)' }} aria-hidden="true" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="font-black text-white text-lg leading-tight" style={{ letterSpacing: '-0.03em' }}>Jaydip Valiya</p>
                <p className="font-mono text-[10px] text-white/35 tracking-widest uppercase mt-1">Full-Stack Developer · Gujarat</p>
              </div>
            </div>
            <div className="absolute -bottom-3 -right-3 inset-0 pointer-events-none -z-10"
              style={{ border: '1px solid rgba(255,255,255,0.04)' }} aria-hidden="true" />
          </motion.div>

        </div>

        {/* Marquee */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          <Marquee />
        </motion.div>

        {/* Scroll hint */}
        <motion.div className="flex items-center gap-2 text-white/20 text-xs font-mono tracking-widest"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
          aria-hidden="true">
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ArrowDown size={14}/>
          </motion.div>
          SCROLL
        </motion.div>
      </div>
    </section>
  );
}