import { AnimatePresence, motion as Motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Button from './Button'
import { easeOutExpo, springs } from '../lib/animations'

function Navbar({ activeSection, items }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        height: { duration: 0.3, ease: 'easeInOut' },
        opacity: { duration: 0.25 },
        staggerChildren: 0.04,
        staggerDirection: -1,
      },
    },
    open: {
      height: 'auto',
      opacity: 1,
      transition: {
        height: { duration: 0.45, ease: easeOutExpo },
        opacity: { duration: 0.35 },
        staggerChildren: 0.06,
        delayChildren: 0.04,
      },
    },
  }
  const itemVariants = {
    closed: { opacity: 0, x: -12, scale: 0.95 },
    open: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.45, ease: easeOutExpo } },
  }

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-8">
      <Motion.div
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, ease: easeOutExpo }}
        className={`mx-auto max-w-7xl rounded-full border px-4 py-3 backdrop-blur-2xl transition-all duration-300 sm:px-6 ${
          isScrolled
            ? 'border-white/[0.12] bg-[#050816]/85 shadow-[0_20px_50px_rgba(0,0,0,0.5),_inset_0_1px_0_rgba(255,255,255,0.05)]'
            : 'border-white/[0.06] bg-[#050816]/40'
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <a
            href="#home"
            className="text-xs sm:text-sm font-semibold uppercase tracking-[0.24em] text-white hover:text-cyan-300 transition-colors duration-300"
          >
            Goutam.dev
          </a>

          <nav className="hidden items-center gap-2 md:flex">
            {items.map((item) => {
              const isActive = activeSection === item.id

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onMouseMove={(event) => {
                    event.currentTarget.style.setProperty('--x', `${event.nativeEvent.offsetX}px`)
                    event.currentTarget.style.setProperty('--y', `${event.nativeEvent.offsetY}px`)
                  }}
                  className={`group relative rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="pointer-events-none absolute inset-0 -z-10 rounded-full opacity-0 transition duration-300 [background:radial-gradient(90px_circle_at_var(--x,50%)_var(--y,50%),rgba(255,255,255,0.12),transparent_60%)] group-hover:opacity-100" />
                  {isActive ? (
                    <Motion.span
                      layoutId="nav-highlight"
                      className="absolute inset-0 -z-10 rounded-full border border-cyan-300/20 bg-cyan-300/10"
                      transition={springs.stiff}
                    />
                  ) : null}
                  {item.label}
                </a>
              )
            })}
          </nav>

          <div className="hidden md:block">
            <Button href="#contact" className="px-5 py-2.5" onClick={() => setIsOpen(false)}>
              Contact
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:bg-white/10 active:scale-95 md:hidden"
            aria-label="Toggle navigation menu"
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className="space-y-1.5">
              <span className={`block h-0.5 w-5 bg-current transition-transform duration-300 ${isOpen ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block h-0.5 w-5 bg-current transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`block h-0.5 w-5 bg-current transition-transform duration-300 ${isOpen ? '-translate-y-2 -rotate-45' : ''}`} />
            </span>
          </button>
        </div>

        <AnimatePresence>
          {isOpen ? (
            <Motion.nav
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="overflow-hidden md:hidden"
            >
              <div className="mt-4 space-y-1.5 border-t border-white/[0.08] pt-4">
                {items.map((item) => {
                  const isActive = activeSection === item.id
                  return (
                    <Motion.a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() => setIsOpen(false)}
                      variants={itemVariants}
                      className={`block rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'border border-cyan-500/20 bg-cyan-500/[0.08] text-cyan-200'
                          : 'border border-transparent text-slate-300 hover:bg-white/[0.04] hover:text-white'
                      }`}
                    >
                      {item.label}
                    </Motion.a>
                  )
                })}
              </div>
            </Motion.nav>
          ) : null}
        </AnimatePresence>
      </Motion.div>
    </header>
  )
}

export default Navbar
