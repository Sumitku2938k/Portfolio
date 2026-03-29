import ProjectCard from '../components/ProjectCard'
import SectionHeader from '../components/SectionHeader'
import SectionWrapper from '../components/SectionWrapper'
import { featuredProjects, miniProjects } from '../data/portfolioData'

const miniProjectCards = miniProjects.map((project) => ({
  title: project,
  description: 'A compact project built to sharpen frontend logic, interactions, and real-world implementation speed.',
  tags: ['JavaScript', 'Responsive UI', 'Frontend'],
  githubUrl: 'https://github.com/',
  liveUrl: 'https://example.com/',
  accent: 'from-white/10 via-slate-400/5 to-transparent',
}))

function ProjectsSection() {
  return (
    <SectionWrapper id="projects" className="pt-24">
      <SectionHeader
        eyebrow="Projects"
        title="Selected work that blends product thinking, UI craft, and implementation depth."
        description="The featured projects highlight full product experiences, while the mini builds show consistency in execution, experimentation, and frontend problem solving."
      />

      <div className="mt-12 grid gap-6 xl:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} featured />
        ))}
      </div>

      <div className="mt-14 rounded-[32px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/80">Mini Projects</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">A lab of fast iterations and hands-on practice</h3>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-slate-400">
            These smaller builds sharpen UI thinking, logic handling, API integration, and interactive frontend development.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {miniProjectCards.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default ProjectsSection
