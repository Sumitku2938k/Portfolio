import { AnimatePresence, motion as Motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { easeOutExpo } from '../lib/animations'

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
          initial={{ opacity: 0, y: 24, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.85, transition: { duration: 0.35, ease: easeOutExpo } }}
          whileHover={{
            y: -5,
            scale: 1.08,
            borderColor: 'rgba(34, 211, 238, 0.35)',
            backgroundColor: 'rgba(5, 8, 22, 0.95)',
            boxShadow: '0 20px 45px rgba(2, 6, 23, 0.65), 0 0 25px rgba(34, 211, 238, 0.15)',
          }}
          whileTap={{ scale: 0.94 }}
          transition={{ type: 'spring', stiffness: 350, damping: 20 }}
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-slate-950/80 text-white shadow-[0_18px_40px_rgba(2,6,23,0.45)] backdrop-blur-xl transition-[border-color,background-color,box-shadow] duration-300 sm:right-8 cursor-pointer"
        >
          ↑
        </Motion.button>
      ) : null}
    </AnimatePresence>
  )
}

export default BackToTop
