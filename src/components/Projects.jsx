import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Youtube, Globe, X, ExternalLink } from 'lucide-react';
import { title } from 'framer-motion/client';

/* ─── Project Data ─────────────────────────────────────────── */
const projects = [
  // ── Fullstack
  {
    title: 'Ekagra App',
    desc: 'A productivity and focus app built with React and Node.js to help users manage tasks and eliminate distractions.',
    tech: ['React', 'Node.js', 'MongoDB'],
    category: 'Fullstack',
    github: 'https://github.com/jaydipvaliya/Ekagra-app',
    youtube: 'https://youtu.be/pI5THUR-pGQ?si=EEZYXYS2Ok-YN-2J',
    live: 'https://ekagra-app-zjbl.vercel.app/',
    image: 'https://res.cloudinary.com/dg4c3rylm/image/upload/v1776339181/Ekagra_app_jdyyn4.png',
    color: '#4CC9F0',
  },
  {
    title: 'Udaan Clone',
    desc: 'Full-stack e-commerce clone inspired by Udaan B2B platform with product listings and cart management.',
    tech: ['React', 'Express', 'MongoDB'],
    category: 'Fullstack',
    github: 'https://github.com/jaydipvaliya/clone_project_repo/tree/main/udaan%20clone.cg',
    youtube: 'https://youtu.be/YlrkHHWErt4?si=uJcluyQjyJlq22-I',
    live: 'https://udaan-clone.netlify.app/',
    image: 'https://research-assets.cbinsights.com/2022/01/07091403/udaan-1-768x342.png?w=256',
    color: '#A78BFA',
  },
  // ── Clones
  {
    title: 'Bentley Clone',
    desc: 'A pixel-perfect clone of the Bentley Motors website showcasing advanced CSS animations and responsive design.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'Clones',
    github: 'https://github.com/jaydipvaliya/clone_project_repo/tree/main/Bentali%20clone.cg',
    youtube: 'https://youtu.be/edL_sEMZXbQ?si=fWYvylWvNSlJXXmC',
    live: 'https://bentley-clone.netlify.app/',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/68ce0e81497589.5d013167b8e56.png',
    color: '#FB923C',
  },
  {
    title: 'DJI Clone',
    desc: "Frontend clone of DJI's product landing page with smooth scroll animations and interactive product showcases.",
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'Clones',
    github: 'https://github.com/jaydipvaliya/clone_project_repo/tree/main/dji%20clone.cg',
    youtube: 'https://youtu.be/dGQqi107MLU?si=2Fn0qQTs_Ocjk-YK',
    live: 'https://dji-clone-project.netlify.app/',
    image: 'https://tse2.mm.bing.net/th/id/OIP.1HQqLztkn2xzGPXPgDaSmQHaEo?rs=1&pid=ImgDetMain&o=7&rm=3',
    color: '#60A5FA',
  },
  {
    title: 'Drop Clone',
    desc: 'Frontend clone of the Dropbox landing page with responsive layout and clean modern design.',
    tech: ['HTML', 'CSS'],
    category: 'Clones',
    github: 'https://github.com/jaydipvaliya/clone_project_repo/tree/main/drop%20clone.cg',
    youtube: 'https://youtu.be/MmYtvzlxMsc?si=qJ88uS46DfoMDVVn',
    live: 'https://drop-clone.netlify.app/',
    image: 'https://res.cloudinary.com/dg4c3rylm/image/upload/v1776339497/drop_clone_objrhc.png',
    color: '#34D399',
  },
  // ── Games
  {
    title: 'Memory Flip Game',
    desc: 'Classic memory card-matching game with multiple difficulty levels, score tracking, and smooth flip animations.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    category: 'Games',
    github: 'https://github.com/jaydipvaliya/game-project-repo/tree/main/memory%20flip%20card%20game',
    youtube: null,
    live: 'https://gamethron-memory-flip.netlify.app/',
    image: 'https://user-images.githubusercontent.com/101303690/197692380-23583000-8f62-4f5f-b3c7-d818325f5377.png',
    color: '#4ADE80',
  },
  {
    title: 'Color Guessing Zone',
    desc: 'Interactive color guessing game — train your eye for exact RGB values with a leaderboard and timer.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    category: 'Games',
    github: 'https://github.com/jaydipvaliya/game-project-repo/tree/main/color%20guessing',
    youtube: null,
    live: 'https://gamethron-color-gassing.netlify.app/',
    image: 'https://foolishdeveloper.com/wp-content/uploads/2024/05/thumbnail-12.png',
    color: '#FACC15',
  },
  {
    title: 'Whack-a-Mole',
    desc: 'Browser-based arcade game with increasing speed levels and high score tracking.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    category: 'Games',
    github: 'https://github.com/jaydipvaliya/game-project-repo/tree/main/Whack-a-Mole',
    youtube: null,
    live: 'https://gamethron-wake-a-mole.netlify.app/',
    image: 'https://www.sourcecodester.com/sites/default/files/images/rems/wam.png',
    color: '#F472B6',
  },
  {
    title: 'Click Counter',
    desc: 'Minimalist click-counter app with animated count display, reset functionality, and keyboard shortcuts.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    category: 'Games',
    github: 'https://github.com/jaydipvaliya/game-project-repo/tree/main/clickcount',
    youtube: null,
    live: 'https://gamethron-click-count.netlify.app/',
    image: 'https://tse3.mm.bing.net/th/id/OIP.GFixrrYXBSzkqC9-IV4AiQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3',
    color: '#FB923C',
  },
];

/* ─── Figma Designs ────────────────────────────────────────── */
// Replace these embed URLs with your actual Figma file embed links
// Go to Figma → Share → Get embed link → paste here
const figmaDesigns = [
  {
    title: 'Sign Up Page Design',
    desc: 'Modern sign-up page design with clean form elements, vibrant color scheme, and engaging micro-interactions.',
    tags: ['UI/UX', 'Web'],
    color: '#A259FF',
    embed: 'https://embed.figma.com/design/e5HhR7TYnWsvpKJBo1MKde/Untitled?node-id=4-2&embed-host=share',
    thumb: 'https://res.cloudinary.com/dg4c3rylm/image/upload/v1776340242/Slice_12_hirecy.png',
  },
  {
    title: 'Explore Page UI',
    desc: 'Mobile explore page design for a social media app featuring a dynamic feed, interactive filters, and bold typography.',
    tags: ['Mobile', 'UI'],
    color: '#F24E1E',
    embed: 'https://embed.figma.com/design/e5HhR7TYnWsvpKJBo1MKde/Untitled?node-id=4-2&embed-host=share',
    thumb: 'https://res.cloudinary.com/dg4c3rylm/image/upload/v1776340353/Slice_13_swo8bg.png',
  },
  {
    title: 'Movie website design',
    desc: 'A sleek movie streaming website design with a dark theme, immersive visuals, and intuitive navigation.',
    tags: ['Dashboard', 'UI/UX'],
    color: '#1ABCFE',
    embed: 'https://embed.figma.com/design/e5HhR7TYnWsvpKJBo1MKde/Untitled?node-id=4-2&embed-host=share',
    thumb: 'https://res.cloudinary.com/dg4c3rylm/image/upload/v1776340632/slice_14_rvjgeq.png',
  },
  {
    title: 'E-commerce Product Page',
    desc: 'Clean and modern e-commerce product page design with a focus on high-quality imagery, clear CTAs, and user reviews.',
    tags: ['E-commerce', 'UI'],
    color: '#0ACF83',
    embed: 'https://embed.figma.com/design/e5HhR7TYnWsvpKJBo1MKde/Untitled?node-id=4-2&embed-host=share',
    thumb: 'https://res.cloudinary.com/dg4c3rylm/image/upload/v1776340880/Slice_15_h1zt2p.png',
  },
  {
    title: 'shoe store design',
    desc: 'A vibrant shoe store website design with a bold color palette, dynamic product displays, and seamless user experience.',
    tags: ['UI/UX', 'Web'],
    color: '#FACC15',
    embed: 'https://embed.figma.com/design/e5HhR7TYnWsvpKJBo1MKde/Untitled?node-id=4-2&embed-host=share',
    thumb: 'https://res.cloudinary.com/dg4c3rylm/image/upload/v1776341052/slice_16_cyv84n.png',
  },
  {
    title: 'Mall website design',
    desc: 'A modern mall website design with a clean layout, intuitive navigation, and engaging visual elements.',
    tags: ['UI/UX', 'Web'],
    color: '#1ABCFE',
    embed: 'https://embed.figma.com/design/e5HhR7TYnWsvpKJBo1MKde/Untitled?node-id=4-2&embed-host=share',
    thumb: 'https://res.cloudinary.com/dg4c3rylm/image/upload/v1776341217/slice_17_jqwbfu.png',
  }
];

/* ─── Categories ──────────────────────────────────────────── */
const CATEGORIES = ['All', 'Fullstack', 'Clones', 'Games', 'Figma'];
const CAT_COLORS  = { All: '#fff', Fullstack: '#4CC9F0', Clones: '#FB923C', Games: '#4ADE80', Figma: '#A259FF' };

/* ─── Gradient fallback per project ──────────────────────── */
function GradientThumb({ color, title }) {
  return (
    <div className="w-full h-full flex items-center justify-center"
      style={{ background: `radial-gradient(ellipse at 50% 35%, ${color}30 0%, #050507 70%)` }}>
      <span className="font-black text-5xl select-none"
        style={{ color: `${color}35`, letterSpacing: '-0.04em' }}>
        {title.slice(0, 2).toUpperCase()}
      </span>
    </div>
  );
}

/* ─── Circular hover button ───────────────────────────────── */
function CircleBtn({ href, icon: Icon, bg, delay }) {
  return (
    <motion.a href={href} target="_blank" rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20, delay }}
      whileHover={{ scale: 1.14 }} whileTap={{ scale: 0.9 }}
      onClick={e => e.stopPropagation()}
      className="w-11 h-11 rounded-full flex items-center justify-center shadow-xl"
      style={{ background: bg }}>
      <Icon size={18} color="#fff" />
    </motion.a>
  );
}

/* ─── Project card ────────────────────────────────────────── */
function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, type: 'spring', stiffness: 90, damping: 18 }}
      className="flex flex-col overflow-hidden"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '12px',
        transition: 'border-color .3s, box-shadow .3s',
      }}
      onMouseEnter={e => {
        setHovered(true);
        e.currentTarget.style.borderColor = `${project.color}50`;
        e.currentTarget.style.boxShadow   = `0 8px 40px ${project.color}18`;
      }}
      onMouseLeave={e => {
        setHovered(false);
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
        e.currentTarget.style.boxShadow   = 'none';
      }}
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '16/9', background: '#050507' }}>
        {project.image
          ? <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top"
              style={{ filter: hovered ? 'brightness(.55)' : 'brightness(.8)', transition: 'filter .3s' }}
              onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }} />
          : null
        }
        <div style={{ display: project.image ? 'none' : 'flex', width:'100%', height:'100%' }}>
          <GradientThumb color={project.color} title={project.title} />
        </div>
        {/* Hover overlay */}
        {project.image && (
          <div className="absolute inset-0 transition-opacity duration-300"
            style={{ background: 'rgba(5,5,7,0.3)', opacity: hovered ? 1 : 0 }} />
        )}
        {/* Bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-2/5 pointer-events-none"
          style={{ background: 'linear-gradient(to top,rgba(5,5,7,.9),transparent)' }} />
        {/* Action buttons */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 z-10">
          <AnimatePresence>
            {hovered && (
              <>
                <CircleBtn href={project.github}  icon={Github}  bg="#1a1a1a"     delay={0}    />
                {project.live    && <CircleBtn href={project.live}    icon={Globe}   bg={project.color} delay={0.07} />}
                {project.youtube && <CircleBtn href={project.youtube} icon={Youtube} bg="#E50914"  delay={0.14} />}
              </>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col gap-2">
        <h3 className="font-black text-lg leading-tight"
          style={{ color: project.color, letterSpacing: '-0.02em' }}>
          {project.title}
        </h3>
        <p className="text-white/45 text-sm font-light leading-relaxed line-clamp-2">{project.desc}</p>
        <div className="flex flex-wrap gap-2 mt-1">
          {project.tech.map(t => (
            <span key={t} className="font-mono text-xs px-2.5 py-1 rounded border"
              style={{ color:'rgba(255,255,255,.45)', borderColor:'rgba(255,255,255,.1)', background:'rgba(255,255,255,.04)', letterSpacing:'.04em' }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Figma card ──────────────────────────────────────────── */
function FigmaCard({ design, index, onClick }) {
  const [hovered, setHovered] = useState(false);
  const c = design.color;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, type: 'spring', stiffness: 90, damping: 18 }}
      onClick={onClick}
      className="flex flex-col overflow-hidden cursor-pointer"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: `1px solid ${c}30`,
        borderRadius: '12px',
        transition: 'border-color .3s, box-shadow .3s',
      }}
      onMouseEnter={e => {
        setHovered(true);
        e.currentTarget.style.borderColor = `${c}70`;
        e.currentTarget.style.boxShadow   = `0 8px 40px ${c}20`;
      }}
      onMouseLeave={e => {
        setHovered(false);
        e.currentTarget.style.borderColor = `${c}30`;
        e.currentTarget.style.boxShadow   = 'none';
      }}
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
        {design.thumb
          ? <img src={design.thumb} alt={design.title} className="w-full h-full object-cover"
              style={{ filter: hovered ? 'brightness(.6)' : 'brightness(.85)', transition: 'filter .3s' }} />
          : (
            <div className="w-full h-full flex items-center justify-center"
              style={{ background: `radial-gradient(ellipse at 50% 35%, ${c}25 0%, #050507 70%)` }}>
              {/* Figma F logo */}
              <svg viewBox="0 0 128 128" width="52" height="52" style={{ opacity: hovered ? .6 : .35, transition:'opacity .3s' }}>
                <path fill="#F24E1E" d="M44 128c11 0 20-9 20-20V88H44c-11 0-20 9-20 20s9 20 20 20z"/>
                <path fill="#FF7262" d="M24 64c0-11 9-20 20-20h20v40H44c-11 0-20-9-20-20z"/>
                <path fill="#A259FF" d="M24 24c0-11 9-20 20-20h20v40H44C33 44 24 35 24 24z"/>
                <path fill="#1ABCFE" d="M64 4h20c11 0 20 9 20 20s-9 20-20 20H64V4z"/>
                <path fill="#0ACF83" d="M104 64c0 11-9 20-20 20s-20-9-20-20 9-20 20-20 20 9 20 20z"/>
              </svg>
            </div>
          )
        }
        {/* Hover overlay */}
        <div className="absolute inset-0 transition-opacity duration-300 flex items-center justify-center"
          style={{ background:'rgba(5,5,7,.45)', opacity: hovered ? 1 : 0 }}>
          <motion.div animate={{ scale: hovered ? 1 : 0.8 }} transition={{ duration: .2 }}
            className="flex items-center gap-2 font-mono text-xs tracking-widest uppercase border px-4 py-2"
            style={{ color: c, borderColor: `${c}60`, background:'rgba(0,0,0,.6)' }}>
            Click to Preview
          </motion.div>
        </div>
        {/* Bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
          style={{ background:'linear-gradient(to top,rgba(5,5,7,.9),transparent)' }} />
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col gap-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-black text-lg leading-tight" style={{ color: c, letterSpacing:'-0.02em' }}>
            {design.title}
          </h3>
          <ExternalLink size={14} style={{ color:`${c}60`, flexShrink:0, marginTop:4 }} />
        </div>
        <p className="text-white/45 text-sm font-light leading-relaxed line-clamp-2">{design.desc}</p>
        <div className="flex flex-wrap gap-2 mt-1">
          {design.tags.map(t => (
            <span key={t} className="font-mono text-xs px-2.5 py-1 rounded border"
              style={{ color:`${c}80`, borderColor:`${c}30`, background:`${c}0a`, letterSpacing:'.04em' }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Figma Lightbox ──────────────────────────────────────── */
function FigmaLightbox({ design, onClose }) {
  return (
    <AnimatePresence>
      {design && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
          style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(14px)' }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: .88, opacity: 0, y: 24 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: .9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 22 }}
            className="w-full max-w-5xl flex flex-col overflow-hidden"
            style={{
              background: '#0c0c0e',
              border: `1px solid ${design.color}40`,
              boxShadow: `0 0 80px ${design.color}20`,
              borderRadius: '16px',
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between px-6 py-4"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <div>
                <h3 className="font-black text-white text-base" style={{ color: design.color, letterSpacing:'-0.02em' }}>
                  {design.title}
                </h3>
                <p className="font-mono text-[10px] text-white/25 tracking-widest mt-0.5 uppercase">Figma Design</p>
              </div>
              <button onClick={onClose}
                className="w-8 h-8 flex items-center justify-center text-white/30 hover:text-white border border-white/10 hover:border-white/30 rounded-lg transition-all">
                <X size={15}/>
              </button>
            </div>

            {/* Figma embed */}
            <div style={{ height: '70vh', background: '#050507' }}>
              <iframe
                src={design.embed}
                allowFullScreen
                className="w-full h-full border-0"
                title={design.title}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─── Main export ─────────────────────────────────────────── */
export default function Projects() {
  const [active, setActive]   = useState('All');
  const [figmaOpen, setFigmaOpen] = useState(null);

  const filtered = active === 'All'
    ? projects
    : active === 'Figma'
    ? []
    : projects.filter(p => p.category === active);

  const showFigma = active === 'All' || active === 'Figma';

  return (
    <section id="projects" className="py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Section marker */}
        <motion.div className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="font-mono text-xs tracking-[0.3em] text-white/30 uppercase">05 / Projects</span>
          <div className="flex-1 h-px bg-white/10" />
        </motion.div>

        {/* Title */}
        <div className="mb-12">
          <div className="overflow-hidden">
            <motion.h2 className="font-black text-white leading-none"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', letterSpacing: '-0.03em' }}
              initial={{ y: '100%' }} whileInView={{ y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}>
              SELECTED
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2 className="font-black leading-none"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', letterSpacing: '-0.03em', WebkitTextStroke: '1px rgba(255,255,255,0.2)', color: 'transparent' }}
              initial={{ y: '100%' }} whileInView={{ y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.07, ease: [0.16, 1, 0.3, 1] }}>
              WORK.
            </motion.h2>
          </div>
        </div>

        {/* Category tabs */}
        <motion.div className="flex flex-wrap gap-2.5 mb-12"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: .2 }}>
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setActive(cat)}
              className="font-mono text-xs tracking-widest uppercase px-4 py-2 transition-all duration-200"
              style={{
                border: `1px solid ${active === cat ? `${CAT_COLORS[cat]}70` : 'rgba(255,255,255,0.08)'}`,
                background: active === cat ? `${CAT_COLORS[cat]}15` : 'transparent',
                color: active === cat ? CAT_COLORS[cat] : 'rgba(255,255,255,0.3)',
                borderRadius: '6px',
              }}>
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project cards */}
        <AnimatePresence mode="wait">
          {filtered.length > 0 && (
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filtered.map((p, i) => (
                <ProjectCard key={p.title} project={p} index={i} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Figma section */}
        <AnimatePresence>
          {showFigma && (
            <motion.div
              key="figma-section"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}>
              {/* Figma section label */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-[#A259FF]" />
                <span className="font-mono text-xs tracking-[0.25em] uppercase text-[#A259FF80]">
                  Figma Designs
                </span>
                <div className="flex-1 h-px bg-[#A259FF15]" />
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {figmaDesigns.map((d, i) => (
                  <FigmaCard key={d.title} design={d} index={i}
                    onClick={() => setFigmaOpen(d)} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom note */}
        <motion.p className="mt-12 font-mono text-xs text-white/15 tracking-widest"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: .5 }}>
          // {projects.length} projects · {figmaDesigns.length} figma designs · hover cards to see links
        </motion.p>
      </div>

      {/* Figma lightbox */}
      <FigmaLightbox design={figmaOpen} onClose={() => setFigmaOpen(null)} />
    </section>
  );
}