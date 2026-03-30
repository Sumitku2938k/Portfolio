import { motion as Motion } from 'framer-motion'
import Button from './Button'
import { fadeUp } from '../lib/animations'

function ProjectCard({ project, featured = false }) {
  return (
    <Motion.article
      variants={fadeUp}
      whileHover={featured ? { y: -10, scale: 1.03 } : { y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 240, damping: 24 }}
      className={`group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-shadow duration-300 ${
        featured
          ? 'min-h-[430px] shadow-[0_24px_80px_rgba(2,6,23,0.35)] hover:shadow-[0_34px_110px_rgba(14,165,233,0.16)] sm:p-8'
          : 'min-h-[230px]'
      }`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.accent || 'from-white/10 to-transparent'} ${
          featured ? 'opacity-100' : 'opacity-80'
        }`}
      />
      <div className="absolute inset-px rounded-[31px] border border-white/8 bg-[linear-gradient(180deg,rgba(15,23,42,0.62),rgba(2,6,23,0.92))]" />
      {featured ? (
        <Motion.div
          animate={{ opacity: [0.45, 0.8, 0.45] }}
          transition={{ duration: 3.2, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent opacity-70"
        />
      ) : null}

      <div className="relative flex h-full flex-col">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h3 className={`${featured ? 'text-3xl' : 'text-2xl'} font-semibold text-white`}>{project.title}</h3>
            {featured ? (
              <p className="mt-2 max-w-xs text-sm uppercase tracking-[0.24em] text-cyan-200/80">
                {project.label || 'Featured Build'}
              </p>
            ) : null}
          </div>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
            {featured ? 'Case Study' : 'Mini App'}
          </span>
        </div>

        <p className={`${featured ? 'text-base leading-8' : 'text-sm leading-7'} text-slate-300`}>{project.description}</p>

        <div className="mt-7 flex flex-wrap gap-2.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-cyan-400/15 bg-cyan-400/10 px-3.5 py-1.5 text-xs font-medium text-cyan-100"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-3 pt-10">
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
