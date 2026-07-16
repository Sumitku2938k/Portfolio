import SectionWrapper from '../components/SectionWrapper'

function FooterSection() {
  return (
    <SectionWrapper className="pb-10 pt-16">
      <footer className="flex flex-col gap-4 border-t border-white/[0.06] py-8 text-xs sm:text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between tracking-wide">
        <p className="hover:text-slate-400 transition-colors duration-300">© 2026 Goutam. All rights reserved.</p>
        <p className="hover:text-slate-400 transition-colors duration-300">Designed and developed with React, Tailwind CSS, and Framer Motion.</p>
      </footer>
    </SectionWrapper>
  )
}

export default FooterSection
