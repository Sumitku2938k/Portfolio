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
          className="rounded-[30px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
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
          className="space-y-6 rounded-[30px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
        >
          <Motion.div
            variants={staggerFast}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid gap-5 sm:grid-cols-2"
          >
            <Motion.div variants={fadeUp} className="rounded-[24px] border border-white/8 bg-slate-950/50 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/80">Focus</p>
              <p className="mt-4 text-lg font-medium text-white">Full-stack development</p>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                I enjoy connecting elegant frontend experiences with dependable backend systems.
              </p>
            </Motion.div>
            <Motion.div variants={fadeUp} className="rounded-[24px] border border-white/8 bg-slate-950/50 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-300/80">Special Interest</p>
              <p className="mt-4 text-lg font-medium text-white">AI-powered applications</p>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                I’m especially interested in weaving AI into products that solve practical user problems.
              </p>
            </Motion.div>
          </Motion.div>

          <Motion.div variants={staggerFast} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
            <Motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
              Core Toolkit
            </Motion.p>
            <Motion.div variants={staggerFast} className="mt-5 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <Motion.span
                  key={skill}
                  variants={fadeUp}
                  whileHover={{ y: -2, scale: 1.02 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200"
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
