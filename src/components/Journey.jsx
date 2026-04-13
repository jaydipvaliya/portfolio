import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, School } from 'lucide-react';

const milestones = [
  { year: '2022–2023', title: 'Secondary School',          institution: 'Nutan Vidhyapith',      location: 'Gujarat, India', description: 'Completed secondary education. Foundation of my academic journey and early interest in computers.',                                                                icon: School,       current: false },
  { year: '2024–2025', title: 'Higher Secondary',          institution: 'Nutan Vidhyapith',      location: 'Gujarat, India', description: 'Specialized in Science and Mathematics. Developed strong analytical thinking and problem-solving skills.',                                                       icon: BookOpen,     current: false },
  { year: '2025–2029', title: 'B.Tech in Computer Science', institution: 'Swaminarayan University', location: 'Gujarat, India', description: 'Currently pursuing B.Tech with a focus on full-stack development, data structures, and software engineering.', icon: GraduationCap, current: true  },
];

export default function Journey() {
  return (
    <section id="journey" className="py-24 px-6 md:px-16" style={{ background: 'transparent' }}
      aria-label="Educational journey and timeline">
      <div className="max-w-6xl mx-auto">

        <motion.div className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="font-mono text-xs tracking-[0.3em] text-white/30 uppercase">03 / Journey</span>
          <div className="flex-1 h-px bg-white/10" aria-hidden="true"/>
        </motion.div>

        <div className="mb-16">
          <div className="overflow-hidden">
            <motion.h2 className="font-black text-white leading-none"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', letterSpacing: '-0.03em' }}
              initial={{ y: '100%' }} whileInView={{ y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}>
              MY
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2 className="font-black leading-none"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', letterSpacing: '-0.03em', WebkitTextStroke: '1px rgba(255,255,255,0.2)', color: 'transparent' }}
              initial={{ y: '100%' }} whileInView={{ y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.07, ease: [0.16, 1, 0.3, 1] }}>
              JOURNEY.
            </motion.h2>
          </div>
        </div>

        <div className="border-t border-white/[0.07]" role="list" aria-label="Education milestones">
          {milestones.map(({ year, title, institution, location, description, current }, i) => (
            <motion.article key={title}
              role="listitem"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.12 }}
              className="group grid md:grid-cols-[160px_1fr] gap-6 py-10 border-b border-white/[0.07] hover:border-white/20 transition-colors">
              <div className="flex md:flex-col gap-3 items-start">
                <time className="font-mono text-xs tracking-widest text-white/25 group-hover:text-white/50 transition-colors"
                  dateTime={year.split('–')[0]}>
                  {year}
                </time>
                {current && (
                  <span className="font-mono text-[10px] tracking-widest text-white/40 border border-white/15 px-2 py-0.5 uppercase"
                    aria-label="Currently enrolled">
                    Current
                  </span>
                )}
              </div>
              <div>
                <h3 className="font-black text-white/80 text-xl md:text-2xl group-hover:text-white transition-colors mb-2"
                  style={{ letterSpacing: '-0.02em' }}>
                  {title}
                </h3>
                <p className="font-mono text-xs text-white/25 tracking-wide mb-4">{institution} · {location}</p>
                <p className="text-white/40 text-sm font-light leading-relaxed max-w-xl group-hover:text-white/60 transition-colors">
                  {description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}