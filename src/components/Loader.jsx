import { motion as Motion } from 'framer-motion'
import { easeOutExpo } from '../lib/animations'

function Loader() {
  return (
    <Motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.03,
        filter: 'blur(8px)',
        transition: { duration: 0.6, ease: easeOutExpo },
      }}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-[#050816]"
    >
      <Motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="relative flex flex-col items-center gap-6"
      >
        <div className="absolute h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
        <Motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: easeOutExpo } },
          }}
          className="relative"
        >
          <Motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.8, ease: 'linear' }}
            className="h-20 w-20 rounded-full border border-white/10 border-r-violet-400 border-t-cyan-400"
          />
        </Motion.div>
        <Motion.p
          variants={{
            hidden: { opacity: 0, y: 10, letterSpacing: '0.3em' },
            show: { 
              opacity: 1, 
              y: 0, 
              letterSpacing: '0.45em',
              transition: { duration: 0.8, ease: easeOutExpo } 
            },
          }}
          className="text-sm font-semibold uppercase text-slate-350"
        >
          Loading Portfolio
        </Motion.p>
      </Motion.div>
    </Motion.div>
  )
}

export default Loader
