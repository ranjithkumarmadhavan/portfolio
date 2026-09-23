import { motion } from 'framer-motion'
import { tileVariants } from '../animations'

export default function BentoCard({ children, className = '', glowColor = 'accent' }) {
  const glowClass = glowColor === 'purple' ? 'hover:shadow-glow-purple' : 'hover:shadow-glow'

  return (
    <motion.div
      variants={tileVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      whileHover={{ scale: 1.015, transition: { duration: 0.25, ease: 'easeOut' } }}
      className={`
        relative overflow-hidden rounded-2xl bg-surface bento-border
        transition-all duration-300 ease-out
        hover:border-accent/30 hover:bg-surface-2
        ${glowClass}
        ${className}
      `}
    >
      {children}
    </motion.div>
  )
}
