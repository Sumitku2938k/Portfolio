import { motion as Motion } from 'framer-motion'

function SectionWrapper({ id, className = '', children }) {
  return (
    <Motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      className={`relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 ${className}`.trim()}
    >
      {children}
    </Motion.section>
  )
}

export default SectionWrapper
