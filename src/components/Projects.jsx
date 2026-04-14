import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Globe, Youtube } from 'lucide-react';

const projects = [
  {
    title: 'Ekagra App',
    desc: 'A productivity and focus app built with React and Node.js to help users manage tasks and eliminate distractions.',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/jaydipvaliya/Ekagra-app',
    live: 'https://youtu.be/pI5THUR-pGQ?si=EEZYXYS2Ok-YN-2J',
    preview: 'https://ekagra-app-zjbl.vercel.app/',
    color: '#4CC9F0',
  },
  {
    title: 'Bentley Clone',
    desc: 'A pixel-perfect clone of the Bentley Motors website showcasing advanced CSS animations and responsive design.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/jaydipvaliya/clone_project_repo/tree/main/Bentali%20clone.cg',
    live: 'https://youtu.be/edL_sEMZXbQ?si=fWYvylWvNSlJXXmC',
    preview: 'https://bentley-clone.netlify.app/',
    color: '#FB923C',
  },
  {
    title: 'DJI Clone',
    desc: "Frontend clone of DJI's product landing page with smooth scroll animations and interactive product showcases.",
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/jaydipvaliya/clone_project_repo/tree/main/dji%20clone.cg',
    live: 'https://youtu.be/dGQqi107MLU?si=2Fn0qQTs_Ocjk-YK',
    preview: 'https://dji-clone-project.netlify.app/',
    color: '#60A5FA',
  },
  {
    title: 'Udaan Clone',
    desc: 'Full-stack e-commerce clone inspired by Udaan B2B platform with product listings and cart management.',
    tech: ['React', 'Express', 'MongoDB'],
    github: 'https://github.com/jaydipvaliya/clone_project_repo/tree/main/udaan%20clone.cg',
    live: 'https://youtu.be/YlrkHHWErt4?si=uJcluyQjyJlq22-I',
    preview: 'https://udaan-clone.netlify.app/',
    color: '#A78BFA',
  },
  {
    title: 'Drop Clone',
    desc: 'Frontend clone of the Dropbox landing page with responsive layout and clean modern design.',
    tech: ['HTML', 'CSS'],
    github: 'https://github.com/jaydipvaliya/clone_project_repo/tree/main/drop%20clone.cg',
    live: 'https://youtu.be/MmYtvzlxMsc?si=qJ88uS46DfoMDVVn',
    preview: 'https://drop-clone.netlify.app/',
    color: '#34D399',
  },
  {
    title: 'Memory Flip Game',
    desc: 'Classic memory card-matching game with multiple difficulty levels, score tracking, and smooth flip animations.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/jaydipvaliya/game-project-repo/tree/main/memory%20flip%20card%20game',
    live: 'https://gamethron-memory-flip.netlify.app/',
    preview: 'https://gamethron-memory-flip.netlify.app/',
    color: '#4ADE80',
  },
  {
    title: 'Color Guessing Zone',
    desc: 'Interactive color guessing game — train your eye for exact RGB values with a leaderboard and timer.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/jaydipvaliya/game-project-repo/tree/main/color%20guessing',
    live: 'https://gamethron-color-gassing.netlify.app/',
    preview: 'https://gamethron-color-gassing.netlify.app/',
    color: '#FACC15',
  },
  {
    title: 'Whack-a-Mole',
    desc: 'Browser-based whack-a-mole arcade game with increasing speed levels and high score tracking.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/jaydipvaliya/game-project-repo/tree/main/Whack-a-Mole',
    live: 'https://gamethron-wake-a-mole.netlify.app/',
    preview: 'https://gamethron-wake-a-mole.netlify.app/',
    color: '#F472B6',
  },
  {
    title: 'Click Counter',
    desc: 'Minimalist click-counter web app with animated count display, reset functionality, and keyboard shortcuts.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/jaydipvaliya/game-project-repo/tree/main/clickcount',
    live: 'https://gamethron-click-count.netlify.app/',
    preview: 'https://gamethron-click-count.netlify.app/',
    color: '#FB923C',
  },
];

/* ── Circular icon button ─────────────────────────────────── */
function CircleBtn({ href, icon: Icon, color, delay }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20, delay }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
      onClick={e => e.stopPropagation()}
      className="w-11 h-11 rounded-full flex items-center justify-center shadow-lg"
      style={{ background: color }}
    >
      <Icon size={18} color="#fff" />
    </motion.a>
  );
}

/* ── Single project card ──────────────────────────────────── */
function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, type: 'spring', stiffness: 90, damping: 18 }}
      className="group flex flex-col overflow-hidden cursor-default"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '12px',
        transition: 'border-color 0.3s, box-shadow 0.3s',
      }}
      onMouseEnter={e => {
        setHovered(true);
        e.currentTarget.style.borderColor = `${project.color}50`;
        e.currentTarget.style.boxShadow = `0 8px 40px ${project.color}15`;
      }}
      onMouseLeave={e => {
        setHovered(false);
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* ── Preview image area ── */}
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: '16/9', background: '#050507' }}
      >
        {/* Live site in iframe for preview, fallback to colour bg */}
        {!imgError ? (
          <iframe
            src={project.preview}
            title={project.title}
            className="w-full h-full border-0 pointer-events-none"
            style={{
              transform: 'scale(1)',
              transformOrigin: 'top left',
              filter: hovered ? 'brightness(0.55)' : 'brightness(0.75)',
              transition: 'filter 0.3s',
            }}
            loading="lazy"
            onError={() => setImgError(true)}
            sandbox="allow-scripts allow-same-origin"
          />
        ) : (
          /* Colour gradient fallback */
          <div
            className="w-full h-full flex items-center justify-center"
            style={{
              background: `radial-gradient(ellipse at 50% 40%, ${project.color}25 0%, #050507 70%)`,
            }}
          >
            <span
              className="font-black text-4xl"
              style={{ color: `${project.color}40`, letterSpacing: '-0.04em' }}
            >
              {project.title.slice(0, 2).toUpperCase()}
            </span>
          </div>
        )}

        {/* Gradient overlay bottom */}
        <div
          className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(5,5,7,0.9), transparent)' }}
        />

        {/* Floating action buttons — appear on hover */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 z-10">
          <AnimatePresence>
            {hovered && (
              <>
                <CircleBtn
                  href={project.github}
                  icon={Github}
                  color="#1a1a1a"
                  delay={0}
                />
                <CircleBtn
                  href={project.preview}
                  icon={Globe}
                  color={project.color}
                  delay={0.07}
                />
                <CircleBtn
                  href={project.live}
                  icon={Youtube}
                  color="#E50914"
                  delay={0.14}
                />
              </>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ── Info below image ── */}
      <div className="p-5 flex flex-col gap-2">
        {/* Title */}
        <h3
          className="font-black text-white text-lg leading-tight"
          style={{ color: project.color, letterSpacing: '-0.02em' }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-white/50 text-sm font-light leading-relaxed line-clamp-2">
          {project.desc}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mt-1">
          {project.tech.map(t => (
            <span
              key={t}
              className="font-mono text-xs px-2.5 py-1 rounded border"
              style={{
                color: 'rgba(255,255,255,0.5)',
                borderColor: 'rgba(255,255,255,0.12)',
                background: 'rgba(255,255,255,0.04)',
                letterSpacing: '0.04em',
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ── Main export ──────────────────────────────────────────── */
export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Section marker */}
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-mono text-xs tracking-[0.3em] text-white/30 uppercase">05 / Projects</span>
          <div className="flex-1 h-px bg-white/10" />
        </motion.div>

        {/* Title */}
        <div className="mb-14">
          <div className="overflow-hidden">
            <motion.h2
              className="font-black text-white leading-none"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', letterSpacing: '-0.03em' }}
              initial={{ y: '100%' }} whileInView={{ y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              SELECTED
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              className="font-black leading-none"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', letterSpacing: '-0.03em', WebkitTextStroke: '3px rgba(255,255,255,0.2)', color: 'transparent' }}
              initial={{ y: '100%' }} whileInView={{ y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.07, ease: [0.16, 1, 0.3, 1] }}
            >
              WORK.
            </motion.h2>
          </div>
        </div>

        {/* Card grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* Bottom count */}
        <motion.p
          className="mt-12 font-mono text-xs text-white/15 tracking-widest"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          // {projects.length} projects · hover a card to see links
        </motion.p>
      </div>
    </section>
  );
}