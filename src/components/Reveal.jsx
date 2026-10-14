import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

/**
 * Scroll-triggered reveal wrapper.
 * Fades and lifts content into view on scroll.
 * Respects prefers-reduced-motion via framer-motion.
 */
export default function Reveal({
  children,
  delay = 0,
  className = '',
  as = 'div',
}) {
  const MotionTag = motion[as] || motion.div

  return (
    <MotionTag
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </MotionTag>
  )
}
