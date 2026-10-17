import { motion } from 'framer-motion'
import {
  CheckCircle2,
  Clock,
  Loader2,
  MessageCircle,
  Send,
  ShieldCheck,
} from 'lucide-react'
import { useState } from 'react'
import type { FormEvent } from 'react'
import { SERVICES } from '../data/content'

interface FormState {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

const INITIAL: FormState = { name: '', email: '', phone: '', service: '', message: '' }

interface Errors {
  name?: string
  email?: string
  message?: string
}

const BUDGET_OPTIONS = [
  'Under $1,000',
  '$1,000 – $2,500',
  '$2,500 – $5,000',
  '$5,000+',
]

/**
 * Validated contact form (SOW item 3e) with luxury interactive presets.
 * Submission is simulated for the demo: message is saved to localStorage.
 */
export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')
  const [selectedBudget, setSelectedBudget] = useState<string>('')

  const set = (key: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setForm((f) => ({ ...f, [key]: e.target.value }))
    setErrors((errs) => ({ ...errs, [key]: undefined }))
  }

  const handleServiceSelect = (title: string) => {
    setForm((f) => ({ ...f, service: f.service === title ? '' : title }))
  }

  const handleBudgetSelect = (b: string) => {
    setSelectedBudget((prev) => (prev === b ? '' : b))
  }

  const validate = (): boolean => {
    const errs: Errors = {}
    if (form.name.trim().length < 2) errs.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      errs.email = 'Please enter a valid email address.'
    if (form.message.trim().length < 10)
      errs.message = 'Please tell us a little more (at least 10 characters).'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('sending')

    // Append budget info if selected
    const fullMessage = selectedBudget
      ? `[Estimated Budget: ${selectedBudget}]\n\n${form.message}`
      : form.message

    setTimeout(() => {
      try {
        const saved = JSON.parse(localStorage.getItem('bcs-contact-messages') ?? '[]')
        saved.push({ ...form, message: fullMessage, at: new Date().toISOString() })
        localStorage.setItem('bcs-contact-messages', JSON.stringify(saved))
      } catch {
        /* storage unavailable — still show success for the demo */
      }
      setStatus('sent')
    }, 850)
  }

  if (status === 'sent') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        role="status"
        className="flex flex-col items-center rounded-3xl bg-gradient-to-br from-palm-900 to-palm-950 p-8 sm:p-12 text-center text-white shadow-lift ring-1 ring-white/10"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-clay-500/20 text-clay-400 ring-1 ring-clay-500/40">
          <CheckCircle2 className="h-10 w-10 text-clay-400" aria-hidden="true" />
        </div>
        <h3 className="mt-5 font-display text-2xl sm:text-3xl font-semibold">
          Message Received!
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-sand-200">
          Suksma (thank you), <span className="font-semibold text-white">{form.name.split(' ')[0] || 'there'}</span>.
          We have logged your project inquiry and Made or Ayu will reply within 24 business hours.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-emerald-500"
          >
            <MessageCircle className="h-4 w-4" /> Message on WhatsApp Now
          </a>
          <button
            type="button"
            onClick={() => {
              setForm(INITIAL)
              setSelectedBudget('')
              setStatus('idle')
            }}
            className="rounded-full bg-white/10 px-5 py-2.5 text-xs font-semibold text-white hover:bg-white/20"
          >
            Send another inquiry
          </button>
        </div>

        <p className="mt-6 text-[11px] text-sand-300/50">
          Demo note: your message was safely recorded locally in this browser session.
        </p>
      </motion.div>
    )
  }

  const inputCls =
    'w-full rounded-xl border bg-sand-50/60 px-4 py-3 text-sm text-ink placeholder:text-ink/40 outline-none transition duration-200 focus:bg-white focus:border-palm-600 focus:ring-4 focus:ring-palm-600/10'

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="relative rounded-3xl border border-ink/10 bg-white p-6 sm:p-10 shadow-lift"
      aria-label="Contact form"
    >
      {/* Decorative subtle lighting */}
      <div className="absolute right-0 top-0 -z-10 h-32 w-32 rounded-full bg-clay-500/5 blur-3xl pointer-events-none" />

      {/* Header Info */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-2 border-b border-ink/5 pb-4">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-clay-600">
            Project Discovery
          </span>
          <h3 className="font-display text-xl font-semibold text-ink">
            Tell us about your vision
          </h3>
        </div>
        <div className="flex items-center gap-1.5 rounded-full bg-sand-100 px-3 py-1 text-[11px] font-medium text-ink-muted">
          <Clock className="h-3 w-3 text-palm-600" />
          <span>Average reply: &lt; 12 hours</span>
        </div>
      </div>

      {/* Service Pills Selector */}
      <div className="mb-6">
        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-ink-subtle">
          What are you looking to create? (Select one)
        </label>
        <div className="flex flex-wrap gap-2">
          {SERVICES.map((s) => {
            const isSelected = form.service === s.title
            return (
              <button
                key={s.slug}
                type="button"
                onClick={() => handleServiceSelect(s.title)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition ${
                  isSelected
                    ? 'bg-palm-800 text-white shadow-sm'
                    : 'bg-sand-100 text-ink/80 hover:bg-sand-200'
                }`}
              >
                {isSelected && '✓ '}
                {s.title}
              </button>
            )
          })}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {/* Name */}
        <div>
          <label htmlFor="cf-name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-subtle">
            Your name <span className="text-clay-500">*</span>
          </label>
          <input
            id="cf-name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={set('name')}
            placeholder="e.g. Sarah Mitchell"
            className={`${inputCls} ${errors.name ? 'border-red-500 bg-red-50/20' : 'border-ink/15'}`}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'cf-name-err' : undefined}
          />
          {errors.name && (
            <p id="cf-name-err" role="alert" className="mt-1.5 text-xs text-red-600">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="cf-email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-subtle">
            Email address <span className="text-clay-500">*</span>
          </label>
          <input
            id="cf-email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={set('email')}
            placeholder="sarah@villasbali.com"
            className={`${inputCls} ${errors.email ? 'border-red-500 bg-red-50/20' : 'border-ink/15'}`}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'cf-email-err' : undefined}
          />
          {errors.email && (
            <p id="cf-email-err" role="alert" className="mt-1.5 text-xs text-red-600">
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone / WhatsApp */}
        <div>
          <label htmlFor="cf-phone" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-subtle">
            Phone / WhatsApp <span className="font-normal text-ink-faint">(Optional)</span>
          </label>
          <input
            id="cf-phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={set('phone')}
            placeholder="+62 812 3456 7890"
            className={`${inputCls} border-ink/15`}
          />
        </div>

        {/* Dropdown service backup for accessibility/form requirements */}
        <div>
          <label htmlFor="cf-service" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-subtle">
            Primary Service Focus
          </label>
          <select
            id="cf-service"
            value={form.service}
            onChange={set('service')}
            className={`${inputCls} border-ink/15 cursor-pointer`}
          >
            <option value="">General inquiry / Custom package</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
        </div>

        {/* Budget pills */}
        <div className="sm:col-span-2">
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-ink-subtle">
            Approximate Budget Range <span className="font-normal text-ink-faint">(Helps us scope options)</span>
          </label>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {BUDGET_OPTIONS.map((b) => (
              <button
                key={b}
                type="button"
                onClick={() => handleBudgetSelect(b)}
                className={`rounded-xl px-3 py-2 text-xs font-medium border text-center transition ${
                  selectedBudget === b
                    ? 'border-palm-800 bg-palm-800/10 text-palm-800 font-semibold'
                    : 'border-ink/10 bg-sand-50/50 text-ink/70 hover:bg-sand-100'
                }`}
              >
                {b}
              </button>
            ))}
          </div>
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label htmlFor="cf-message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-subtle">
            Tell us about your project <span className="text-clay-500">*</span>
          </label>
          <textarea
            id="cf-message"
            rows={4}
            value={form.message}
            onChange={set('message')}
            placeholder="Share your goals, current website (if any), desired launch date, and any special features you envision…"
            className={`${inputCls} resize-y ${errors.message ? 'border-red-500 bg-red-50/20' : 'border-ink/15'}`}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'cf-message-err' : undefined}
          />
          {errors.message && (
            <p id="cf-message-err" role="alert" className="mt-1.5 text-xs text-red-600">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      {/* Trust & Submit */}
      <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-ink/5 pt-6 sm:flex-row">
        <div className="flex items-center gap-2 text-xs text-ink-subtle">
          <ShieldCheck className="h-4 w-4 text-palm-600" aria-hidden="true" />
          <span>Non-disclosure guaranteed · No sales spam</span>
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-clay-500 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white shadow-soft transition-all duration-300 hover:bg-clay-600 hover:shadow-glow disabled:opacity-70 sm:w-auto"
        >
          {status === 'sending' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              <span>Transmitting Inquiry…</span>
            </>
          ) : (
            <>
              <span>Send Project Request</span>
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </>
          )}
        </button>
      </div>

      <p className="mt-4 text-center text-[11px] text-ink-faint">
        Sample demo form: Messages are stored locally in your browser storage.
      </p>
    </form>
  )
}
