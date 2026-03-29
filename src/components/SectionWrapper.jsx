import { motion as Motion } from 'framer-motion'

function SectionWrapper({ id, className = '', children }) {
  return (
    <Motion.section
      id={id}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 ${className}`.trim()}
    >
      {children}
    </Motion.section>
  )
}

export default SectionWrapper
