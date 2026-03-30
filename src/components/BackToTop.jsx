import { AnimatePresence, motion as Motion } from 'framer-motion'
import { useEffect, useState } from 'react'

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500)

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible ? (
        <Motion.button
          initial={{ opacity: 0, y: 20, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.92 }}
          whileHover={{ y: -4, scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-slate-950/80 text-white shadow-[0_18px_40px_rgba(2,6,23,0.45)] backdrop-blur-xl sm:right-8"
        >
          ↑
        </Motion.button>
      ) : null}
    </AnimatePresence>
  )
}

export default BackToTop
