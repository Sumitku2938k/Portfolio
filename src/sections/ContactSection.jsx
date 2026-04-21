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
          className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
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
                disabled={isSubmitting}
                placeholder="Your name"
                className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none transition duration-300 placeholder:text-slate-500 focus:border-cyan-300/40 focus:shadow-[0_0_0_4px_rgba(34,211,238,0.08)] disabled:cursor-not-allowed disabled:opacity-70"
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
                disabled={isSubmitting}
                placeholder="you@example.com"
                className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none transition duration-300 placeholder:text-slate-500 focus:border-cyan-300/40 focus:shadow-[0_0_0_4px_rgba(34,211,238,0.08)] disabled:cursor-not-allowed disabled:opacity-70"
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
                disabled={isSubmitting}
                rows="6"
                placeholder="Tell me about your idea or collaboration."
                className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none transition duration-300 placeholder:text-slate-500 focus:border-cyan-300/40 focus:shadow-[0_0_0_4px_rgba(34,211,238,0.08)] disabled:cursor-not-allowed disabled:opacity-70"
                required
              />
            </Motion.div>

            <Motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-2">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
              <a
                href="mailto:sumitku2938k@gmail.com"
                className="text-sm font-medium text-slate-400 transition hover:text-white"
              >
                sumitku2938k@gmail.com
              </a>
            </Motion.div>
          </Motion.form>

          {submitState.status !== 'idle' ? (
            <Motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-5 rounded-2xl px-4 py-3 text-sm ${
                submitState.status === 'success'
                  ? 'border border-emerald-400/20 bg-emerald-400/10 text-emerald-200'
                  : submitState.status === 'error'
                    ? 'border border-rose-400/20 bg-rose-400/10 text-rose-200'
                    : 'border border-cyan-400/20 bg-cyan-400/10 text-cyan-100'
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
