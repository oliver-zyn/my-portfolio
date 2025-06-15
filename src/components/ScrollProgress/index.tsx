import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function ScrollProgress() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY
          const docHeight =
            document.documentElement.scrollHeight - window.innerHeight
          const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0
          setScrollY(scrollPercent)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX: scrollY }}
      initial={{ scaleX: 0 }}
      transition={{ type: 'spring', stiffness: 400, damping: 40 }}
    />
  )
}
