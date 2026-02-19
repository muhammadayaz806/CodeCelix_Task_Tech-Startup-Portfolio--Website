import { motion } from 'framer-motion'

export function TextReveal({
  text,
  className = '',
  delay = 0,
}: {
  text: string
  className?: string
  delay?: number
}) {
  const words = text.split(' ')

  return (
    <span className={['inline-block', className].join(' ')}>
      {words.map((w, i) => (
        <motion.span
          key={`${w}-${i}`}
          className={['inline-block will-change-transform', i < words.length - 1 ? 'mr-[0.28em]' : ''].join(' ')}
          initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: delay + i * 0.06 }}
        >
          {w}
        </motion.span>
      ))}
    </span>
  )
}


