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

const emailServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const emailTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const emailPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

function ContactSection() {
  const [formData, setFormData] = useState(initialFormState)
  const [submitState, setSubmitState] = useState({
    status: 'idle',
    message: '',
  })

  const isSubmitting = submitState.status === 'loading'
  const isSubmitted = submitState.status === 'success'

  useEffect(() => {
    if (!isSubmitted) {
      return undefined
    }

    const timeoutId = window.setTimeout(
      () =>
        setSubmitState({
          status: 'idle',
          message: '',
        }),
      3000,
    )

    return () => window.clearTimeout(timeoutId)
  }, [isSubmitted])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!emailServiceId || !emailTemplateId || !emailPublicKey) {
      setSubmitState({
        status: 'error',
        message:
          'The email service is not configured yet. Add your EmailJS keys to `.env` and try again.',
      })
      return
    }

    setSubmitState({
      status: 'loading',
      message: '',
    })

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: emailServiceId,
          template_id: emailTemplateId,
          user_id: emailPublicKey,
          template_params: {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            title: 'New portfolio contact form message',
            reply_to: formData.email,
            submitted_at: new Date().toLocaleString(),
          },
        }),
      })

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(errorText || 'Email send failed')
      }

      setSubmitState({
        status: 'success',
        message: 'Your message was sent successfully. It should arrive in your inbox shortly.',
      })
      setFormData(initialFormState)
    } catch (error) {
      setSubmitState({
        status: 'error',
        message:
          'Your message could not be sent. Please check your EmailJS configuration and try again.',
      })
      console.error('Email send failed:', error)
    }
  }

  return (
    <SectionWrapper id="contact" className="pt-24">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-[28px] border border-white/[0.06] bg-white/[0.01] p-6 sm:p-8 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.3),_inset_0_1px_rgba(255,255,255,0.02)]"
        >
          <SectionHeader
            eyebrow="Contact"
            title="Let's build something meaningful and well-crafted."
            description="If you'd like to collaborate on a web product, portfolio-quality frontend, or AI-powered application, I'd love to connect."
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
                whileHover={{ y: -3 }}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-xl border border-white/[0.05] bg-[#020512]/60 px-5 py-4 text-slate-300 shadow-[inset_0_1px_rgba(255,255,255,0.01)] hover:border-cyan-500/25 hover:bg-white/[0.02] hover:text-white transition-all duration-300"
              >
                <span className="text-sm font-medium">{link.name}</span>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300">Open</span>
              </Motion.a>
            ))}
          </Motion.div>
        </Motion.div>

        <Motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-[28px] border border-white/[0.06] bg-white/[0.01] p-6 sm:p-8 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.3),_inset_0_1px_rgba(255,255,255,0.02)]"
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
              <label htmlFor="name" className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
                placeholder="Your name"
                className="w-full rounded-xl border border-white/[0.08] bg-[#020512]/70 px-4 py-3.5 text-slate-100 outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-400/50 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.12),_inset_0_1px_rgba(255,255,255,0.02)] disabled:cursor-not-allowed disabled:opacity-70"
                required
              />
            </Motion.div>

            <Motion.div variants={fadeUp}>
              <label htmlFor="email" className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-white/[0.08] bg-[#020512]/70 px-4 py-3.5 text-slate-100 outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-400/50 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.12),_inset_0_1px_rgba(255,255,255,0.02)] disabled:cursor-not-allowed disabled:opacity-70"
                required
              />
            </Motion.div>

            <Motion.div variants={fadeUp}>
              <label htmlFor="message" className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
                rows="6"
                placeholder="Tell me about your idea or collaboration."
                className="w-full rounded-xl border border-white/[0.08] bg-[#020512]/70 px-4 py-3.5 text-slate-100 outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-400/50 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.12),_inset_0_1px_rgba(255,255,255,0.02)] disabled:cursor-not-allowed disabled:opacity-70"
                required
              />
            </Motion.div>

            <Motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-2">
              <Button type="submit" disabled={isSubmitting} className="px-5 py-3">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
              <a
                href="mailto:sumitku2938k@gmail.com"
                className="text-sm font-medium text-slate-400 hover:text-cyan-300 transition-colors duration-300"
              >
                sumitku2938k@gmail.com
              </a>
            </Motion.div>
          </Motion.form>

          {submitState.status !== 'idle' ? (
            <Motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-5 rounded-xl px-4 py-3 text-sm ${
                submitState.status === 'success'
                  ? 'border border-emerald-500/20 bg-emerald-500/[0.06] text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.05)]'
                  : submitState.status === 'error'
                    ? 'border border-rose-500/20 bg-rose-500/[0.06] text-rose-300 shadow-[0_0_15px_rgba(239,68,68,0.05)]'
                    : 'border border-cyan-500/20 bg-cyan-500/[0.06] text-cyan-200'
              }`}
            >
              {submitState.message || 'Sending your message...'}
            </Motion.div>
          ) : null}
        </Motion.div>
      </div>
    </SectionWrapper>
  )
}

export default ContactSection
