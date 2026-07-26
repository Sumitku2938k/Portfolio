import { m as Motion } from 'framer-motion'
import { hoverLift, springs } from '../lib/animations'
function Button({ children, href, variant = 'primary', className = '', ...props }) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-full px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase transition-all duration-300 ease-out disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816] cursor-pointer'
  const variants = {
    primary:
      'bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 text-slate-950 shadow-[0_4px_20px_rgba(34,211,238,0.25),_inset_0_1px_0_rgba(255,255,255,0.4)] hover:shadow-[0_8px_30px_rgba(34,211,238,0.45),_inset_0_1px_0_rgba(255,255,255,0.4)] hover:brightness-105',
    secondary:
      'border border-white/12 bg-white/[0.02] text-slate-200 backdrop-blur-md hover:border-white/25 hover:bg-white/[0.07] hover:text-white',
    ghost:
      'text-slate-400 hover:text-white transition-colors',
  }
  const classes = `${baseStyles} ${variants[variant]} ${className}`.trim()
  const transitionSettings = springs.gentle
  if (href) {
    return (
      <Motion.a
        whileHover={hoverLift}
        whileTap={{ scale: 0.96 }}
        transition={transitionSettings}
        href={href}
        className={classes}
        {...props}
      >
        {children}
      </Motion.a>
    )
  }
  return (
    <Motion.button
      whileHover={hoverLift}
      whileTap={{ scale: 0.96 }}
      transition={transitionSettings}
      className={classes}
      {...props}
    >
      {children}
    </Motion.button>
  )
}
export default Button
