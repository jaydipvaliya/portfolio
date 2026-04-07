import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const languages = [
  { name: 'Gujarati', level: 'Native', flag: '🇮🇳', percent: 100 },
  { name: 'Hindi', level: 'Fluent', flag: '🇮🇳', percent: 95 },
  { name: 'English', level: 'Professional', flag: '🇬🇧', percent: 80 },
];

export default function Languages() {
  const { isCreative } = useTheme();

  return (
    <section className={`py-16 px-4 ${isCreative ? '' : 'bg-slate-900'}`}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-10"
        >
          <div className="section-label text-xl px-8">LANGUAGES</div>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4">
          {languages.map(({ name, level, flag, percent }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-5 text-center transition-all ${
                isCreative
                  ? 'brutal-card hover:bg-yellow-50'
                  : 'bg-slate-800/50 border border-slate-700 rounded-xl hover:border-blue-500/40'
              }`}
            >
              <div className="text-4xl mb-2">{flag}</div>
              <h3 className={`font-black text-lg mb-1 ${isCreative ? '' : 'text-white'}`}>{name}</h3>
              <p className={`text-sm font-semibold mb-3 ${isCreative ? 'text-gray-500' : 'text-slate-400'}`}>{level}</p>
              {!isCreative && (
                <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
