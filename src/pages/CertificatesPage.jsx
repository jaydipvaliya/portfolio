import { motion } from 'framer-motion';
import SEO from '../components/SEO';
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
      <SEO
        title="Certificates & Awards"
        description="Hackathon certificates and awards earned by Jaydip Valiya — including Jaipur Cybrathon 2025, Odoo × Adani Hackathon, K Hacks 3.0, and Code Clash competitions."
        path="/certificates"
        keywords="hackathon certificates, coding competitions, Jaipur Cybrathon, Odoo hackathon, K Hacks, Code Clash, developer awards"
      />
      <Certificates />
    </motion.main>
  );
}
