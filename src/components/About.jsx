import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { num: '2+', label: 'Years coding' },
  { num: '10+', label: 'Projects built' },
  { num: '4+', label: 'Hackathons' },
];

const tags = ['MERN Stack', 'B.Tech CSE', 'Gujarat', 'Full-Stack', 'Open to Work'];

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['6%', '-6%']);

  return (
    <section id="about" ref={ref} className="relative py-24 px-6 md:px-16 overflow-hidden"
      style={{ background: 'transparent' }}
      aria-label="About Jaydip Valiya">
      <div className="max-w-6xl mx-auto">

        {/* Section marker */}
        <motion.div className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="font-mono text-xs tracking-[0.3em] text-white/30 uppercase">02 / About</span>
          <div className="flex-1 h-px bg-white/10" aria-hidden="true" />
        </motion.div>

        <div className="relative">

          <div className="overflow-hidden">
            <motion.h2 className="font-black text-white leading-none"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', letterSpacing: '-0.03em' }}
              initial={{ y: '100%' }} whileInView={{ y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}>
              ABOUT 
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2 className="font-black leading-none"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', letterSpacing: '-0.03em', WebkitTextStroke: '3px rgba(255,255,255,0.2)', color: 'transparent' }}
              initial={{ y: '100%' }} whileInView={{ y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.07, ease: [0.16, 1, 0.3, 1] }}>
              ME
            </motion.h2>
          </div>

          <br />
          <div className="relative grid md:grid-cols-[1fr_340px] gap-12 md:gap-16 items-start">

            <div>

              <div className="space-y-6 max-w-xl">
                {[
                  { num: '01', text: "I'm Jaydip Valiya — a passionate Full-Stack Developer from Gujarat, India. I love building products that are both functional and beautiful, with a deep focus on the MERN stack." },
                  { num: '02', text: "Currently pursuing B.Tech in Computer Science at Swaminarayan University (2025–2029), constantly learning and exploring new technologies to sharpen my skills." },
                  { num: '03', text: "Hackathons are my playground. The thrill of solving real problems under pressure — with a team — is what keeps me going." },
                ].map(({ num, text }, i) => (
                  <motion.div key={num}
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.12 }}
                    className="flex gap-4 group">
                    <span className="font-mono text-[10px] text-white/15 group-hover:text-white/35 transition-colors shrink-0 mt-1.5 tracking-widest" aria-hidden="true">{num}</span>
                    <p className="text-white/50 text-base md:text-lg font-light leading-relaxed group-hover:text-white/70 transition-colors duration-300">{text}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div className="flex gap-10 mt-12 pt-8 border-t border-white/[0.07]"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.55 }}>
                {stats.map(({ num, label }) => (
                  <div key={label}>
                    <p className="font-black text-white text-3xl" style={{ letterSpacing: '-0.04em' }}>{num}</p>
                    <p className="font-mono text-[10px] text-white/25 mt-1 tracking-widest uppercase">{label}</p>
                  </div>
                ))}
              </motion.div>

              <motion.div className="flex flex-wrap gap-2 mt-8"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.65 }}>
                {tags.map(t => (
                  <span key={t} className="font-mono text-[10px] tracking-widest uppercase text-white/30 border border-white/[0.08] px-3 py-1.5 hover:text-white/60 hover:border-white/20 transition-colors cursor-default">
                    {t}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right — parallax image */}
            <motion.div className="relative hidden md:block"
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}>
              <div className="relative overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.08)', aspectRatio: '3/4' }}>
                <motion.div className="absolute inset-0" style={{ y: imgY }}>
                  <img src="https://res.cloudinary.com/dg4c3rylm/image/upload/v1776188220/profile_mytks0.png" alt="Jaydip Valiya — Full-Stack Developer from Gujarat, India"
                    loading="lazy"
                    width="340"
                    height="453"
                    className="w-full h-full object-cover object-center grayscale brightness-75"
                    onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
                  <div className="hidden absolute inset-0 items-center justify-center" style={{ background: 'rgba(255,255,255,0.03)' }}>
                    <span className="font-black text-6xl text-white/10" aria-hidden="true">JV</span>
                  </div>
                </motion.div>
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
        </div>
      </div>
    </section>
  );
}