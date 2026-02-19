import { motion } from 'framer-motion'

export function Loader() {
  return (
    <div className="grid min-h-screen place-items-center">
      <motion.div
        className="flex items-center gap-3 rounded-2xl border border-border bg-card/60 px-5 py-4 shadow-glow backdrop-blur"
        initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <motion.div
          className="h-3 w-3 rounded-full bg-accent"
          animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="h-3 w-3 rounded-full bg-primary"
          animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut', delay: 0.15 }}
        />
        <span className="text-sm font-semibold text-muted">Loading NovaOps…</span>
      </motion.div>
    </div>
  )
}


