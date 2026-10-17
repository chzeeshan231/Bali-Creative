import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  Check,
  ChevronDown,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import SEO from '../components/SEO'
import SectionHeading from '../components/SectionHeading'
import { ServiceIcon } from '../components/icons'
import { FAQS, PACKAGES, SERVICES } from '../data/content'

// Optional add-ons for interactive pricing calculator
const ADD_ONS = [
  { id: 'drone', label: 'Half-Day Commercial Drone Shoot', price: 350 },
  { id: 'bilingual', label: 'Bilingual Indonesian (ID) & English (EN) Setup', price: 220 },
  { id: 'seo_pro', label: 'Advanced 3-Month Local SEO & GMB Optimization', price: 450 },
  { id: 'ecommerce', label: 'Online Booking / E-Commerce Payment Gateway', price: 390 },
]

function FaqItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-subtle transition-all duration-200 hover:border-palm-800/30">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 p-6 text-left"
      >
        <span className="font-display text-lg sm:text-xl font-semibold text-ink">{q}</span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${
            open ? 'bg-clay-500 text-white rotate-180' : 'bg-sand-100 text-ink/70'
          }`}
        >
          <ChevronDown className="h-4 w-4" aria-hidden="true" />
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="border-t border-ink/5 px-6 pb-6 pt-2 text-sm sm:text-base leading-relaxed text-ink-muted">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Services() {
  const [selectedPlan, setSelectedPlan] = useState<string>('Business')
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([])

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    )
  }

  // Calculate estimated combined cost
  const basePriceNumber =
    selectedPlan === 'Starter' ? 490 : selectedPlan === 'Business' ? 1190 : 2490
  const addOnsTotal = selectedAddOns.reduce((acc, id) => {
    const item = ADD_ONS.find((a) => a.id === id)
    return acc + (item ? item.price : 0)
  }, 0)
  const totalCost = basePriceNumber + addOnsTotal

  return (
    <>
      <SEO
        title="Services"
        path="/services"
        description="Comprehensive web design, branding, and photography services in Bali — transparent packages with fixed pricing and guaranteed timelines."
      />

      {/* =========================================================================
          PAGE HERO: Guaranteed Dark Background with Color Move Ambient Mesh
          ========================================================================= */}
      <section
        style={{ backgroundColor: '#03120E' }}
        className="relative overflow-hidden bg-palm-950 pb-20 pt-36 text-white"
        aria-label="Services intro"
      >
        <div className="absolute inset-0 color-move-ambient opacity-50 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md">
              <Sparkles className="h-3 w-3 text-clay-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-sand-100">
                Services & Deliverables
              </span>
            </div>

            <h1 className="mt-4 max-w-3xl font-display text-4xl sm:text-6xl font-semibold leading-tight text-white text-balance">
              One unified studio for your{' '}
              <span className="colorfill-text italic font-normal">
                website, brand & visuals
              </span>
            </h1>

            <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-sand-200/90">
              Pick an individual specialty or bundle all three for a cohesive island launch. Every project includes responsive mobile optimization, baseline SEO, and dedicated post-launch support.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-xs font-semibold text-sand-300">
              <span className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-emerald-400" /> Fixed Quotes (No Surprises)
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-emerald-400" /> 2–4 Week Turnaround
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="h-4 w-4 text-emerald-400" /> Client Ownership & Training
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================================
          DETAILED SERVICE SHOWCASE (All 6 Services with Alternating Layout)
          ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8" aria-label="Service details">
        <SectionHeading
          badge="End-to-End Execution"
          eyebrow="Our Craft"
          title="Designed for high conversion and lasting brand equity"
          text="Explore each service below. We handle strategy, copywriting structure, visual assets, and engineering in-house."
        />

        <div className="mt-16 space-y-12">
          {SERVICES.map((s, i) => {
            const isEven = i % 2 === 1
            return (
              <Reveal key={s.slug}>
                <article className="group overflow-hidden rounded-3xl border border-ink/10 bg-white p-6 sm:p-10 shadow-soft transition-all duration-300 hover:shadow-lift hover:border-palm-800/20">
                  <div className={`grid items-center gap-8 lg:grid-cols-12 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Media Column (6 cols) */}
                    <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : ''}`}>
                      <div className="card-img-zoom relative h-72 sm:h-96 overflow-hidden rounded-2xl shadow-md">
                        <img
                          src={s.image}
                          alt={s.imageAlt}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        <span className="absolute bottom-4 left-4 rounded-full bg-white/90 backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-ink">
                          Service 0{i + 1}
                        </span>
                      </div>
                    </div>

                    {/* Content Column (6 cols) */}
                    <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : ''}`}>
                      <div className="flex items-center gap-3">
                        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-palm-800/10 text-palm-800 shadow-sm">
                          <ServiceIcon icon={s.icon} className="h-6 w-6" />
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-wider text-clay-600">
                          {s.short}
                        </span>
                      </div>

                      <h2 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-ink">
                        {s.title}
                      </h2>

                      <p className="mt-3 text-sm sm:text-base leading-relaxed text-ink-muted">
                        {s.description}
                      </p>

                      {/* Feature Checklist */}
                      <div className="mt-6 border-t border-ink/5 pt-5">
                        <p className="text-xs font-semibold uppercase tracking-wider text-ink-subtle mb-3">
                          What is included:
                        </p>
                        <ul className="grid gap-2.5 sm:grid-cols-2">
                          {s.features.map((f) => (
                            <li key={f} className="flex items-start gap-2 text-xs sm:text-sm text-ink/80">
                              <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-8 flex flex-wrap items-center gap-4">
                        <Link
                          to="/contact"
                          className="btn-colorfill inline-flex items-center gap-2 rounded-full bg-clay-500 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white shadow-sm hover:shadow-glow"
                        >
                          <span>Request Quote for {s.title.split(' ')[0]}</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                        <a
                          href="https://wa.me/6281234567890"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-palm-700 hover:text-palm-900"
                        >
                          <MessageCircle className="h-4 w-4 text-emerald-600" />
                          <span>Chat on WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* =========================================================================
          PRICING & INTERACTIVE PACKAGE CALCULATOR
          ========================================================================= */}
      <section className="bg-sand-100 py-24" aria-label="Website packages and pricing calculator">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Investment Guide"
            eyebrow="Website Packages"
            title="Transparent, fixed pricing with zero hidden fees"
            text="Every package is priced all-in before we start. Pick a package or customize it with commercial add-ons below."
          />

          {/* Package Cards */}
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {PACKAGES.map((p, i) => {
              const isSelected = selectedPlan === p.name
              return (
                <Reveal key={p.name} delay={i * 0.1}>
                  <article
                    onClick={() => setSelectedPlan(p.name)}
                    style={p.featured ? { backgroundColor: '#03120E' } : {}}
                    className={`relative flex h-full cursor-pointer flex-col justify-between rounded-3xl p-8 sm:p-10 shadow-soft transition-all duration-300 ${
                      p.featured
                        ? 'bg-palm-950 text-white ring-2 ring-clay-500 shadow-xl scale-[1.02] color-move-border'
                        : isSelected
                          ? 'bg-white ring-2 ring-palm-700'
                          : 'bg-white hover:border-palm-800/30'
                    }`}
                  >
                    {p.featured && (
                      <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-clay-500 px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">
                        Most Popular for Bali Brands
                      </span>
                    )}

                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className={`font-display text-2xl font-bold ${p.featured ? 'text-white' : 'text-ink'}`}>
                          {p.name}
                        </h3>
                        <span className={`text-xs font-semibold uppercase tracking-wider ${p.featured ? 'text-clay-400' : 'text-clay-600'}`}>
                          {isSelected ? '✓ Selected' : 'Package'}
                        </span>
                      </div>

                      <p className={`mt-1 text-sm ${p.featured ? 'text-sand-200/80' : 'text-ink-muted'}`}>
                        {p.note}
                      </p>

                      <div className="mt-6 border-y border-current/10 py-4">
                        <span className="font-display text-4xl sm:text-5xl font-bold">
                          {p.price}
                        </span>
                        <span className={`text-xs ml-2 ${p.featured ? 'text-sand-300' : 'text-ink-subtle'}`}>
                          USD · One-Time Fixed
                        </span>
                      </div>

                      <ul className="mt-6 space-y-3">
                        {p.features.map((f) => (
                          <li key={f} className={`flex items-start gap-2.5 text-xs sm:text-sm ${p.featured ? 'text-sand-100' : 'text-ink/80'}`}>
                            <Check className={`mt-0.5 h-4 w-4 shrink-0 ${p.featured ? 'text-clay-400' : 'text-emerald-600'}`} />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 pt-4">
                      <Link
                        to="/contact"
                        className={`btn-colorfill block w-full rounded-full py-3.5 text-center text-xs font-semibold uppercase tracking-wider transition ${
                          p.featured
                            ? 'bg-clay-500 text-white shadow-md'
                            : 'bg-palm-800 text-white hover:bg-palm-900'
                        }`}
                      >
                        {p.cta}
                      </Link>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>

          {/* Interactive Add-on Configurator */}
          <Reveal className="mt-16">
            <div className="rounded-3xl border border-ink/10 bg-white p-8 sm:p-10 shadow-soft">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-ink/5 pb-6">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-clay-600">
                    Package Customizer
                  </span>
                  <h3 className="font-display text-2xl font-bold text-ink">
                    Popular Island Add-Ons
                  </h3>
                  <p className="text-xs text-ink-subtle mt-0.5">
                    Click to attach specialized options to your estimated investment.
                  </p>
                </div>

                {/* Total Cost Estimate Badge */}
                <div
                  style={{ backgroundColor: '#03120E' }}
                  className="rounded-2xl bg-palm-950 p-4 text-white text-right shrink-0 shadow-md"
                >
                  <p className="text-[10px] uppercase tracking-wider text-sand-300">
                    Estimated Total ({selectedPlan})
                  </p>
                  <p className="font-display text-2xl font-bold text-clay-400">
                    ${totalCost.toLocaleString()} <span className="text-xs text-white font-normal">USD</span>
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {ADD_ONS.map((addon) => {
                  const isChecked = selectedAddOns.includes(addon.id)
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddOn(addon.id)}
                      className={`flex items-center justify-between rounded-2xl border p-4 text-left transition ${
                        isChecked
                          ? 'border-palm-800 bg-palm-50 text-palm-900 shadow-sm'
                          : 'border-ink/10 bg-sand-50/50 hover:bg-sand-100 text-ink'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`flex h-6 w-6 items-center justify-center rounded-lg border text-xs font-bold transition ${
                            isChecked
                              ? 'bg-palm-800 border-palm-800 text-white'
                              : 'border-ink/20 bg-white text-transparent'
                          }`}
                        >
                          ✓
                        </span>
                        <span className="text-xs font-semibold">{addon.label}</span>
                      </div>
                      <span className="text-xs font-bold text-clay-600 shrink-0 ml-2">
                        +${addon.price}
                      </span>
                    </button>
                  )
                })}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-ink/5 pt-6 text-xs text-ink-muted">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" /> All estimates include 30-day bug warranty and free video training.
                </span>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-clay-600 hover:text-clay-500"
                >
                  <span>Book Free Discovery to Confirm Scope</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================================
          FAQ ACCORDIONS
          ========================================================================= */}
      <section className="mx-auto max-w-4xl px-4 py-24 sm:px-6" aria-label="Frequently asked questions">
        <SectionHeading
          badge="Clear Answers"
          eyebrow="FAQ"
          title="Questions Bali business owners frequently ask"
          text="Everything you need to know about working together, timelines, platform options, and handover."
        />

        <div className="mt-12 space-y-4">
          {FAQS.map((f, i) => (
            <FaqItem key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
          ))}
        </div>

        <Reveal className="mt-14 text-center">
          <p className="text-sm text-ink-muted">
            Have a unique question not covered here? We respond within one business day.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="btn-colorfill inline-flex items-center gap-2 rounded-full bg-clay-500 px-7 py-3 text-xs font-semibold uppercase tracking-wider text-white shadow-soft transition hover:shadow-glow"
            >
              <span>Ask Our Team</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3 text-xs font-semibold text-ink transition hover:bg-sand-100"
            >
              <MessageCircle className="h-4 w-4 text-emerald-600" />
              <span>WhatsApp Us Directly</span>
            </a>
          </div>
        </Reveal>
      </section>
    </>
  )
}
