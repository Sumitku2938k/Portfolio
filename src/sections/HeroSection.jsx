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
      <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,15,31,0.94),rgba(5,8,22,0.98))] px-6 py-16 shadow-[0_30px_120px_rgba(2,6,23,0.5)] sm:px-10 lg:px-14 lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_24%),radial-gradient(circle_at_80%_15%,_rgba(139,92,246,0.2),_transparent_22%),linear-gradient(135deg,rgba(14,165,233,0.08),transparent_50%,rgba(139,92,246,0.08))]" />

        {particles.map((position, index) => (
          <Motion.span
            key={position}
            animate={{ y: [0, -14, 0], opacity: [0.25, 0.8, 0.25] }}
            transition={{ duration: 4 + index, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
            className={`absolute ${position} h-2 w-2 rounded-full bg-cyan-300/70 shadow-[0_0_20px_rgba(34,211,238,0.8)]`}
          />
        ))}

        <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Motion.span
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100"
            >
              B.Tech CSE Student
            </Motion.span>

            <Motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.15 }}
              className="mt-8 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl"
            >
              Goutam
              <span className="mt-4 block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                Full Stack Developer | AI Enthusiast
              </span>
            </Motion.h1>

            <Motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.25 }}
              className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
            >
              Passionate about building real-world web applications and integrating AI into practical systems.
            </Motion.p>

            <Motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.35 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button href="#projects">View Projects</Button>
              <Button href="#contact" variant="secondary">
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
            <div className="absolute -inset-4 bg-gradient-to-br from-cyan-400/15 via-blue-500/10 to-violet-500/15 blur-3xl" />
            <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.28em] text-slate-400">Developer Focus</p>
                  <p className="mt-3 text-2xl font-semibold text-white">Modern interfaces with practical intelligence</p>
                </div>
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl border border-white/8 bg-slate-950/60 p-5">
                    <p className="text-2xl font-semibold text-white">{stat.value}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[26px] border border-white/8 bg-[linear-gradient(135deg,rgba(34,211,238,0.12),rgba(99,102,241,0.06),rgba(15,23,42,0.65))] p-6">
                <div className="flex items-center justify-between text-sm text-slate-300">
                  <span>Currently exploring</span>
                  <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-cyan-100">
                    AI + Full Stack
                  </span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-200">
                  <div className="rounded-2xl bg-white/5 p-4">React interfaces with premium UX</div>
                  <div className="rounded-2xl bg-white/5 p-4">Backend systems with clean APIs</div>
                  <div className="rounded-2xl bg-white/5 p-4">Database-driven web apps</div>
                  <div className="rounded-2xl bg-white/5 p-4">AI integration for real products</div>
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
