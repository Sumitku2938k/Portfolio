import { motion as Motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import SectionWrapper from '../components/SectionWrapper'
import { fadeLeft, fadeRight, fadeUp, staggerContainer, staggerFast } from '../lib/animations'

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Tailwind CSS',
  'Node.js',
  'Express.js',
  'MongoDB',
  'SQL',
  'Python',
  'C',
  'C++',
]

function AboutSection() {
  return (
    <SectionWrapper id="about" className="pt-24">
      <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <Motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="rounded-[28px] border border-white/[0.06] bg-white/[0.01] p-6 sm:p-8 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.3),_inset_0_1px_rgba(255,255,255,0.02)]"
        >
          <Motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
            <Motion.div variants={fadeUp}>
              <SectionHeader
                eyebrow="About Me"
                title="Building useful products with strong fundamentals and modern polish."
                description="I’m a B.Tech CSE student focused on full-stack development and AI-powered applications. I enjoy translating ideas into responsive interfaces, scalable backends, and practical digital experiences that feel refined from first impression to final interaction."
              />
            </Motion.div>
          </Motion.div>
        </Motion.div>

        <Motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="space-y-6 rounded-[28px] border border-white/[0.06] bg-white/[0.01] p-6 sm:p-8 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.3),_inset_0_1px_rgba(255,255,255,0.02)]"
        >
          <Motion.div
            variants={staggerFast}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid gap-5 sm:grid-cols-2"
          >
            <Motion.div variants={fadeUp} className="rounded-2xl border border-white/[0.04] bg-[#020512]/60 p-5 shadow-[inset_0_1px_rgba(255,255,255,0.01)] hover:border-cyan-500/20 transition-all duration-300">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400">Focus</p>
              <p className="mt-4 text-base sm:text-lg font-bold text-white tracking-tight">Full-stack development</p>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-400 font-light">
                I enjoy connecting elegant frontend experiences with dependable backend systems.
              </p>
            </Motion.div>
            <Motion.div variants={fadeUp} className="rounded-2xl border border-white/[0.04] bg-[#020512]/60 p-5 shadow-[inset_0_1px_rgba(255,255,255,0.01)] hover:border-violet-500/20 transition-all duration-300">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-violet-400">Special Interest</p>
              <p className="mt-4 text-base sm:text-lg font-bold text-white tracking-tight">AI-powered applications</p>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-400 font-light">
                I’m especially interested in weaving AI into products that solve practical user problems.
              </p>
            </Motion.div>
          </Motion.div>

          <Motion.div variants={staggerFast} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
            <Motion.p variants={fadeUp} className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              Core Toolkit
            </Motion.p>
            <Motion.div variants={staggerFast} className="mt-4 flex flex-wrap gap-2.5">
              {skills.map((skill) => (
                <Motion.span
                  key={skill}
                  variants={fadeUp}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-300 hover:border-cyan-500/20 hover:text-white transition-colors duration-300"
                >
                  {skill}
                </Motion.span>
              ))}
            </Motion.div>
          </Motion.div>
        </Motion.div>
      </div>
    </SectionWrapper>
  )
}

export default AboutSection
