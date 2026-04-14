import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, X, ZoomIn, ArrowUpRight } from 'lucide-react';

const certificates = [
  { title: 'Jaipur Cybrathon 2025',         issuer: 'Unstop',      date: '2025', link: 'https://unstop.com/certificate-preview/05422511-0d9c-4c0f-b4d5-848562687297', img: 'https://d8it4huxumps7.cloudfront.net/lambda-pdfs/certificate-images/05422511-0d9c-4c0f-b4d5-848562687297.jpg', type: 'Hackathon',   accent: '#4CC9F0' },
  { title: "Odoo × Adani Hackathon '26",    issuer: 'Odoo/Adani',  date: '2026', link: 'https://unstop.com/certificate-preview/55383f5e-8f27-40bb-a72c-ec85870c248c', img: 'https://d8it4huxumps7.cloudfront.net/lambda-pdfs/certificate-images/55383f5e-8f27-40bb-a72c-ec85870c248c.jpg', type: 'Hackathon',   accent: '#FF6B9D' },
  { title: 'K Hacks 3.0',                   issuer: 'Unstop',      date: '2026', link: 'https://unstop.com/certificate-preview/4643e5b8-f46b-424e-a344-def73d8044eb', img: 'https://d8it4huxumps7.cloudfront.net/lambda-pdfs/certificate-images/4643e5b8-f46b-424e-a344-def73d8044eb.jpg', type: 'Hackathon',   accent: '#6BCB77' },
  { title: 'Online Round — Code Clash',     issuer: 'Unstop',      date: '2026', link: 'https://unstop.com/certificate-preview/010b0ef5-40f2-4674-9be3-b12dbdfffab5', img: 'https://d8it4huxumps7.cloudfront.net/lambda-pdfs/certificate-images/010b0ef5-40f2-4674-9be3-b12dbdfffab5.jpg', type: 'Competition', accent: '#FFD84D' },
  { title: 'SoloLearn C programming',     issuer: 'SoloLearn',      date: '2026', link: 'https://www.sololearn.com/certificates/CC-LGRXXPYT', img: '../src/assets/sololearn-c.png', type: 'Competition', accent: '#FFD84D' }
];

function Lightbox({ cert, onClose }) {
  return (
    <AnimatePresence>
      {cert && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(12px)' }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`Certificate: ${cert.title}`}>
          <motion.div initial={{ scale: 0.88, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.88, opacity: 0 }} transition={{ type: 'spring', stiffness: 220, damping: 22 }}
            className="relative max-w-3xl w-full overflow-hidden"
            style={{ border: `1px solid ${cert.accent}40`, boxShadow: `0 0 80px ${cert.accent}25` }}
            onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between px-5 py-3"
              style={{ background: 'rgba(10,10,10,0.97)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <div>
                <p className="text-white font-bold text-sm">{cert.title}</p>
                <p className="font-mono text-xs text-white/30 mt-0.5">{cert.issuer} · {cert.date}</p>
              </div>
              <div className="flex items-center gap-3">
                <a href={cert.link} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 hover:opacity-80 transition-opacity"
                  style={{ background: cert.accent, color: '#000' }}
                  aria-label={`Open ${cert.title} certificate on Unstop`}>
                  Open <ArrowUpRight size={12}/>
                </a>
                <button onClick={onClose}
                  aria-label="Close certificate viewer"
                  className="w-8 h-8 flex items-center justify-center text-white/30 hover:text-white border border-white/10 hover:border-white/30 transition-all">
                  <X size={15}/>
                </button>
              </div>
            </div>
            <div style={{ background: '#050505' }} className="flex items-center justify-center p-6">
              <img src={cert.img} alt={`${cert.title} certificate awarded by ${cert.issuer}`}
                loading="lazy"
                className="w-full object-contain max-h-[70vh]"
                onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }}/>
              <div className="hidden w-full h-64 items-center justify-center flex-col gap-4"
                style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
                <Award size={40} style={{ color: cert.accent }}/>
                <a href={cert.link} target="_blank" rel="noopener noreferrer"
                  className="text-sm font-semibold underline" style={{ color: cert.accent }}>
                  Open on ↗
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Certificates() {
  const [active, setActive] = useState(null);

  return (
    <section id="certificates" className="py-24 px-6 md:px-16" style={{ background: 'transparent' }}
      aria-label="Certificates and hackathon awards">
      <div className="max-w-6xl mx-auto">

        <motion.div className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="font-mono text-xs tracking-[0.3em] text-white/30 uppercase">06 / Certificates</span>
          <div className="flex-1 h-px bg-white/10" aria-hidden="true"/>
        </motion.div>

        <div className="mb-14">
          <div className="overflow-hidden">
            <motion.h2 className="font-black text-white leading-none"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', letterSpacing: '-0.03em' }}
              initial={{ y: '100%' }} whileInView={{ y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}>
              CERTIFICATES
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2 className="font-black leading-none"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', letterSpacing: '-0.03em', WebkitTextStroke: '3px rgba(255,255,255,0.2)', color: 'transparent' }}
              initial={{ y: '100%' }} whileInView={{ y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.07, ease: [0.16, 1, 0.3, 1] }}>
              & AWARDS.
            </motion.h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" role="list" aria-label="Certificate cards">
          {certificates.map((cert, i) => (
            <motion.article key={cert.title}
              role="listitem"
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1, type: 'spring', stiffness: 100, damping: 18 }}
              whileHover={{ y: -6 }} onClick={() => setActive(cert)}
              className="group cursor-pointer overflow-hidden flex flex-col"
              style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)', transition: 'border-color 0.3s, box-shadow 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor=`${cert.accent}50`; e.currentTarget.style.boxShadow=`0 0 36px ${cert.accent}20`; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.07)'; e.currentTarget.style.boxShadow='none'; }}
              aria-label={`View ${cert.title} certificate`}>

              <div className="h-[2px] shrink-0" aria-hidden="true"
                style={{ background: `linear-gradient(90deg, ${cert.accent}90, ${cert.accent}20, transparent)` }}/>

              <div className="relative overflow-hidden shrink-0" style={{ aspectRatio: '16/10', background: '#050505' }}>
                <img src={cert.img} alt={`${cert.title} — ${cert.type} certificate from ${cert.issuer}`}
                  loading="lazy"
                  width="400"
                  height="250"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }}/>
                <div className="hidden absolute inset-0 items-center justify-center"
                  style={{ background: `radial-gradient(circle, ${cert.accent}10, #050505)` }}>
                  <Award size={32} style={{ color: cert.accent, opacity: 0.4 }} aria-hidden="true"/>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'rgba(0,0,0,0.5)' }} aria-hidden="true">
                  <div className="w-9 h-9 flex items-center justify-center" style={{ background: cert.accent }}>
                    <ZoomIn size={16} color="#000"/>
                  </div>
                </div>
              </div>

              <div className="p-3.5 flex-1 flex flex-col gap-1.5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-white/80 group-hover:text-white font-bold text-xs leading-snug flex-1 transition-colors"
                    style={{ letterSpacing: '-0.01em' }}>
                    {cert.title}
                  </h3>
                  <span className="shrink-0 font-mono text-[9px] tracking-widest uppercase px-1.5 py-0.5"
                    style={{ color:`${cert.accent}90`, background:`${cert.accent}12`, border:`1px solid ${cert.accent}25` }}>
                    {cert.type}
                  </span>
                </div>
                <p className="font-mono text-[10px] text-white/25 tracking-wide">{cert.issuer} · {cert.date}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <Lightbox cert={active} onClose={() => setActive(null)}/>
    </section>
  );
}