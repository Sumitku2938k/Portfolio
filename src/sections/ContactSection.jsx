import { useEffect, useState } from 'react'
import { motion as Motion } from 'framer-motion'
import Button from '../components/Button'
import SectionHeader from '../components/SectionHeader'
import SectionWrapper from '../components/SectionWrapper'
import { socialLinks } from '../data/portfolioData'
import { fadeLeft, fadeRight, fadeUp, staggerFast } from '../lib/animations'

const initialFormState = {
  name: '',
  email: '',
  message: '',
}

function ContactSection() {
  const [formData, setFormData] = useState(initialFormState)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    if (!isSubmitted) {
      return undefined
    }

    const timeoutId = window.setTimeout(() => setIsSubmitted(false), 3000)
    return () => window.clearTimeout(timeoutId)
  }, [isSubmitted])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsSubmitted(true)
    setFormData(initialFormState)
  }

  return (
    <SectionWrapper id="contact" className="pt-24">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
        >
          <SectionHeader
            eyebrow="Contact"
            title="Let’s build something meaningful and well-crafted."
            description="If you’d like to collaborate on a web product, portfolio-quality frontend, or AI-powered application, I’d love to connect."
          />

          <Motion.div
            variants={staggerFast}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-10 space-y-4"
          >
            {socialLinks.map((link) => (
              <Motion.a
                key={link.name}
                variants={fadeUp}
                whileHover={{ y: -3, scale: 1.01 }}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-[22px] border border-white/10 bg-slate-950/50 px-5 py-4 text-slate-200 transition hover:border-cyan-300/30 hover:bg-white/5"
              >
                <span>{link.name}</span>
                <span className="text-cyan-300">Open</span>
              </Motion.a>
            ))}
          </Motion.div>
        </Motion.div>

        <Motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
        >
          <Motion.form
            variants={staggerFast}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <Motion.div variants={fadeUp}>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-200">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none transition duration-300 placeholder:text-slate-500 focus:border-cyan-300/40 focus:shadow-[0_0_0_4px_rgba(34,211,238,0.08)]"
                required
              />
            </Motion.div>

            <Motion.div variants={fadeUp}>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none transition duration-300 placeholder:text-slate-500 focus:border-cyan-300/40 focus:shadow-[0_0_0_4px_rgba(34,211,238,0.08)]"
                required
              />
            </Motion.div>

            <Motion.div variants={fadeUp}>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                placeholder="Tell me about your idea or collaboration."
                className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none transition duration-300 placeholder:text-slate-500 focus:border-cyan-300/40 focus:shadow-[0_0_0_4px_rgba(34,211,238,0.08)]"
                required
              />
            </Motion.div>

            <Motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-2">
              <Button type="submit">Send Message</Button>
              <a href="mailto:goutam@example.com" className="text-sm font-medium text-slate-400 transition hover:text-white">
                goutam@example.com
              </a>
            </Motion.div>
          </Motion.form>

          {isSubmitted ? (
            <Motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-5 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200"
            >
              Message drafted successfully. Replace the placeholder email or connect this form to your preferred backend.
            </Motion.div>
          ) : null}
        </Motion.div>
      </div>
    </SectionWrapper>
  )
}

export default ContactSection
