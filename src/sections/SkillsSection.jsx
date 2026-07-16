import { motion as Motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import SectionWrapper from '../components/SectionWrapper'
import { skillGroups } from '../data/portfolioData'
import { fadeUp, hoverLift, staggerContainer, staggerFast } from '../lib/animations'

function SkillsSection() {
  return (
    //SkillsSection is a bit more complex than the other sections, so I decided to keep it as a separate component instead of lazy loading it. This way, I can ensure that the animations and layout are smooth and responsive without any loading delays.
    <SectionWrapper id="skills" className="pt-24">
      <SectionHeader
        eyebrow="Skills"
        title="A balanced stack across interface design, backend logic, and programming fundamentals."
        description="I focus on tools that help me build complete products with polished UX, reliable architecture, and room for growth."
      />

      <Motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-12 grid gap-6 lg:grid-cols-2"
      >
        {skillGroups.map((group, index) => (
          <Motion.article
            key={group.title}
            variants={fadeUp}
            whileHover={hoverLift}
            transition={{ duration: 0.35, ease: 'easeOut', delay: index * 0.04 }}
            className="rounded-[28px] border border-white/[0.06] bg-white/[0.01] p-6 backdrop-blur-xl sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.3),_inset_0_1px_rgba(255,255,255,0.02)]"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400">{group.title}</p>
            <p className="mt-4 text-base sm:text-lg font-bold text-white tracking-tight">{group.description}</p>

            <Motion.div variants={staggerFast} className="mt-8 space-y-5">
              {group.skills.map((skill) => (
                <Motion.div
                  key={skill.name}
                  variants={fadeUp}
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                >
                  <div className="mb-2 flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-slate-300 font-light">{skill.name}</span>
                    <span className="text-slate-400 font-semibold font-mono text-xs">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]">
                    <Motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 shadow-[0_0_12px_rgba(34,211,238,0.4)]"
                    />
                  </div>
                </Motion.div>
              ))}
            </Motion.div>
          </Motion.article>
        ))}
      </Motion.div>
    </SectionWrapper>
  )
}

export default SkillsSection
