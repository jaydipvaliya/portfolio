import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFoundPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="pt-20 min-h-screen flex items-center justify-center px-6"
    >
      <SEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist. Return to Jaydip Valiya's portfolio."
        path="/404"
      />
      <div className="text-center max-w-lg">
        <div className="overflow-hidden mb-4">
          <motion.h1
            className="font-black text-white leading-none"
            style={{ fontSize: 'clamp(5rem, 15vw, 12rem)', letterSpacing: '-0.04em' }}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            404
          </motion.h1>
        </div>
        <motion.p
          className="text-white/40 text-lg font-light mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Oops — this page doesn't exist. Let's get you back on track.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-black bg-white hover:bg-white/90 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </motion.main>
  );
}
