import { motion } from 'framer-motion';
import { Trophy, Clock, Users, MapPin, ArrowUpRight } from 'lucide-react';

const hackathons = [
  {
    id: 'cybrathon',
    title: 'Jaipur Cybrathon',
    year: '2025',
    organizer: 'Unstop',
    location: 'Jaipur',
    date: 'JAN 2025',
    duration: '36H',
    team: 4,
    theme: 'Cybersecurity',
    project: 'SENTINEL Dashboard',
    description: 'Real-time cybersecurity monitoring with threat detection & role-based access control.',
    techUsed: ['React', 'Node.js', 'Tailwind', 'Recharts'],
    accent: '#4CC9F0',
    certificate: 'https://unstop.com/certificate-preview/05422511-0d9c-4c0f-b4d5-848562687297',
    img: 'https://d8it4huxumps7.cloudfront.net/lambda-pdfs/certificate-images/05422511-0d9c-4c0f-b4d5-848562687297.jpg',
  },
  {
    id: 'odoo-adani',
    title: 'Odoo × Adani',
    year: '2026',
    organizer: 'Odoo / Adani',
    location: 'Ahmedabad',
    date: 'FEB 2026',
    duration: '48H',
    team: 4,
    theme: 'Enterprise',
    project: 'Workflow Platform',
    description: 'Business workflow platform with streamlined ops and scalable enterprise design.',
    techUsed: ['React', 'Express', 'MongoDB', 'Odoo'],
    accent: '#FF6B9D',
    certificate: 'https://unstop.com/certificate-preview/55383f5e-8f27-40bb-a72c-ec85870c248c',
    img: 'https://d8it4huxumps7.cloudfront.net/lambda-pdfs/certificate-images/55383f5e-8f27-40bb-a72c-ec85870c248c.jpg',
  },
  {
    id: 'khacks',
    title: 'K Hacks 3.0',
    year: '2026',
    organizer: 'Unstop',
    location: 'Online',
    date: 'MAR 2026',
    duration: '48H',
    team: 3,
    theme: 'Innovation',
    project: 'Interactive MVP',
    description: 'Full MVP delivered under a strict 48-hour deadline with rapid prototyping.',
    techUsed: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    accent: '#6BCB77',
    certificate: 'https://unstop.com/certificate-preview/4643e5b8-f46b-424e-a344-def73d8044eb',
    img: 'https://d8it4huxumps7.cloudfront.net/lambda-pdfs/certificate-images/4643e5b8-f46b-424e-a344-def73d8044eb.jpg',
  },
  {
    id: 'code-clash',
    title: 'Code Clash',
    year: '2026',
    organizer: 'Unstop',
    location: 'Online',
    date: 'MAR 2026',
    duration: '3H',
    team: 1,
    theme: 'Competitive',
    project: 'Algo Challenge',
    description: 'Solved complex algorithmic problems against hundreds of participants.',
    techUsed: ['C++', 'DSA', 'Algorithms'],
    accent: '#FFD84D',
    certificate: 'https://unstop.com/certificate-preview/010b0ef5-40f2-4674-9be3-b12dbdfffab5',
    img: 'https://d8it4huxumps7.cloudfront.net/lambda-pdfs/certificate-images/010b0ef5-40f2-4674-9be3-b12dbdfffab5.jpg',
  },
];

function TicketCard({ hack, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: 5 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <div className="relative flex flex-col md:flex-row overflow-hidden rounded-xl"
        style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}>

        {/* Left — Accent strip + image + main info */}
        <div className="flex-1 relative overflow-hidden">
          {/* Accent top strip */}
          <div className="h-1 md:h-auto md:w-1 md:absolute md:left-0 md:top-0 md:bottom-0"
            style={{ background: hack.accent }} />

          <div className="flex flex-col sm:flex-row gap-5 p-6 md:pl-8">
            {/* Certificate image */}
            <div className="shrink-0 w-full sm:w-40 md:w-48 overflow-hidden rounded-lg self-start"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
              <img
                src={hack.img}
                alt={`${hack.title} certificate`}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ aspectRatio: '4/3' }}
              />
            </div>

            {/* Text content */}
            <div className="flex-1 min-w-0">
              {/* Event name + theme */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-white font-black text-2xl md:text-3xl leading-none tracking-tight mb-2"
                    style={{ letterSpacing: '-0.03em' }}>
                    {hack.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-0.5 rounded-full font-mono text-[10px] tracking-wider uppercase"
                      style={{ background: `${hack.accent}12`, color: hack.accent, border: `1px solid ${hack.accent}20` }}>
                      {hack.theme}
                    </span>
                    <span className="font-mono text-[10px] text-white/20">{hack.organizer}</span>
                  </div>
                </div>
                {/* Large year */}
                <span className="font-black text-4xl md:text-5xl leading-none shrink-0 hidden sm:block"
                  style={{ color: 'transparent', WebkitTextStroke: `1.5px ${hack.accent}25` }}>
                  {hack.year}
                </span>
              </div>

              {/* Project */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-px" style={{ background: hack.accent }} />
                <span className="text-white/70 text-sm font-semibold">{hack.project}</span>
              </div>

              {/* Description */}
              <p className="text-white/30 text-sm font-light leading-relaxed mb-5 max-w-lg">
                {hack.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5">
                {hack.techUsed.map(tech => (
                  <span key={tech} className="px-2.5 py-1 font-mono text-[10px] text-white/30 rounded"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Perforated divider */}
        <div className="relative hidden md:flex flex-col items-center justify-center w-px mx-0"
          style={{ background: 'transparent' }}>
          {/* Dashed line effect */}
          <div className="absolute inset-y-0 w-px"
            style={{
              backgroundImage: 'repeating-linear-gradient(180deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 6px, transparent 6px, transparent 12px)',
            }} />
          {/* Top notch */}
          <div className="absolute -top-3 w-6 h-6 rounded-full"
            style={{ background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.07)' }} />
          {/* Bottom notch */}
          <div className="absolute -bottom-3 w-6 h-6 rounded-full"
            style={{ background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.07)' }} />
        </div>

        {/* Mobile divider */}
        <div className="md:hidden relative flex items-center justify-center h-px mx-6"
          style={{
            backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 6px, transparent 6px, transparent 12px)',
          }}>
          <div className="absolute -left-3 w-6 h-6 rounded-full"
            style={{ background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.07)' }} />
          <div className="absolute -right-3 w-6 h-6 rounded-full"
            style={{ background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.07)' }} />
        </div>

        {/* Right — Ticket stub */}
        <div className="md:w-48 shrink-0 p-5 md:p-6 flex flex-row md:flex-col items-center md:items-center justify-between md:justify-center gap-4 md:gap-5">
          {/* Stats */}
          <div className="flex md:flex-col items-center gap-4 md:gap-5">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-0.5">
                <Clock size={10} style={{ color: hack.accent, opacity: 0.6 }} />
              </div>
              <p className="font-black text-white text-lg leading-none">{hack.duration}</p>
              <p className="font-mono text-[8px] text-white/20 tracking-widest uppercase mt-0.5">Duration</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-0.5">
                <Users size={10} style={{ color: hack.accent, opacity: 0.6 }} />
              </div>
              <p className="font-black text-white text-lg leading-none">{hack.team === 1 ? '01' : `0${hack.team}`}</p>
              <p className="font-mono text-[8px] text-white/20 tracking-widest uppercase mt-0.5">{hack.team === 1 ? 'Solo' : 'Team'}</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-0.5">
                <MapPin size={10} style={{ color: hack.accent, opacity: 0.6 }} />
              </div>
              <p className="font-bold text-white text-xs leading-none">{hack.location}</p>
              <p className="font-mono text-[8px] text-white/20 tracking-widest uppercase mt-0.5">{hack.date}</p>
            </div>
          </div>

          {/* Certificate link */}
          <a href={hack.certificate} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded font-mono text-[10px] tracking-wider uppercase transition-all hover:opacity-80"
            style={{ background: `${hack.accent}15`, color: hack.accent, border: `1px solid ${hack.accent}20` }}>
            Cert <ArrowUpRight size={10} />
          </a>
        </div>

      </div>
    </motion.div>
  );
}

export default function Hackathons() {
  return (
    <section id="hackathons" className="py-24 px-6 md:px-16" style={{ background: 'transparent' }}
      aria-label="Hackathon experiences">
      <div className="max-w-6xl mx-auto">

        <motion.div className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="font-mono text-xs tracking-[0.3em] text-white/30 uppercase">06 / Hackathons</span>
          <div className="flex-1 h-px bg-white/10" aria-hidden="true" />
        </motion.div>

        {/* Heading + subtitle */}
        <div className="grid md:grid-cols-[1fr_1fr] gap-8 mb-20 items-end">
          <div>
            <div className="overflow-hidden">
              <motion.h2 className="font-black text-white leading-none"
                style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', letterSpacing: '-0.03em' }}
                initial={{ y: '100%' }} whileInView={{ y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}>
                HACKATHONS &
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2 className="font-black leading-none"
                style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', letterSpacing: '-0.03em', WebkitTextStroke: '2px rgba(255,255,255,0.2)', color: 'transparent' }}
                initial={{ y: '100%' }} whileInView={{ y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.07, ease: [0.16, 1, 0.3, 1] }}>
                ACHIEVEMENTS
              </motion.h2>
            </div>
          </div>
          <motion.p className="text-white/35 text-sm md:text-base font-light leading-relaxed"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            Building under pressure, shipping fast, and solving real problems.
            Each hackathon sharpens the blade — here are the tickets to prove it.
          </motion.p>
        </div>

        {/* Ticket cards */}
        <div className="space-y-5">
          {hackathons.map((hack, i) => (
            <TicketCard key={hack.id} hack={hack} index={i} />
          ))}
        </div>

        {/* Footer */}
        <motion.div className="mt-16 text-center"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
            <Trophy size={14} className="text-amber-400/60" />
            <span className="font-mono text-[11px] text-white/30 tracking-wider">Next hackathon loading...</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
