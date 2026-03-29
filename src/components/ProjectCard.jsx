import { motion as Motion } from 'framer-motion'
import Button from './Button'

function ProjectCard({ project, featured = false }) {
  return (
    <Motion.article
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className={`group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl ${
        featured ? 'min-h-[360px]' : 'min-h-[230px]'
      }`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${project.accent || 'from-white/10 to-transparent'} opacity-80`} />
      <div className="absolute inset-px rounded-[27px] border border-white/8 bg-[linear-gradient(180deg,rgba(15,23,42,0.62),rgba(2,6,23,0.92))]" />

      <div className="relative flex h-full flex-col">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
            {featured ? (
              <p className="mt-2 max-w-xs text-sm uppercase tracking-[0.24em] text-cyan-200/80">Featured Build</p>
            ) : null}
          </div>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
            {featured ? 'Case Study' : 'Mini App'}
          </span>
        </div>

        <p className="text-sm leading-7 text-slate-300">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-cyan-400/15 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-100"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-3 pt-8">
          <Button href={project.githubUrl} target="_blank" rel="noreferrer" variant="secondary" className="px-5 py-2.5">
            GitHub
          </Button>
          <Button href={project.liveUrl} target="_blank" rel="noreferrer" className="px-5 py-2.5">
            Live Demo
          </Button>
        </div>
      </div>
    </Motion.article>
  )
}

export default ProjectCard
