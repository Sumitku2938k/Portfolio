import SectionHeader from '../components/SectionHeader'
import SectionWrapper from '../components/SectionWrapper'

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
        <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
          <SectionHeader
            eyebrow="About Me"
            title="Building useful products with strong fundamentals and modern polish."
            description="I’m a B.Tech CSE student focused on full-stack development and AI-powered applications. I enjoy translating ideas into responsive interfaces, scalable backends, and practical digital experiences that feel refined from first impression to final interaction."
          />
        </div>

        <div className="space-y-6 rounded-[30px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-[24px] border border-white/8 bg-slate-950/50 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/80">Focus</p>
              <p className="mt-4 text-lg font-medium text-white">Full-stack development</p>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                I enjoy connecting elegant frontend experiences with dependable backend systems.
              </p>
            </div>
            <div className="rounded-[24px] border border-white/8 bg-slate-950/50 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-300/80">Special Interest</p>
              <p className="mt-4 text-lg font-medium text-white">AI-powered applications</p>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                I’m especially interested in weaving AI into products that solve practical user problems.
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Core Toolkit</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default AboutSection
