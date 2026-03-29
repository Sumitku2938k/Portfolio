import SectionWrapper from '../components/SectionWrapper'

function FooterSection() {
  return (
    <SectionWrapper className="pb-10 pt-16">
      <footer className="flex flex-col gap-4 border-t border-white/10 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Goutam. All rights reserved.</p>
        <p>Designed and developed with React, Tailwind CSS, and Framer Motion.</p>
      </footer>
    </SectionWrapper>
  )
}

export default FooterSection
