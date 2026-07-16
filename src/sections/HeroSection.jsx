import { motion as Motion } from 'framer-motion'
import Button from '../components/Button'
import SectionWrapper from '../components/SectionWrapper'
import { stats } from '../data/portfolioData'

const particles = [
  'left-[8%] top-[18%]',
  'left-[24%] top-[72%]',
  'left-[76%] top-[22%]',
  'left-[88%] top-[62%]',
]

function HeroSection() {
  return (
    <SectionWrapper id="home" className="pt-14 sm:pt-20">
      <div className="relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(8,11,24,0.92),rgba(4,6,15,0.98))] px-6 py-16 shadow-[0_30px_100px_rgba(0,0,0,0.65),_inset_0_1px_rgba(255,255,255,0.04)] sm:px-10 lg:px-14 lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.14),_transparent_28%),radial-gradient(circle_at_85%_15%,_rgba(139,92,246,0.15),_transparent_26%),linear-gradient(135deg,rgba(14,165,233,0.05),transparent_50%,rgba(139,92,246,0.05))]" />

        {particles.map((position, index) => (
          <Motion.span
            key={position}
            animate={{ y: [0, -14, 0], opacity: [0.25, 0.8, 0.25] }}
            transition={{ duration: 4 + index, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
            className={`absolute ${position} h-1.5 w-1.5 rounded-full bg-cyan-400/80 shadow-[0_0_15px_rgba(34,211,238,0.8)]`}
          />
        ))}

        <div className="relative grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Motion.span
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/[0.06] px-4 py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-cyan-300"
            >
              B.Tech CSE Student
            </Motion.span>

            <Motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.15 }}
              className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-7xl"
            >
              Sumit Kumar
              <span className="mt-3 block bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent font-extrabold leading-tight">
                Full Stack Developer | AI Enthusiast
              </span>
            </Motion.h1>

            <Motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.25 }}
              className="mt-6 max-w-xl text-sm sm:text-base leading-relaxed sm:leading-8 text-slate-300 font-light"
            >
              Passionate about building real-world web applications and integrating AI into practical systems.
            </Motion.p>

            <Motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.35 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button href="/assets/resume.pdf" download className="px-5 py-3">
                <span className="inline-flex items-center gap-2">
                  <span aria-hidden="true" className="text-base">↓</span>
                  <span>Download Resume</span>
                </span>
              </Button>
              <Button href="#contact" variant="secondary" className="px-5 py-3 border-white/[0.08] hover:border-cyan-500/30">
                Contact Me
              </Button>
            </Motion.div>
          </div>

          <Motion.div
            initial={{ opacity: 0, scale: 0.92, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-cyan-400/10 via-blue-500/5 to-violet-500/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[24px] border border-white/[0.06] bg-[#070b19]/40 p-6 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.35),_inset_0_1px_rgba(255,255,255,0.05)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Developer Focus</p>
                  <p className="mt-2 text-xl font-bold tracking-tight text-white leading-tight">Modern interfaces with practical intelligence</p>
                </div>
                <div className="flex gap-1.5 self-start">
                  <span className="h-2 w-2 rounded-full bg-rose-500/80" />
                  <span className="h-2 w-2 rounded-full bg-amber-500/80" />
                  <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
                </div>
              </div>

              <div className="mt-8 grid gap-4 grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-white/[0.05] bg-[#030612]/75 p-4 shadow-[inset_0_1px_rgba(255,255,255,0.02)] transition-colors duration-300 hover:border-cyan-500/20">
                    <p className="text-xl sm:text-2xl font-bold text-white font-mono tracking-tight">{stat.value}</p>
                    <p className="mt-2 text-[10px] sm:text-xs leading-snug text-slate-400 font-light">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl border border-white/[0.05] bg-[linear-gradient(135deg,rgba(34,211,238,0.06),rgba(99,102,241,0.03),rgba(3,6,15,0.8))] p-4 shadow-[inset_0_1px_rgba(255,255,255,0.02)]">
                <div className="flex items-center justify-between text-xs text-slate-350">
                  <span className="font-light">Currently exploring</span>
                  <span className="rounded-full border border-cyan-500/25 bg-cyan-500/[0.08] px-2.5 py-0.5 text-[9px] uppercase tracking-widest font-semibold text-cyan-300">
                    AI + Full Stack
                  </span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-slate-300">
                  <div className="rounded-lg border border-white/[0.03] bg-white/[0.01] p-3 font-light hover:bg-white/[0.03] hover:text-white transition-all duration-300">React interfaces with premium UX</div>
                  <div className="rounded-lg border border-white/[0.03] bg-white/[0.01] p-3 font-light hover:bg-white/[0.03] hover:text-white transition-all duration-300">Backend systems with clean APIs</div>
                  <div className="rounded-lg border border-white/[0.03] bg-white/[0.01] p-3 font-light hover:bg-white/[0.03] hover:text-white transition-all duration-300">Database-driven web apps</div>
                  <div className="rounded-lg border border-white/[0.03] bg-white/[0.01] p-3 font-light hover:bg-white/[0.03] hover:text-white transition-all duration-300">AI integration for real products</div>
                </div>
              </div>
            </div>
          </Motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default HeroSection

