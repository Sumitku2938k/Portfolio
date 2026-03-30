import { motion as Motion } from 'framer-motion'
import { sectionReveal } from '../lib/animations'

function SectionWrapper({ id, className = '', children }) {
  return (
    <Motion.section
      id={id}
      initial={sectionReveal.initial}
      whileInView={sectionReveal.whileInView}
      viewport={sectionReveal.viewport}
      transition={sectionReveal.transition}
      className={`relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 ${className}`.trim()}
    >
      {children}
    </Motion.section>
  )
}

export default SectionWrapper
