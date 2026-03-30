import { motion as Motion } from 'framer-motion'
import { hoverLift } from '../lib/animations'

function Button({ children, href, variant = 'primary', className = '', ...props }) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-[0.18em] uppercase transition duration-300'

  const variants = {
    primary:
      'bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 text-slate-950 shadow-[0_12px_50px_rgba(59,130,246,0.35)] hover:shadow-[0_16px_60px_rgba(99,102,241,0.4)]',
    secondary:
      'border border-white/15 bg-white/5 text-slate-100 backdrop-blur-xl hover:border-cyan-300/40 hover:bg-white/10',
    ghost:
      'text-slate-300 hover:text-white',
  }

  const classes = `${baseStyles} ${variants[variant]} ${className}`.trim()

  if (href) {
    return (
      <Motion.a
        whileHover={hoverLift}
        whileTap={{ scale: 0.98 }}
        href={href}
        className={classes}
        {...props}
      >
        {children}
      </Motion.a>
    )
  }

  return (
    <Motion.button whileHover={hoverLift} whileTap={{ scale: 0.98 }} className={classes} {...props}>
      {children}
    </Motion.button>
  )
}

export default Button
