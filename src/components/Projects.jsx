import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  { title: 'Ekagra App',         desc: 'A productivity and focus app built with React and Node.js to help users manage tasks and eliminate distractions.',                 tech: ['React','Node.js','MongoDB'],   tags: ['React','Fullstack'],          github: 'https://github.com/jaydipvaliya' },
  { title: 'Bentley Clone',      desc: 'A pixel-perfect clone of the Bentley Motors website showcasing advanced CSS animations and responsive design.',                   tech: ['HTML','CSS','JavaScript'],     tags: ['Clone','CSS'],                github: 'https://github.com/jaydipvaliya' },
  { title: 'DJI Clone',          desc: "Frontend clone of DJI's product landing page with smooth scroll animations and interactive product showcases.",                   tech: ['HTML','CSS','JavaScript'],     tags: ['Clone','CSS'],                github: 'https://github.com/jaydipvaliya' },
  { title: 'Udaan Clone',        desc: 'Full-stack e-commerce clone inspired by Udaan B2B platform with product listings and cart management.',                           tech: ['React','Express','MongoDB'],   tags: ['React','Fullstack','Clone'],  github: 'https://github.com/jaydipvaliya' },
  { title: 'Memory Flip Game',   desc: 'Classic memory card-matching game with multiple difficulty levels, score tracking, and smooth flip animations.',                  tech: ['React','CSS'],                 tags: ['React','Game'],               github: 'https://github.com/jaydipvaliya' },
  { title: 'Color Guessing Zone',desc: 'Interactive color guessing game to train your eye for exact RGB values with a leaderboard and timer.',                            tech: ['JavaScript','HTML','CSS'],     tags: ['JavaScript','Game'],          github: 'https://github.com/jaydipvaliya' },
  { title: 'Whack-a-Mole',       desc: 'Browser-based whack-a-mole arcade game with increasing speed levels and high score tracking.',                                   tech: ['JavaScript','HTML','CSS'],     tags: ['JavaScript','Game'],          github: 'https://github.com/jaydipvaliya' },
  { title: 'Drop Clone',         desc: 'Frontend clone of the Dropbox landing page with responsive layout and clean modern design.',                                      tech: ['HTML','CSS'],                  tags: ['Clone','CSS'],                github: 'https://github.com/jaydipvaliya' },
  { title: 'Click Counter',      desc: 'Minimalist click-counter web app with animated count display, reset functionality, and keyboard shortcuts.',                      tech: ['JavaScript','HTML','CSS'],     tags: ['JavaScript'],                 github: 'https://github.com/jaydipvaliya' },
];

const filters = ['All','React','Fullstack','Clone','Game','JavaScript','CSS'];

const tagAccent = { React:'#4CC9F0', Fullstack:'#A78BFA', Clone:'#FB923C', Game:'#4ADE80', JavaScript:'#FACC15', CSS:'#F472B6' };
const getAccent = tags => tagAccent[tags[0]] || '#ffffff';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-24 px-6 md:px-16" style={{ background: 'transparent' }}>
      <div className="max-w-6xl mx-auto">

        <motion.div className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="font-mono text-xs tracking-[0.3em] text-white/30 uppercase">05 / Projects</span>
          <div className="flex-1 h-px bg-white/10"/>
        </motion.div>

        <div className="mb-12">
          <div className="overflow-hidden">
            <motion.h2 className="font-black text-white leading-none"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', letterSpacing: '-0.03em' }}
              initial={{ y: '100%' }} whileInView={{ y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}>
              SELECTED
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2 className="font-black leading-none"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', letterSpacing: '-0.03em', WebkitTextStroke: '1px rgba(255,255,255,0.2)', color: 'transparent' }}
              initial={{ y: '100%' }} whileInView={{ y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.07, ease: [0.16, 1, 0.3, 1] }}>
              WORK.
            </motion.h2>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2.5 mb-12">
          {filters.map(f => (
            <button key={f} onClick={() => setActiveFilter(f)}
              className={`font-mono text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-200 ${
                activeFilter === f ? 'text-white border-white/40 bg-white/[0.06]' : 'text-white/25 border-white/[0.07] hover:text-white/60 hover:border-white/20'
              }`}>
              {f}
            </button>
          ))}
        </div>

        {/* Cards */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => {
              const accent = getAccent(p.tags);
              return (
                <motion.div key={p.title} layout
                  initial={{ opacity: 0, y: 24, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.05, type: 'spring', stiffness: 120, damping: 18 }}
                  whileHover={{ y: -6 }}
                  className="group relative flex flex-col overflow-hidden cursor-default"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', transition: 'border-color 0.3s, box-shadow 0.3s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor=`${accent}50`; e.currentTarget.style.boxShadow=`0 0 40px ${accent}18`; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.07)'; e.currentTarget.style.boxShadow='none'; }}>

                  <div className="h-[2px] w-full shrink-0"
                    style={{ background: `linear-gradient(90deg, ${accent}90, ${accent}20, transparent)` }}/>

                  <span className="absolute top-4 right-4 font-mono text-[11px] text-white/10 group-hover:text-white/25 transition-colors select-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <div className="flex flex-col flex-1 p-5 pt-4">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="font-black text-white/75 group-hover:text-white transition-colors text-base leading-snug" style={{ letterSpacing: '-0.02em' }}>
                        {p.title}
                      </h3>
                      {p.github && (
                        <a href={p.github} target="_blank" rel="noopener noreferrer"
                          className="text-white/20 hover:text-white transition-colors shrink-0 mt-0.5"
                          onClick={e => e.stopPropagation()}>
                          <ArrowUpRight size={16}/>
                        </a>
                      )}
                    </div>

                    <p className="text-white/35 text-sm font-light leading-relaxed flex-1 group-hover:text-white/55 transition-colors">
                      {p.desc}
                    </p>

                    <div className="mt-5 pt-4 border-t border-white/[0.06]">
                      <div className="flex flex-wrap gap-1.5 mb-2.5">
                        {p.tags.map(t => (
                          <span key={t} className="font-mono text-[10px] tracking-widest uppercase px-2 py-0.5 border"
                            style={{ color:`${tagAccent[t]||'#fff'}90`, borderColor:`${tagAccent[t]||'#fff'}25`, background:`${tagAccent[t]||'#fff'}08` }}>
                            {t}
                          </span>
                        ))}
                      </div>
                      <p className="font-mono text-[11px] text-white/15 tracking-wide">{p.tech.join(' · ')}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-white/20 font-mono text-sm py-16">// no projects in this category</p>
        )}
      </div>
    </section>
  );
}