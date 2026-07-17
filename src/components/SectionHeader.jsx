import { motion as Motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../lib/animations'

function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <Motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`max-w-3xl ${alignment}`.trim()}
    >
      {eyebrow ? (
        <Motion.p
          variants={fadeUp}
          className="mb-3 text-[10px] sm:text-xs font-bold uppercase tracking-[0.24em] text-cyan-400"
        >
          {eyebrow}
        </Motion.p>
      ) : null}
      <Motion.h2
        variants={fadeUp}
        className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight"
      >
        {title}
      </Motion.h2>
      {description ? (
        <Motion.p
          variants={fadeUp}
          className="mt-4 text-sm sm:text-base leading-relaxed text-slate-400 font-light"
        >
          {description}
        </Motion.p>
      ) : null}
    </Motion.div>
  )
}

export default SectionHeader
