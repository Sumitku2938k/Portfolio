function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <div className={`max-w-3xl ${alignment}`.trim()}>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/80">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg">{description}</p>
    </div>
  )
}

export default SectionHeader
