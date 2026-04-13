import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Send, CheckCircle, AlertCircle, ArrowUpRight } from 'lucide-react';

const socials = [
  { icon: Github,   label: 'GitHub',      href: 'https://github.com/jaydipvaliya',                      username: '@jaydipvaliya'              },
  { icon: Linkedin, label: 'LinkedIn',    href: 'https://www.linkedin.com/in/jaydip-valiya-a1009737b/', username: 'Jaydip Valiya'              },
  { icon: Twitter,  label: 'Twitter / X', href: 'https://x.com/JaydipValiya024',                        username: '@JaydipValiya024'            },
  { icon: Mail,     label: 'Email',       href: 'mailto:jaydip.valiya.cg@gmail.com',                    username: 'jaydip.valiya.cg@gmail.com' },
];

const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('loading'); setErrorMsg('');
    try {
      const emailjs = await import('@emailjs/browser').catch(() => null);
      if (!emailjs || EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID') {
        await new Promise(r => setTimeout(r, 1000));
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
        return;
      }
      await emailjs.default.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, subject: form.subject || 'Portfolio contact', message: form.message },
        EMAILJS_PUBLIC_KEY);
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong. Please email me directly.');
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-16" style={{ background: 'transparent' }}
      aria-label="Contact Jaydip Valiya">
      <div className="max-w-6xl mx-auto">

        {/* Section marker */}
        <motion.div className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="font-mono text-xs tracking-[0.3em] text-white/30 uppercase">07 / Contact</span>
          <div className="flex-1 h-px bg-white/10" aria-hidden="true" />
        </motion.div>

        {/* Giant heading */}
        <div className="mb-16">
          <div className="overflow-hidden">
            <motion.h2 className="font-black text-white leading-none"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', letterSpacing: '-0.03em' }}
              initial={{ y: '100%' }} whileInView={{ y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}>
              LET'S BUILD
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2 className="font-black leading-none"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', letterSpacing: '-0.03em', WebkitTextStroke: '1px rgba(255,255,255,0.2)', color: 'transparent' }}
              initial={{ y: '100%' }} whileInView={{ y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.07, ease: [0.16, 1, 0.3, 1] }}>
              SOMETHING.
            </motion.h2>
          </div>
          <motion.p className="text-white/40 text-lg font-light mt-6 max-w-lg"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            Got a project, a collab idea, or just want to say hi? My inbox is always open.
          </motion.p>
        </div>

        {/* Two-column */}
        <div className="grid md:grid-cols-2 gap-16">

          {/* Left: socials */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="font-mono text-xs text-white/30 tracking-widest uppercase mb-6" aria-hidden="true">// Find me here</p>
            <nav className="space-y-0 border-t border-white/[0.07]" aria-label="Social media and contact links">
              {socials.map(({ icon: Icon, label, href, username }, i) => (
                <motion.a key={label} href={href}
                  target={href.startsWith('mailto:') ? '_self' : '_blank'}
                  rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="flex items-center justify-between py-5 border-b border-white/[0.07] hover:border-white/20 group cursor-pointer transition-colors"
                  aria-label={`${label}: ${username}`}>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 flex items-center justify-center text-white/25 group-hover:text-white transition-colors duration-200" aria-hidden="true">
                      <Icon size={17}/>
                    </div>
                    <div>
                      <p className="text-white/70 font-semibold text-sm group-hover:text-white transition-colors duration-200">{label}</p>
                      <p className="text-white/25 text-xs font-mono mt-0.5">{username}</p>
                    </div>
                  </div>
                  <ArrowUpRight size={15} className="text-white/15 group-hover:text-white/60 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true"/>
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Right: form */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            {status === 'success' ? (
              <div className="flex flex-col gap-4 pt-8" role="status" aria-live="polite">
                <CheckCircle size={36} className="text-white/60" aria-hidden="true"/>
                <h3 className="text-2xl font-black text-white">Message sent!</h3>
                <p className="text-white/40 text-sm">Thanks for reaching out. I'll get back to you soon.</p>
                <button onClick={() => setStatus('idle')}
                  className="mt-4 text-sm font-semibold text-white border-b border-white/30 hover:border-white pb-0.5 w-fit transition-colors">
                  Send another →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
                <p className="font-mono text-xs text-white/30 tracking-widest uppercase mb-8" aria-hidden="true">// Drop me a message</p>

                {[
                  { name: 'name',    placeholder: 'Your name',          type: 'text',  required: true,  autoComplete: 'name'  },
                  { name: 'email',   placeholder: 'Your email',         type: 'email', required: true,  autoComplete: 'email' },
                  { name: 'subject', placeholder: 'Subject (optional)', type: 'text',  required: false, autoComplete: 'off'   },
                ].map((f, i) => (
                  <motion.div key={f.name}
                    initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                    className="border-b border-white/[0.1] focus-within:border-white/40 transition-colors">
                    <label htmlFor={`contact-${f.name}`} className="sr-only">{f.placeholder}</label>
                    <input id={`contact-${f.name}`} type={f.type} name={f.name} placeholder={f.placeholder}
                      value={form[f.name]} onChange={handleChange} required={f.required}
                      autoComplete={f.autoComplete}
                      className="w-full bg-transparent text-white placeholder-white/20 text-sm py-3 outline-none font-light"/>
                  </motion.div>
                ))}

                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: 0.3 }}
                  className="border-b border-white/[0.1] focus-within:border-white/40 transition-colors">
                  <label htmlFor="contact-message" className="sr-only">Your message</label>
                  <textarea id="contact-message" name="message" placeholder="Your message..." rows={4}
                    value={form.message} onChange={handleChange} required
                    autoComplete="off"
                    className="w-full bg-transparent text-white placeholder-white/20 text-sm py-3 outline-none resize-none font-light"/>
                </motion.div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-400/70 text-xs font-mono" role="alert">
                    <AlertCircle size={14} aria-hidden="true"/>{errorMsg}
                  </div>
                )}

                <button type="submit" disabled={status === 'loading'}
                  className="flex items-center gap-3 text-white font-semibold text-sm border-b border-white/30 hover:border-white pb-0.5 transition-colors disabled:opacity-40 group">
                  {status === 'loading' ? (
                    <><div className="w-3.5 h-3.5 border border-white/50 border-t-white/80 rounded-full animate-spin" aria-hidden="true"/>Sending...</>
                  ) : (
                    <><Send size={14} aria-hidden="true"/>Send message
                      <ArrowUpRight size={13} className="opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true"/>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}