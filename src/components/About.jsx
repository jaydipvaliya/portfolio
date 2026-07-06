import { motion } from 'framer-motion';
import { Github, Linkedin, ExternalLink, GitFork, Star, Users, Briefcase, Headphones, Music2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 md:px-16 overflow-hidden"
      style={{ background: 'transparent' }}
      aria-label="About Jaydip Valiya">
      <div className="max-w-6xl mx-auto">

        {/* Section marker */}
        <motion.div className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="font-mono text-xs tracking-[0.3em] text-white/30 uppercase">02 / About</span>
          <div className="flex-1 h-px bg-white/10" aria-hidden="true" />
        </motion.div>

        <div className="relative grid md:grid-cols-[1fr_340px] gap-12 md:gap-16 items-start">

            {/* Left — text content */}
            <div>
              <div className="overflow-hidden">
                <motion.h2 className="font-black text-white leading-none"
                  style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', letterSpacing: '-0.03em' }}
                  initial={{ y: '100%' }} whileInView={{ y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}>
                  ABOUT 
                </motion.h2>
              </div>
              <div className="overflow-hidden mb-8">
                <motion.h2 className="font-black leading-none"
                  style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', letterSpacing: '-0.03em', WebkitTextStroke: '3px rgba(255,255,255,0.2)', color: 'transparent' }}
                  initial={{ y: '100%' }} whileInView={{ y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: 0.07, ease: [0.16, 1, 0.3, 1] }}>
                  ME
                </motion.h2>
              </div>

              <div className="space-y-6">
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

              <motion.div className="mt-10"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
                <a href="/resume1.pdf" download="Jaydip_Valiya_Resume.pdf"
                  className="inline-flex items-center gap-2.5 px-6 py-3 border border-white/20 text-white font-bold text-sm uppercase tracking-wider hover:bg-white/10 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                  Download Resume
                </a>
              </motion.div>
            </div>

            {/* Right — cards column */}
            <motion.div className="flex flex-col gap-5"
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}>

              {/* GitHub Card */}
              <a href="https://github.com/jaydipvaliya" target="_blank" rel="noopener noreferrer"
                className="group block relative overflow-hidden"
                style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)' }}
                aria-label="Visit Jaydip's GitHub profile">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'linear-gradient(135deg, rgba(110,84,148,0.08), transparent 60%)' }} />
                <div className="relative p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                        <Github size={18} className="text-white/60 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm group-hover:text-white transition-colors">GitHub</p>
                        <p className="font-mono text-[10px] text-white/30 tracking-wider">@jaydipvaliya</p>
                      </div>
                    </div>
                    <ExternalLink size={14} className="text-white/15 group-hover:text-white/50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="flex items-center gap-1.5">
                      <GitFork size={12} className="text-white/20" />
                      <span className="font-mono text-[10px] text-white/30 tracking-wider">10+ Repos</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Star size={12} className="text-white/20" />
                      <span className="font-mono text-[10px] text-white/30 tracking-wider">MERN · JS · Python</span>
                    </div>
                  </div>
                  <div className="flex gap-[3px] mt-4" aria-label="GitHub activity visualization">
                    {[3,5,2,7,4,6,8,3,5,9,4,6,2,7,5,8,3,6,4,7,5,9,3,6].map((h, i) => (
                      <motion.div key={i} className="flex-1 rounded-[1px]"
                        style={{ height: `${h * 3}px`, background: `rgba(110,84,148,${0.15 + h * 0.06})` }}
                        initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.02, duration: 0.3 }} />
                    ))}
                  </div>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a href="https://www.linkedin.com/in/jaydip-valiya-a1009737b/" target="_blank" rel="noopener noreferrer"
                className="group block relative overflow-hidden"
                style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)' }}
                aria-label="Visit Jaydip's LinkedIn profile">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'linear-gradient(135deg, rgba(10,102,194,0.08), transparent 60%)' }} />
                <div className="relative p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                        <Linkedin size={18} className="text-white/60 group-hover:text-[#0A66C2] transition-colors" />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm group-hover:text-white transition-colors">LinkedIn</p>
                        <p className="font-mono text-[10px] text-white/30 tracking-wider">Jaydip Valiya</p>
                      </div>
                    </div>
                    <ExternalLink size={14} className="text-white/15 group-hover:text-white/50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="flex items-center gap-1.5">
                      <Users size={12} className="text-white/20" />
                      <span className="font-mono text-[10px] text-white/30 tracking-wider">Networking</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Briefcase size={12} className="text-white/20" />
                      <span className="font-mono text-[10px] text-white/30 tracking-wider">Open to Work</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-4 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <motion.div className="w-1.5 h-1.5 rounded-full"
                      style={{ background: '#22c55e' }}
                      animate={{ opacity: [1, 0.4, 1] }}
                      transition={{ duration: 2, repeat: Infinity }} />
                    <span className="font-mono text-[10px] text-white/25 tracking-widest uppercase">Available for opportunities</span>
                  </div>
                </div>
              </a>

              {/* Coding Philosophy Card */}
              <div className="relative overflow-hidden"
                style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)' }}>
                <div className="absolute top-0 left-0 w-full h-[2px]"
                  style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.15), transparent)' }} />
                <div className="relative p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="font-mono text-white/20 text-lg">&lt;/&gt;</span>
                    <span className="font-mono text-[10px] text-white/30 tracking-widest uppercase">Coding Philosophy</span>
                  </div>
                  <blockquote className="text-white/60 text-sm italic leading-relaxed mb-3"
                    style={{ borderLeft: '2px solid rgba(255,255,255,0.1)', paddingLeft: '14px' }}>
                    "First, solve the problem. Then, write the code."
                  </blockquote>
                  <p className="text-white/25 text-[10px] font-mono tracking-wider">— John Johnson</p>
                  <div className="mt-4 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <p className="text-white/35 text-xs font-light leading-relaxed">
                      Clean code, user-first design, and continuous learning — that's what drives every line I write.
                    </p>
                  </div>
                </div>
              </div>

            </motion.div>

          </div>
      </div>
    </section>
  );
}