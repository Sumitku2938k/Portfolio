import { motion as Motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import { easeOutExpo } from '../lib/animations'

function FooterSection() {
  return (
    <SectionWrapper className="pb-10 pt-16">
      <Motion.footer
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: easeOutExpo }}
        className="flex flex-col gap-4 border-t border-white/[0.06] py-8 text-xs sm:text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between tracking-wide"
      >
        <p className="hover:text-slate-350 transition-colors duration-300 cursor-default">© 2026 Goutam. All rights reserved.</p>
        <p className="hover:text-slate-350 transition-colors duration-300 cursor-default">Designed and developed with React, Tailwind CSS, and Framer Motion.</p>
      </Motion.footer>
    </SectionWrapper>
  )
}

export default FooterSection
