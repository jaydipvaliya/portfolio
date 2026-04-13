import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="pt-20"
    >
      <SEO
        title="Contact"
        description="Get in touch with Jaydip Valiya — Full-Stack Developer available for freelance projects, collaborations, and opportunities. Reach out via email, GitHub, LinkedIn, or Twitter."
        path="/contact"
        keywords="contact Jaydip Valiya, hire developer, freelance MERN developer, collaboration, get in touch"
      />
      <Contact />
    </motion.main>
  );
}
