import { motion, useAnimation, useInView } from 'framer-motion'
import { ReactNode, useEffect, useRef } from 'react'

interface RevealProps {
  children: ReactNode
  width?: string
}

export function Reveal({ children, width = '100%' }: RevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    }
  }, [isInView, mainControls])

  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ width: '100%' }}
      >
        {children}
      </motion.div>
    </div>
  )
}

