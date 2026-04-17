import { motion } from 'framer-motion';
import { FileText, Download, Headphones, Music2 } from 'lucide-react';

export default function Resume() {
  return (
    <section id="resume" className="py-16 px-6 md:px-16 flex flex-col" style={{ background: 'transparent' }} aria-label="Resume">
      <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col">
        <motion.div className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="font-mono text-xs tracking-[0.3em] text-white/30 uppercase">03 / Resume</span>
          <div className="flex-1 h-px bg-white/10" aria-hidden="true"/>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_1fr] gap-12 md:gap-16 items-start">

          {/* Left — heading + buttons */}
          <div>
            <div className="mb-10">
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
                  style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', letterSpacing: '-0.03em', WebkitTextStroke: '2px rgba(255,255,255,0.2)', color: 'transparent' }}
                  initial={{ y: '100%' }} whileInView={{ y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: 0.07, ease: [0.16, 1, 0.3, 1] }}>
                  RESUME.
                </motion.h2>
              </div>
            </div>

            <motion.p className="text-white/40 text-sm md:text-base font-light leading-relaxed mb-8 max-w-md"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              A snapshot of my education, skills, and experience. Grab the PDF for the full story.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            >
              <a 
                href="/resume.pdf" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-white/90 transition-colors"
              >
                <FileText size={20} />
                View Resume
              </a>
              <a 
                href="/resume.pdf" download="Jaydip_Valiya_Resume.pdf"
                className="flex items-center justify-center gap-3 px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-wider hover:bg-white/10 transition-colors"
              >
                <Download size={20} />
                Download Resume
              </a>
            </motion.div>
          </div>

          {/* Right — Spotify playlist */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}>
            
            <div className="rounded-2xl overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.08)' }}>
              
              {/* Header */}
              <div className="flex items-center gap-3 px-5 py-4"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: 'rgba(30,215,96,0.12)', border: '1px solid rgba(30,215,96,0.2)' }}>
                  <Headphones size={18} className="text-[#1DB954]" />
                </div>
                <div>
                  <p className="text-white/80 font-semibold text-sm">What I Code To</p>
                  <p className="text-white/25 text-[11px] font-mono">// vibes while building</p>
                </div>
                <div className="ml-auto flex items-center gap-1.5">
                  {[...Array(4)].map((_, i) => (
                    <motion.div key={i}
                      className="w-[3px] rounded-full"
                      style={{ background: '#1DB954' }}
                      animate={{ height: ['8px', `${14 + Math.random() * 10}px`, '8px'] }}
                      transition={{ duration: 0.6 + i * 0.15, repeat: Infinity, ease: 'easeInOut', delay: i * 0.1 }}
                    />
                  ))}
                </div>
              </div>

              {/* Spotify Embed */}
              <div className="p-3">
                <iframe
                  src="https://open.spotify.com/embed/playlist/0vvXsWCC9xrXsKd4FyS8kM?utm_source=generator&theme=0"
                  title="Spotify Coding Playlist"
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  style={{ borderRadius: '12px' }}
                />
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between px-5 py-3"
                style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="flex items-center gap-2">
                  <Music2 size={12} className="text-white/20" />
                  <span className="text-[10px] font-mono text-white/20">Lo-Fi · Chill · Focus</span>
                </div>
                <a href="https://open.spotify.com/playlist/0vvXsWCC9xrXsKd4FyS8kM"
                  target="_blank" rel="noopener noreferrer"
                  className="text-[10px] font-mono text-[#1DB954]/60 hover:text-[#1DB954] transition-colors">
                  Open in Spotify ↗
                </a>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
