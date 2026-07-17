export const easeOutExpo = [0.16, 1, 0.3, 1]

export const springs = {
  stiff: { type: 'spring', stiffness: 350, damping: 26 },
  gentle: { type: 'spring', stiffness: 220, damping: 22 },
  floating: { type: 'spring', stiffness: 60, damping: 15 },
}

export const pageFade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8, ease: easeOutExpo },
}

export const sectionReveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.85, ease: easeOutExpo },
}

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
}

export const staggerFast = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.03,
    },
  },
}

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOutExpo },
  },
}

export const fadeLeft = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easeOutExpo },
  },
}

export const fadeRight = {
  hidden: { opacity: 0, x: 20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easeOutExpo },
  },
}

export const hoverLift = {
  y: -4,
  scale: 1.015,
  transition: springs.gentle,
}
