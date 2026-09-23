import { motion } from 'framer-motion'
import { tileVariants } from '../animations'
import HeroTile from './HeroTile'
import YouTubeTile from './YouTubeTile'
import SkillsTile from './SkillsTile'
import ProjectTile from './ProjectTile'
import ContactTile from './ContactTile'
import ChessTile from './ChessTile'

const projects = [
  {
    id: 'compression',
    name: 'On-the-Fly Cloud Compression & Automation',
    description:
      'Engineered a serverless architecture using AWS Lambda to automatically compress and optimize files within Amazon S3 buckets on the fly, reducing storage costs and improving delivery latency.',
    tech: ['AWS Lambda', 'Amazon S3', 'Python'],
    icon: '☁️',
    accentColor: 'sky',
    large: false,
  },
  {
    id: 'chatbots',
    name: 'Intelligent Conversational Interfaces',
    description:
      'Developed dynamic, data-driven chatbot flows using AWS Lex and Lambda, incorporating complex Python input validation, slot management, and external API integrations for enterprise use.',
    tech: ['AWS Lex', 'AWS Lambda', 'Python'],
    icon: '🤖',
    accentColor: 'purple',
    glowColor: 'purple',
    large: false,
  },
  {
    id: 'voice',
    name: 'Enterprise Voice Skills',
    description:
      'Built advanced voice-enabled applications including an Alexa reservation system integrated with Amazon Pay for Alexa for Residential (A4R), and multi-lingual audio streaming apps.',
    tech: ['Alexa Skills Kit', 'Node.js', 'Amazon Pay'],
    icon: '🎙️',
    accentColor: 'indigo',
    large: false,
  },
]

export default function BentoGrid() {
  return (
    <div className="mx-auto max-w-6xl">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-8 flex items-center justify-between"
      >
        <div className="flex items-center gap-2 text-xs text-muted font-mono">
          <span className="text-accent">~/</span>portfolio
        </div>
        <div className="text-xs text-muted font-mono">
          2026 · Chennai, India
        </div>
      </motion.div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto">
        {/* Row 1: Hero (2 cols) + Contact (1 col) + Skills (1 col) */}
        <HeroTile />
        <ContactTile />
        <SkillsTile />

        {/* Row 2: YouTube (2 cols) + Project 1 (1 col) + Project 2 (1 col) */}
        <YouTubeTile />
        <ProjectTile {...projects[0]} />
        <ProjectTile {...projects[1]} />

        {/* Row 3: Project 3 spanning 2 cols + a stat tile */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2">
          <ProjectTile
            {...projects[2]}
            className="h-full"
            large
          />
        </div>
        <LocationTile />
        <StatsTile />
        <ChessTile />
      </div>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="mt-10 text-center text-xs text-muted font-mono"
      >
        Built with React · Tailwind CSS · Framer Motion
      </motion.p>
    </div>
  )
}

function LocationTile() {
  return (
    <motion.div
      variants={tileVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      whileHover={{ scale: 1.015, transition: { duration: 0.25, ease: 'easeOut' } }}
      className="col-span-1 rounded-2xl bg-surface bento-border p-7 flex flex-col justify-between min-h-[160px] transition-all duration-300 hover:border-accent/30 hover:bg-surface-2 hover:shadow-glow relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-600/10 via-transparent to-transparent rounded-2xl"
      />
      <div className="relative z-10">
        <div className="text-3xl mb-3">📍</div>
        <p className="text-xs text-muted uppercase tracking-widest font-medium mb-1">Based in</p>
        <p className="text-xl font-bold text-slate-200">Chennai</p>
        <p className="text-sm text-muted">Tamil Nadu, India</p>
      </div>
      <p className="relative z-10 text-xs text-muted mt-3">UTC+5:30</p>
    </motion.div>
  )
}

function StatsTile() {
  return (
    <motion.div
      variants={tileVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      whileHover={{ scale: 1.015, transition: { duration: 0.25, ease: 'easeOut' } }}
      className="col-span-1 rounded-2xl bg-surface bento-border p-7 flex flex-col gap-5 min-h-[160px] transition-all duration-300 hover:border-accent/30 hover:bg-surface-2 hover:shadow-glow relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/8 via-transparent to-transparent rounded-2xl"
      />
      <div className="relative z-10">
        <p className="text-xs text-muted uppercase tracking-widest font-medium mb-4">At a glance</p>
        <div className="grid grid-cols-2 gap-4">
          {[
            { value: 'AWS', label: 'Certified' },
            { value: '3+', label: 'Years Exp.' },
            { value: '∞', label: 'Serverless' },
            { value: 'AI', label: 'Focused' },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-xl font-extrabold gradient-text">{s.value}</p>
              <p className="text-xs text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
