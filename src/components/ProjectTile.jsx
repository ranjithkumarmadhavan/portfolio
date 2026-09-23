import { motion } from 'framer-motion'
import BentoCard from './BentoCard'

const techColors = {
  'AWS Lambda': 'bg-orange-500/15 text-orange-300 border-orange-500/20',
  'Amazon S3': 'bg-green-500/15 text-green-300 border-green-500/20',
  'Python': 'bg-yellow-500/15 text-yellow-300 border-yellow-500/20',
  'AWS Lex': 'bg-sky-500/15 text-sky-300 border-sky-500/20',
  'Alexa Skills Kit': 'bg-blue-500/15 text-blue-300 border-blue-500/20',
  'Node.js': 'bg-emerald-500/15 text-emerald-300 border-emerald-500/20',
  'Amazon Pay': 'bg-indigo-500/15 text-indigo-300 border-indigo-500/20',
  'default': 'bg-white/5 text-slate-300 border-white/10',
}

function getTechColor(tech) {
  return techColors[tech] || techColors['default']
}

export default function ProjectTile({ name, description, tech, icon, accentColor = 'sky', large = false, glowColor }) {
  const accentMap = {
    sky: 'from-sky-600/20',
    purple: 'from-purple-600/20',
    indigo: 'from-indigo-600/20',
    violet: 'from-violet-600/20',
  }

  const gradient = accentMap[accentColor] || accentMap.sky

  return (
    <BentoCard
      glowColor={glowColor}
      className={`${large ? 'col-span-1 lg:col-span-2' : 'col-span-1'} p-7 lg:p-8 flex flex-col justify-between min-h-[240px]`}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${gradient} via-transparent to-transparent`}
      />

      <div className="relative z-10 flex-1">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-2xl">
            {icon}
          </div>
          <motion.div
            whileHover={{ x: 2, y: -2 }}
            transition={{ duration: 0.2 }}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10 cursor-pointer"
          >
            <svg className="h-3.5 w-3.5 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </motion.div>
        </div>

        <p className="text-xs text-muted uppercase tracking-widest font-medium mb-1">
          Featured Project
        </p>
        <h3 className="text-base sm:text-lg font-bold text-slate-100 mb-3 leading-snug">
          {name}
        </h3>
        <p className="text-muted text-sm leading-relaxed">
          {description}
        </p>
      </div>

      <div className="relative z-10 mt-5 flex flex-wrap gap-1.5">
        {tech.map((t) => (
          <span
            key={t}
            className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${getTechColor(t)}`}
          >
            {t}
          </span>
        ))}
      </div>
    </BentoCard>
  )
}
