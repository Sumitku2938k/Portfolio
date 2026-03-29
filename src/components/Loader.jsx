import { motion as Motion } from 'framer-motion'

function Loader() {
  return (
    <Motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.45 } }}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-[#050816]"
    >
      <div className="relative flex flex-col items-center gap-6">
        <div className="absolute h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
        <Motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2.8, ease: 'linear' }}
          className="relative h-20 w-20 rounded-full border border-white/10 border-r-violet-400 border-t-cyan-400"
        />
        <Motion.p
          initial={{ opacity: 0.4 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.8 }}
          className="text-sm font-medium uppercase tracking-[0.45em] text-slate-300"
        >
          Loading Portfolio
        </Motion.p>
      </div>
    </Motion.div>
  )
}

export default Loader
