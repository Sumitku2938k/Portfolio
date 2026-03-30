import { AnimatePresence, motion as Motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Button from './Button'
import { easeOutExpo } from '../lib/animations'

function Navbar({ activeSection, items }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-8">
      <Motion.div
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: easeOutExpo }}
        className={`mx-auto max-w-7xl rounded-full border px-4 py-3 backdrop-blur-2xl transition duration-300 sm:px-6 ${
          isScrolled
            ? 'border-white/12 bg-slate-950/75 shadow-[0_20px_60px_rgba(2,6,23,0.45)]'
            : 'border-white/8 bg-slate-950/45'
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <a href="#home" className="text-sm font-semibold uppercase tracking-[0.28em] text-white">
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
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="pointer-events-none absolute inset-0 -z-10 rounded-full opacity-0 transition duration-300 [background:radial-gradient(90px_circle_at_var(--x,50%)_var(--y,50%),rgba(255,255,255,0.12),transparent_60%)] hover:opacity-100" />
                  {isActive ? (
                    <Motion.span
                      layoutId="nav-highlight"
                      className="absolute inset-0 -z-10 rounded-full border border-cyan-300/20 bg-cyan-300/10"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
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
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
            aria-label="Toggle navigation menu"
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className="space-y-1.5">
              <span className={`block h-0.5 w-5 bg-current transition ${isOpen ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block h-0.5 w-5 bg-current transition ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`block h-0.5 w-5 bg-current transition ${isOpen ? '-translate-y-2 -rotate-45' : ''}`} />
            </span>
          </button>
        </div>

        <AnimatePresence>
          {isOpen ? (
            <Motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="overflow-hidden md:hidden"
            >
              <div className="mt-4 space-y-2 border-t border-white/10 pt-4">
                {items.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setIsOpen(false)}
                    className={`block rounded-2xl px-4 py-3 text-sm font-medium ${
                      activeSection === item.id ? 'bg-cyan-400/10 text-white' : 'text-slate-300'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </Motion.nav>
          ) : null}
        </AnimatePresence>
      </Motion.div>
    </header>
  )
}

export default Navbar
