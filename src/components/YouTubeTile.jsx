import { motion } from 'framer-motion'
import BentoCard from './BentoCard'

export default function YouTubeTile() {
  return (
    <BentoCard className="col-span-1 md:col-span-2 lg:col-span-2 p-7 lg:p-8 flex flex-col justify-between min-h-[200px]" glowColor="purple">
      {/* Background gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-transparent"
      />

      <div className="relative z-10">
        <div className="mb-5 flex items-center gap-4">
          {/* YouTube play icon */}
          <a href="https://www.youtube.com/@themadrasprogrammer" target="_blank" rel="noopener noreferrer">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF0000]/20 border border-[#FF0000]/30 cursor-pointer"
          >
            <svg className="h-7 w-7 text-[#FF0000]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </motion.div>
          </a>

          <div>
            <p className="text-xs text-muted uppercase tracking-widest font-medium mb-0.5">
              YouTube Channel
            </p>
            <a
              href="https://www.youtube.com/@themadrasprogrammer"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 transition-colors duration-200"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-slate-100 tracking-tight">
                THE MADRAS PROGRAMMER
              </h2>
            </a>
          </div>
        </div>

        <p className="text-muted text-sm leading-relaxed">
          Creating content, tutorials, and coding insights for the developer community.
          Serverless, AI, and full-stack deep dives.
        </p>
      </div>

      <div className="relative z-10 mt-5 flex items-center gap-2 text-xs text-muted">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
          Tutorials
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
          Cloud
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
          AI
        </span>
      </div>
    </BentoCard>
  )
}
