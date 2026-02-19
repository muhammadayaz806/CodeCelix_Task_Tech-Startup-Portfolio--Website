import { motion, type MotionProps, useInView } from 'framer-motion'
import { useMemo, useRef } from 'react'

export function FadeIn({
  children,
  className,
  delay = 0,
  y = 18,
  once = true,
  ...props
}: MotionProps & {
  className?: string
  delay?: number
  y?: number
  once?: boolean
  children: React.ReactNode
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { amount: 0.2, once })

  const variants = useMemo(
    () => ({
      hidden: { opacity: 0, y },
      visible: { opacity: 1, y: 0 },
    }),
    [y],
  )

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      {...props}
    >
      {children}
    </motion.div>
  )
}


