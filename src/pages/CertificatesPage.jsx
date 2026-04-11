import { motion } from 'framer-motion';
import Certificates from '../components/Certificates';

export default function CertificatesPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="pt-20"
    >
      <Certificates />
    </motion.main>
  );
}
