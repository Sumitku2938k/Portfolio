import { motion as Motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import SectionHeader from '../components/SectionHeader'
import SectionWrapper from '../components/SectionWrapper'
import { featuredProjects } from '../data/portfolioData'
import { easeOutExpo, staggerContainer } from '../lib/animations'

function ProjectsSection() {
  return (
    <SectionWrapper id="projects" className="pt-24">
      <SectionHeader
        eyebrow="Projects"
        title="Selected work that blends product thinking, UI craft, and implementation depth."
        description="A focused set of three product-driven builds that reflect my approach to clean interfaces, practical functionality, and polished user experience."
      />

      <Motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, ease: easeOutExpo }}
        className="mt-14 rounded-[36px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8 lg:p-10"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/80">Featured Work</p>
          <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
            Three projects, each designed to feel substantial and product-ready
          </h3>
          <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
            Each card below highlights a stronger end-to-end build with clearer visual hierarchy, spacious composition,
            and premium interaction polish.
          </p>
        </div>

        <Motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mx-auto mt-10 grid max-w-6xl gap-8 lg:grid-cols-2 xl:grid-cols-3"
        >
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} featured />
          ))}
        </Motion.div>
      </Motion.div>
    </SectionWrapper>
  )
}

export default ProjectsSection
