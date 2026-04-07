import { motion } from 'framer-motion';

export default function Loader({ onFinished }) {
  return (
    <motion.div
      key="loader"
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center"
      style={{ background: '#0a0a0a' }}
      exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.1 } }}
    >
      <div className="overflow-hidden">
        <motion.p
          className="font-black text-white leading-none"
          style={{ fontSize: 'clamp(2rem, 8vw, 5rem)', letterSpacing: '-0.04em' }}
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Jaydip
        </motion.p>
      </div>
      <div className="overflow-hidden">
        <motion.p
          className="font-black leading-none"
          style={{ fontSize: 'clamp(2rem, 8vw, 5rem)', letterSpacing: '-0.04em', WebkitTextStroke: '1px rgba(255,255,255,0.3)', color: 'transparent' }}
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
          Valiya
        </motion.p>
      </div>
      <motion.div className="mt-10 h-px overflow-hidden" style={{ width: 'clamp(120px,20vw,200px)', background: 'rgba(255,255,255,0.08)' }}>
        <motion.div className="h-full bg-white/40"
          initial={{ width: '0%' }} animate={{ width: '100%' }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          onAnimationComplete={onFinished} />
      </motion.div>
    </motion.div>
  );
}
