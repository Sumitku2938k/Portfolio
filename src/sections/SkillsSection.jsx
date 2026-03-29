import { motion as Motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import SectionWrapper from '../components/SectionWrapper'
import { skillGroups } from '../data/portfolioData'

function SkillsSection() {
  return (
    <SectionWrapper id="skills" className="pt-24">
      <SectionHeader
        eyebrow="Skills"
        title="A balanced stack across interface design, backend logic, and programming fundamentals."
        description="I focus on tools that help me build complete products with polished UX, reliable architecture, and room for growth."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {skillGroups.map((group, index) => (
          <Motion.article
            key={group.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/80">{group.title}</p>
            <p className="mt-4 text-lg font-medium text-white">{group.description}</p>

            <div className="mt-8 space-y-5">
              {group.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-slate-200">{skill.name}</span>
                    <span className="text-slate-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/8">
                    <Motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </Motion.article>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default SkillsSection
