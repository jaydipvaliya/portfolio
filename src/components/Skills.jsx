import { motion } from 'framer-motion';

const ICONS = {
  'React.js':    <svg viewBox="0 0 128 128" width="18" height="18"><circle cx="64" cy="64" r="10" fill="#61DAFB"/><g fill="none" stroke="#61DAFB" strokeWidth="7"><ellipse rx="46" ry="17" cx="64" cy="64"/><ellipse rx="46" ry="17" cx="64" cy="64" transform="rotate(60 64 64)"/><ellipse rx="46" ry="17" cx="64" cy="64" transform="rotate(120 64 64)"/></g></svg>,
  'JavaScript':  <svg viewBox="0 0 128 128" width="18" height="18"><rect width="128" height="128" rx="4" fill="#F7DF1E"/><path fill="#000" d="M26 106l9-5.5c1.7 3.2 3.3 5.8 7 5.8s6-1.4 6-7V60h11v39.5c0 11.5-6.7 16.8-16.5 16.8-8.8 0-14-4.5-16.5-10.3zm40.5 1l9-5.5c2.4 3.8 5.4 6.7 10.8 6.7 4.5 0 7.5-2.3 7.5-5.4 0-3.8-3-5.2-8-7.4l-2.8-1.2c-8-3.4-13.4-7.8-13.4-17 0-8.4 6.4-14.8 16.4-14.8 7 0 12.1 2.4 15.8 8.8l-8.6 5.6c-1.9-3.4-4-4.8-7.2-4.8s-5.3 2-5.3 4.8c0 3.4 2 4.8 6.8 6.8l2.8 1.2c9.4 4 14.8 8.3 14.8 17.6 0 10-7.9 15.6-18.5 15.6-10.4 0-17-4.9-20.1-11.2z"/></svg>,
  'TypeScript':  <svg viewBox="0 0 128 128" width="18" height="18"><rect width="128" height="128" rx="4" fill="#3178C6"/><path fill="#fff" d="M22 62h20v8H32v34H22V62zm24 6v-6h36v8H70v34H60V70H46z"/></svg>,
  'HTML5':       <svg viewBox="0 0 128 128" width="18" height="18"><path fill="#E44D26" d="M19 113L8 8h112l-11 105L64 120z"/><path fill="#F16529" d="M64 112l37-10 10-89H64z"/><path fill="#fff" d="M64 67H48l-1-12h17V43H35l3.5 40H64zm0 21l-16-4-1-11H36l2 22 26 7z"/><path fill="#EBEBEB" d="M64 67v12h15l-1.5 16-13.5 3.6V113l26-7.2 3-33.8H64zm2.7-24v12H92l-1-12z"/></svg>,
  'CSS3':        <svg viewBox="0 0 128 128" width="18" height="18"><path fill="#1572B6" d="M19 113L8 8h112l-11 105L64 120z"/><path fill="#33A9DC" d="M64 112l37-10 10-89H64z"/><path fill="#fff" d="M64 67H47l-.5-5.5h17.5V49H34l3.5 40H64zm0 21l-12.5-3.5-.8-9H38.7l1.6 18 23.7 6.6z"/><path fill="#EBEBEB" d="M64 67v12h12.5l-1.2 14-11.3 3v11l23.8-6.6 3-34H64zm2.5-18v12H91l-1-12z"/></svg>,
  'Tailwind CSS':<svg viewBox="0 0 128 128" width="18" height="18"><path fill="#06B6D4" d="M64 16c-17 0-27.8 8.5-32 25.6 6.4-8.5 13.9-11.7 22.4-9.6 4.9 1.2 8.3 4.7 12.2 8.7C73 47.7 80.7 56 96 56c17 0 27.8-8.5 32-25.6-6.4 8.5-13.9 11.7-22.4 9.6-4.9-1.2-8.3-4.7-12.2-8.7C86.9 24.3 79.3 16 64 16zM32 56c-17 0-27.8 8.5-32 25.6 6.4-8.5 13.9-11.7 22.4-9.6 4.9 1.2 8.3 4.7 12.2 8.7C41 87.7 48.7 96 64 96c17 0 27.8-8.5 32-25.6-6.4 8.5-13.9 11.7-22.4 9.6-4.9-1.2-8.3-4.7-12.2-8.7C54.9 64.3 47.3 56 32 56z"/></svg>,
  'Node.js':     <svg viewBox="0 0 128 128" width="18" height="18"><path fill="#339933" d="M64 4L10 35v58l54 30 54-30V35z"/><path fill="#fff" d="M64 18L22 42v44l42 24 42-24V42z"/><circle cx="64" cy="64" r="13" fill="#339933"/></svg>,
  'Express.js':  <svg viewBox="0 0 128 128" width="18" height="18"><rect width="128" height="128" rx="4" fill="#303030"/><path fill="#fff" d="M20 80V48l20 32 20-32v32h-8V62l-12 18-12-18v18zm50-32h8v24h16v8H70z"/></svg>,
  'MongoDB':     <svg viewBox="0 0 128 128" width="18" height="18"><path fill="#10AA50" d="M81 119s-1.5 1.5-3.8 1.6c-1.4.1-3-.6-3.6-1.9-.7-1.3-.7-2.9-.7-4.4V22c0-1.5 0-3.1.7-4.4.6-1.3 2.2-2 3.6-1.9 1.4.1 2.6.9 3.8 1.6C91 24 99 35 102 47c3 12 2 25-3 37C95 95 86 105 81 119z"/><path fill="#12924F" d="M47 119s1.5 1.5 3.8 1.6c1.4.1 3-.6 3.6-1.9.7-1.3.7-2.9.7-4.4V22c0-1.5 0-3.1-.7-4.4-.6-1.3-2.2-2-3.6-1.9-1.4.1-2.6.9-3.8 1.6z"/><path fill="#10AA50" d="M64 8C56 34 39 53 39 65s11 21 25 24c14-3 25-13 25-24S72 33 64 8z"/></svg>,
  'Python':      <svg viewBox="0 0 128 128" width="18" height="18"><path fill="#3776AB" d="M64 3C46 3 47 10.5 47 10.5l.03 8h17v2.4H29S18 19 18 37.2C18 55.3 28 54.7 28 54.7h6V46.6S33 37 43 37h28s9.6.2 9.6-9.3V13.4S82.5 3 64 3zm-16 9.6c1.7 0 3 1.4 3 3.1s-1.3 3.1-3 3.1-3-1.4-3-3.1 1.3-3.1 3-3.1z"/><path fill="#FFD43B" d="M64 125c18 0 16.6-7.5 16.6-7.5l-.03-8h-17V107H98s11 1.3 11-16.8c0-18.1-9.8-17.5-9.8-17.5H93v8S95 91 85 91H57s-9.6-.2-9.6 9.3v14.1S45 125 64 125zm16-9.6c-1.7 0-3-1.4-3-3.1s1.3-3.1 3-3.1 3 1.4 3 3.1-1.3 3.1-3 3.1z"/></svg>,
  'C++':         <svg viewBox="0 0 128 128" width="18" height="18"><rect width="128" height="128" rx="4" fill="#004482"/><path fill="#fff" d="M64 20c-24.3 0-44 19.7-44 44s19.7 44 44 44 44-19.7 44-44-19.7-44-44-44zm-8 60c-8.8 0-16-7.2-16-16s7.2-16 16-16c4 0 7.8 1.5 10.6 4l-4.2 4.2C60.6 54.6 58.3 54 56 54c-5.5 0-10 4.5-10 10s4.5 10 10 10c2.4 0 4.7-.6 6.4-2.2l4.2 4.2C63.8 78.5 60 80 56 80zm32-12h-4v4h-4v-4h-4v-4h4v-4h4v4h4v4zm16 0h-4v4h-4v-4h-4v-4h4v-4h4v4h4v4z"/></svg>,
  'Git':         <svg viewBox="0 0 128 128" width="18" height="18"><path fill="#F03C2E" d="M124.7 58.4L69.6 3.3a11.3 11.3 0 0 0-16 0L42.3 14.6l14.6 14.6a13.4 13.4 0 0 1 17 17.1l14.1 14.1a13.4 13.4 0 1 1-8 7.6L66.7 54.7v33.4a13.4 13.4 0 1 1-11-13.1V54a13.4 13.4 0 0 1-7.2-17.5L33.9 22 3.3 52.6a11.3 11.3 0 0 0 0 16l55.1 55.1a11.3 11.3 0 0 0 16 0l50.3-50.3a11.3 11.3 0 0 0 0-15z"/></svg>,
  'GitHub':      <svg viewBox="0 0 128 128" width="18" height="18"><path fill="#fff" fillRule="evenodd" d="M64 4C30.9 4 4 30.9 4 64c0 26.5 17.2 49 41 57 3 .6 4-1.3 4-2.9v-10c-16.6 3.6-20-8-20-8-2.8-7-6.7-8.8-6.7-8.8-5.5-3.7.4-3.6.4-3.6 6 .4 9 6 9 6 5.3 9 13.8 6.4 17.2 5 .5-3.8 2-6.4 3.7-7.9-13.3-1.5-27.3-6.6-27.3-29.4 0-6.5 2.3-11.8 6-16-.6-1.5-2.6-7.5.6-15.6 0 0 5-1.6 16.2 6 4.7-1.3 9.7-2 14.7-2s10 .7 14.7 2c11.3-7.6 16.2-6 16.2-6 3.2 8.1 1.2 14.1.6 15.6 3.7 4.2 6 9.5 6 16 0 23-14 28-27.3 29.5 2.1 1.8 4 5.5 4 11V118c0 1.6 1 3.5 4 2.9C106.8 113 124 90.5 124 64 124 30.9 97 4 64 4z"/></svg>,
  'VS Code':     <svg viewBox="0 0 128 128" width="18" height="18"><path fill="#0065A9" d="M90.8 6.5L48.1 44.6 22.4 25.6 6.2 31.5v65l16.2 5.9 25.7-19 42.7 38.1 21.3-9.4V15.9L90.8 6.5zm5.4 79.3L64 62.9v-5.8l32.2-22.9v51.6zm-59 4.7L23 85.3V42.5l14.2-5v52.5zm22.7-18.4L72.6 64 59.9 56.1l32.6-23.8v63.4L59.9 72z"/></svg>,
  'Figma':       <svg viewBox="0 0 128 128" width="18" height="18"><path fill="#F24E1E" d="M44 128c11 0 20-9 20-20V88H44c-11 0-20 9-20 20s9 20 20 20z"/><path fill="#FF7262" d="M24 64c0-11 9-20 20-20h20v40H44c-11 0-20-9-20-20z"/><path fill="#A259FF" d="M24 24c0-11 9-20 20-20h20v40H44C33 44 24 35 24 24z"/><path fill="#1ABCFE" d="M64 4h20c11 0 20 9 20 20s-9 20-20 20H64V4z"/><path fill="#0ACF83" d="M104 64c0 11-9 20-20 20s-20-9-20-20 9-20 20-20 20 9 20 20z"/></svg>,
  'Postman':     <svg viewBox="0 0 128 128" width="18" height="18"><circle cx="64" cy="64" r="56" fill="#FF6C37"/><path fill="#fff" d="M86.7 64a22.7 22.7 0 1 1-45.4 0 22.7 22.7 0 0 1 45.4 0zm-19.7 0l-3.5 3.5-7.4-7.4 3.5-3.5 3.9 3.9 10.5-10.5 3.5 3.5z"/></svg>,
  'Vercel':      <svg viewBox="0 0 128 128" width="18" height="18"><path d="M64 8L4 120h120L64 8z" fill="#fff"/></svg>,
  'Netlify':     <svg viewBox="0 0 128 128" width="18" height="18"><path fill="#00AD9F" d="M47.6 79.2l-6.8-6.8-21.5 21.5 6.8 6.8zM29.3 58.6L8 79.9l6.8 6.8 21.3-21.3zM99.5 41.6l-27.4-27.4-9.3 9.3 27.4 27.4zM64 8L36.6 35.4l27.4 27.4L91.4 35.4zM36.6 92.6L64 120l27.4-27.4L64 65.2z"/></svg>,
};

const categories = [
  { id: 'frontend',  label: 'FRONTEND',      color: '#4CC9F0', skills: ['React.js','Tailwind CSS','JavaScript','TypeScript','HTML5','CSS3'] },
  { id: 'languages', label: 'LANGUAGES',     color: '#FFD84D', skills: ['JavaScript','TypeScript','Python','C++'] },
  { id: 'backend',   label: 'BACKEND',       color: '#FF6B9D', skills: ['Node.js','Express.js','MongoDB'] },
  { id: 'tools',     label: 'TOOLS & CLOUD', color: '#6BCB77', skills: ['Git','GitHub','VS Code','Figma','Postman','Vercel','Netlify'] },
];

function SkillMarqueeRow({ skills, reverse = false, speed = 28 }) {
  const doubled = [...skills, ...skills, ...skills];
  return (
    <div className="overflow-hidden py-3 border-b border-white/[0.06]">
      <motion.div className="flex gap-8 whitespace-nowrap"
        animate={{ x: reverse ? ['-33.33%', '0%'] : ['0%', '-33.33%'] }}
        transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}>
        {doubled.map((skill, i) => (
          <span key={i} className="flex items-center gap-3 shrink-0 cursor-default">
            <span className="text-white/15 text-xs">✦</span>
            <span className="flex items-center gap-2 text-white/35 hover:text-white/75 transition-colors duration-300 text-sm font-mono tracking-wide">
              <span className="opacity-60">{ICONS[skill]}</span>
              {skill}
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-16" style={{ background: 'transparent' }}>
      <div className="max-w-6xl mx-auto">

        <motion.div className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="font-mono text-xs tracking-[0.3em] text-white/30 uppercase">04 / Skills</span>
          <div className="flex-1 h-px bg-white/10"/>
        </motion.div>

        <div className="mb-12">
          <div className="overflow-hidden">
            <motion.h2 className="font-black text-white leading-none"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', letterSpacing: '-0.03em' }}
              initial={{ y: '100%' }} whileInView={{ y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}>
              SKILLS &
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2 className="font-black leading-none"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', letterSpacing: '-0.03em', WebkitTextStroke: '1px rgba(255,255,255,0.2)', color: 'transparent' }}
              initial={{ y: '100%' }} whileInView={{ y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.07, ease: [0.16, 1, 0.3, 1] }}>
              TECHNOLOGIES.
            </motion.h2>
          </div>
        </div>

        <div className="space-y-0 border-t border-white/[0.06]">
          {categories.map((cat, ci) => (
            <motion.div key={cat.id}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}>
              <div className="flex items-center gap-4 py-3 border-b border-white/[0.06]">
                <span className="font-mono text-[10px] tracking-[0.25em] text-white/20 uppercase w-28 shrink-0">{cat.label}</span>
                <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: cat.color }}/>
                <span className="text-white/15 text-xs font-mono">{cat.skills.length} techs</span>
              </div>
              <SkillMarqueeRow skills={cat.skills} reverse={ci % 2 !== 0} speed={18 + ci * 5}/>
            </motion.div>
          ))}
        </div>

        <motion.p className="mt-10 font-mono text-xs text-white/20 tracking-widest"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
          // hover any tag · always learning more
        </motion.p>
      </div>
    </section>
  );
}