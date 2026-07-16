function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <div className={`max-w-3xl ${alignment}`.trim()}>
      <p className="mb-3 text-[10px] sm:text-xs font-bold uppercase tracking-[0.24em] text-cyan-400">{eyebrow}</p>
      <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">{title}</h2>
      <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-400 font-light">{description}</p>
    </div>
  )
}

export default SectionHeader
