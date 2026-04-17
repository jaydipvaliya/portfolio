import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';

export default function Resume() {
  return (
    <section id="resume" className="py-24 px-6 md:px-16 flex flex-col" style={{ background: 'transparent' }} aria-label="Resume">
      <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col">
        <motion.div className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="font-mono text-xs tracking-[0.3em] text-white/30 uppercase">08 / Resume</span>
          <div className="flex-1 h-px bg-white/10" aria-hidden="true"/>
        </motion.div>

        <div className="mb-12">
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

        <motion.div 
          className="flex flex-col sm:flex-row gap-6 mt-4"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
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
    </section>
  );
}
