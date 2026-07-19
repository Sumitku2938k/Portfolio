import { motion as Motion } from 'framer-motion'
import Button from '../components/Button'
import SectionWrapper from '../components/SectionWrapper'
import { stats } from '../data/portfolioData'
import { easeOutExpo, springs } from '../lib/animations'

const particles = [
  'left-[8%] top-[18%]',
  'left-[24%] top-[72%]',
  'left-[76%] top-[22%]',
  'left-[88%] top-[62%]',
]

function HeroSection() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.08,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: easeOutExpo },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.9, ease: easeOutExpo, delay: 0.2 },
    },
  }

  return (
    <SectionWrapper id="home" className="pt-14 sm:pt-20 pb-20 relative">
      <div className="relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(8,11,24,0.92),rgba(4,6,15,0.98))] px-6 py-16 shadow-[0_30px_100px_rgba(0,0,0,0.65),_inset_0_1px_rgba(255,255,255,0.04)] sm:px-10 lg:px-14 lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.14),_transparent_28%),radial-gradient(circle_at_85%_15%,_rgba(139,92,246,0.15),_transparent_26%),linear-gradient(135deg,rgba(14,165,233,0.05),transparent_50%,rgba(139,92,246,0.05))]" />

        {particles.map((position, index) => (
          <Motion.span
            key={position}
            animate={{
              y: [0, -12, 0],
              x: [0, index % 2 === 0 ? 8 : -8, 0],
              opacity: [0.2, 0.7, 0.2]
            }}
            transition={{
              duration: 5 + index * 1.2,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut'
            }}
            className={`absolute ${position} h-1.5 w-1.5 rounded-full bg-cyan-400/80 shadow-[0_0_15px_rgba(34,211,238,0.8)]`}
          />
        ))}

        <div className="relative grid items-center gap-10 grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] mb-8 lg:mb-12">
          <Motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col items-start"
          >
            <Motion.span
              variants={itemVariants}
              className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/[0.06] px-4 py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-cyan-300"
            >
              B.Tech CSE Student
            </Motion.span>

            <Motion.h1
              variants={itemVariants}
              className="mt-6 max-w-3xl text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-7xl font-sans"
            >
              Sumit Kumar
              <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent font-extrabold text-2xl sm:text-4xl lg:text-6xl leading-tight">
                Full Stack Developer | AI Enthusiast
              </span>
            </Motion.h1>

            <Motion.p
              variants={itemVariants}
              className="mt-6 max-w-xl text-sm sm:text-base leading-relaxed sm:leading-8 text-slate-350 font-light"
            >
              Passionate about building real-world web applications and integrating AI into practical systems.
            </Motion.p>

            <Motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button href="/assets/resume.pdf" download className="px-5 py-3">
                <span className="inline-flex items-center gap-2">
                  <span aria-hidden="true" className="text-base select-none">↓</span>
                  <span>Download Resume</span>
                </span>
              </Button>
              <Button href="#contact" variant="secondary" className="px-5 py-3 border-white/[0.08] hover:border-cyan-500/30">
                Contact Me
              </Button>
            </Motion.div>
          </Motion.div>

          <Motion.div
            variants={cardVariants}
            initial="hidden"
            animate="show"
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-cyan-400/10 via-blue-500/5 to-violet-500/10 blur-3xl" />
            
            <Motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'easeInOut'
              }}
              className="relative overflow-hidden rounded-[24px] border border-white/[0.06] bg-[#070b19]/40 p-6 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.35),_inset_0_1px_rgba(255,255,255,0.05)]"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Developer Focus</p>
                  <p className="mt-2 text-xl font-bold tracking-tight text-white leading-tight">Modern interfaces with practical intelligence</p>
                </div>
                <div className="flex gap-1.5 self-start select-none">
                  <span className="h-2 w-2 rounded-full bg-rose-500/80" />
                  <span className="h-2 w-2 rounded-full bg-amber-500/80" />
                  <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
                </div>
              </div>

              <div className="mt-8 grid gap-3 grid-cols-1 min-[420px]:grid-cols-3">
                {stats.map((stat) => (
                  <Motion.div
                    key={stat.label}
                    whileHover={{ y: -3, borderColor: 'rgba(34, 211, 238, 0.25)', backgroundColor: 'rgba(255,255,255,0.02)' }}
                    transition={springs.gentle}
                    className="rounded-xl border border-white/[0.05] bg-[#030612]/75 p-4 shadow-[inset_0_1px_rgba(255,255,255,0.02)] transition-colors duration-300"
                  >
                    <p className="text-xl sm:text-2xl font-bold text-white font-mono tracking-tight">{stat.value}</p>
                    <p className="mt-2 text-[10px] sm:text-xs leading-snug text-slate-400 font-light">{stat.label}</p>
                  </Motion.div>
                ))}
              </div>

              <div className="mt-6 rounded-xl border border-white/[0.05] bg-[linear-gradient(135deg,rgba(34,211,238,0.06),rgba(99,102,241,0.03),rgba(3,6,15,0.8))] p-4 shadow-[inset_0_1px_rgba(255,255,255,0.02)]">
                <div className="flex items-center justify-between text-xs text-slate-350">
                  <span className="font-light">Currently exploring</span>
                  <span className="rounded-full border border-cyan-500/25 bg-cyan-500/[0.08] px-2.5 py-0.5 text-[9px] uppercase tracking-widest font-semibold text-cyan-300">
                    AI + Full Stack
                  </span>
                </div>
                <div className="mt-4 grid grid-cols-1 min-[360px]:grid-cols-2 gap-2 text-xs text-slate-300">
                  <Motion.div
                    whileHover={{ scale: 1.02, x: 2, borderColor: 'rgba(34, 211, 238, 0.15)', color: '#ffffff' }}
                    transition={springs.gentle}
                    className="rounded-lg border border-white/[0.03] bg-white/[0.01] p-3 font-light transition-all duration-300 cursor-default"
                  >
                    React interfaces with premium UX
                  </Motion.div>
                  <Motion.div
                    whileHover={{ scale: 1.02, x: 2, borderColor: 'rgba(34, 211, 238, 0.15)', color: '#ffffff' }}
                    transition={springs.gentle}
                    className="rounded-lg border border-white/[0.03] bg-white/[0.01] p-3 font-light transition-all duration-300 cursor-default"
                  >
                    Backend systems with clean APIs
                  </Motion.div>
                  <Motion.div
                    whileHover={{ scale: 1.02, x: 2, borderColor: 'rgba(34, 211, 238, 0.15)', color: '#ffffff' }}
                    transition={springs.gentle}
                    className="rounded-lg border border-white/[0.03] bg-white/[0.01] p-3 font-light transition-all duration-300 cursor-default"
                  >
                    Database-driven web apps
                  </Motion.div>
                  <Motion.div
                    whileHover={{ scale: 1.02, x: 2, borderColor: 'rgba(34, 211, 238, 0.15)', color: '#ffffff' }}
                    transition={springs.gentle}
                    className="rounded-lg border border-white/[0.03] bg-white/[0.01] p-3 font-light transition-all duration-300 cursor-default"
                  >
                    AI integration for real products
                  </Motion.div>
                </div>
              </div>
            </Motion.div>
          </Motion.div>
        </div>

        <Motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 cursor-pointer select-none"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-slate-500 hover:text-cyan-400 transition-colors duration-300">Scroll</span>
          <div className="h-7 w-[18px] rounded-full border border-slate-500/50 flex justify-center p-1">
            <Motion.div
              animate={{ y: [0, 8, 0], opacity: [1, 0, 1] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 1.8,
                ease: 'easeInOut',
              }}
              className="h-1 w-1 rounded-full bg-cyan-400"
            />
          </div>
        </Motion.div>
      </div>
    </SectionWrapper>
  )
}

export default HeroSection
