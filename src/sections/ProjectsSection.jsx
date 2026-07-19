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
        className="mt-12 rounded-[28px] border border-white/[0.06] bg-white/[0.01] p-6 backdrop-blur-xl sm:p-8 lg:p-10 shadow-[0_30px_70px_rgba(0,0,0,0.4),_inset_0_1px_rgba(255,255,255,0.02)]"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">Featured Work</p>
          <h3 className="mt-3 text-xl sm:text-3xl font-extrabold tracking-tight text-white leading-snug">
            Three projects, each designed to feel substantial and product-ready
          </h3>
          <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-400 font-light">
            Each card below highlights a stronger end-to-end build with clearer visual hierarchy, spacious composition,
            and premium interaction polish.
          </p>
        </div>

        <Motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mx-auto mt-10 grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3"
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
