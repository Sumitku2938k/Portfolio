import { motion as Motion } from 'framer-motion'
import Button from './Button'
import { fadeUp, springs } from '../lib/animations'

function ProjectCard({ project, featured = false }) {
  return (
    <Motion.article
      variants={fadeUp}
      whileHover={{
        y: featured ? -8 : -6,
        scale: featured ? 1.012 : 1.008,
        borderColor: 'rgba(34, 211, 238, 0.24)',
        boxShadow: featured 
          ? '0 30px 60px -15px rgba(2, 6, 23, 0.7), 0 0 40px -5px rgba(34, 211, 238, 0.08)' 
          : '0 20px 40px -15px rgba(2, 6, 23, 0.6), 0 0 30px -5px rgba(34, 211, 238, 0.04)',
      }}
      transition={springs.gentle}
      className={`group relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-xl transition-[shadow,background-color] duration-500 ${
        featured ? 'min-h-[440px] sm:p-8' : 'min-h-[230px]'
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
            <h3 className={`${featured ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'} font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors duration-300 flex items-center gap-1.5`}>
              <span>{project.title}</span>
              <Motion.span 
                className="inline-block text-cyan-300 font-light"
                variants={{
                  hidden: { opacity: 0, x: -4 },
                  show: { opacity: 1, x: 0 }
                }}
                transition={springs.gentle}
              >
                {/* → */}
              </Motion.span>
            </h3>
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
