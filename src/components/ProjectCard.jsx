import { motion as Motion } from 'framer-motion'
import Button from './Button'
import { fadeUp } from '../lib/animations'

function ProjectCard({ project, featured = false }) {
  return (
    <Motion.article
      variants={fadeUp}
      whileHover={featured ? { y: -6, scale: 1.015 } : { y: -5, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 220, damping: 22 }}
      className={`group relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-xl transition-shadow duration-500 ${
        featured
          ? 'min-h-[440px] shadow-[0_24px_60px_rgba(2,6,23,0.4)] hover:shadow-[0_32px_90px_rgba(34,211,238,0.12)] sm:p-8'
          : 'min-h-[230px] shadow-[0_12px_40px_rgba(2,6,23,0.3)] hover:shadow-[0_16px_50px_rgba(34,211,238,0.06)]'
      }`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.accent || 'from-white/5 to-transparent'} transition-opacity duration-500 ${
          featured ? 'opacity-80 group-hover:opacity-100' : 'opacity-50 group-hover:opacity-80'
        }`}
      />
      <div className="absolute inset-px rounded-[27px] border border-white/[0.05] bg-[linear-gradient(180deg,rgba(8,11,24,0.65),rgba(3,5,15,0.98))]" />
      {featured ? (
        <Motion.div
          animate={{ opacity: [0.35, 0.7, 0.35] }}
          transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
        />
      ) : null}

      <div className="relative flex h-full flex-col">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h3 className={`${featured ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'} font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors duration-300`}>{project.title}</h3>
            {featured ? (
              <p className="mt-1.5 max-w-xs text-[10px] sm:text-xs uppercase tracking-[0.24em] text-cyan-200/70 font-semibold">
                {project.label || 'Featured Build'}
              </p>
            ) : null}
          </div>
          <span className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400">
            {featured ? 'Case Study' : 'Mini App'}
          </span>
        </div>

        <p className={`${featured ? 'text-sm sm:text-base leading-relaxed sm:leading-8' : 'text-xs sm:text-sm leading-relaxed sm:leading-7'} text-slate-300 font-light`}>{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-cyan-500/[0.08] bg-cyan-950/[0.25] px-3 py-1 text-[10px] sm:text-xs font-medium tracking-wide text-cyan-300 transition-colors duration-300 hover:border-cyan-500/20"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-3 pt-8">
          <Button href={project.githubUrl} target="_blank" rel="noreferrer" variant="secondary" className="px-4 py-2 border-white/[0.08] hover:border-cyan-500/35">
            GitHub
          </Button>
          <Button href={project.liveUrl} target="_blank" rel="noreferrer" className="px-4 py-2">
            Live Demo
          </Button>
        </div>
      </div>
    </Motion.article>
  )
}

export default ProjectCard
