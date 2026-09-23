import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import BentoCard from './BentoCard'

const USERNAME = 'ranjithkumarmadhavan'
const PROFILE_URL = `https://www.chess.com/member/${USERNAME}`

const modes = [
  { key: 'chess_rapid', label: 'Rapid', icon: '⏱' },
  { key: 'chess_blitz', label: 'Blitz', icon: '⚡' },
  { key: 'chess_bullet', label: 'Bullet', icon: '🔫' },
]

function RatingBar({ label, icon, rating, best }) {
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="flex items-center gap-1.5 text-xs text-muted w-16 shrink-0">
        <span>{icon}</span>
        <span>{label}</span>
      </div>
      <div className="flex-1 h-1.5 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${Math.min((rating / 2000) * 100, 100)}%` }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="h-full rounded-full bg-gradient-to-r from-amber-400 to-yellow-300"
        />
      </div>
      <div className="text-right shrink-0">
        <span className="text-sm font-bold text-slate-200">{rating}</span>
        {best && <span className="text-xs text-muted ml-1">/ {best}</span>}
      </div>
    </div>
  )
}

export default function ChessTile() {
  const [stats, setStats] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(`https://api.chess.com/pub/player/${USERNAME}/stats`)
      .then((r) => {
        if (!r.ok) throw new Error()
        return r.json()
      })
      .then(setStats)
      .catch(() => setError(true))
  }, [])

  return (
    <BentoCard className="col-span-1 p-7 flex flex-col justify-between min-h-[200px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-600/15 via-transparent to-transparent"
      />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between mb-4">
        <div>
          <p className="text-xs text-muted uppercase tracking-widest font-medium mb-0.5">Chess.com</p>
          <a
            href={PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-bold text-slate-200 hover:text-amber-400 transition-colors duration-200 flex items-center gap-1.5"
          >
            ♟ {USERNAME}
            <svg className="h-3 w-3 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/15 border border-amber-500/25 text-xl">
          ♛
        </div>
      </div>

      {/* Ratings */}
      <div className="relative z-10 flex flex-col gap-3">
        {error && (
          <p className="text-xs text-muted">Could not load ratings.</p>
        )}

        {!stats && !error && (
          <div className="flex flex-col gap-3 animate-pulse">
            {modes.map((m) => (
              <div key={m.key} className="flex items-center gap-2">
                <div className="h-3 w-12 rounded bg-white/5" />
                <div className="flex-1 h-1.5 rounded-full bg-white/5" />
                <div className="h-3 w-10 rounded bg-white/5" />
              </div>
            ))}
          </div>
        )}

        {stats && modes.map(({ key, label, icon }) => {
          const data = stats[key]
          if (!data?.last?.rating) return null
          return (
            <RatingBar
              key={key}
              label={label}
              icon={icon}
              rating={data.last.rating}
              best={data.best?.rating}
            />
          )
        })}
      </div>

      {/* Live indicator */}
      <div className="relative z-10 mt-4 flex items-center gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shadow-[0_0_4px_1px_rgba(251,191,36,0.6)]" />
        <span className="text-xs text-muted">Live rating</span>
      </div>
    </BentoCard>
  )
}
