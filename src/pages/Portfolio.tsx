import { motion } from 'framer-motion'
import {
  ArrowRight,
  Eye,
  Filter,
  Sparkles,
  TrendingUp,
} from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Lightbox from '../components/Lightbox'
import Reveal from '../components/Reveal'
import SEO from '../components/SEO'
import { PROJECTS, type PortfolioCategory } from '../data/content'

const FILTERS: ('All' | PortfolioCategory)[] = ['All', 'Web Design', 'Branding', 'Photography']

export default function Portfolio() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('All')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const projects = useMemo(
    () => (filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <>
      <SEO
        title="Portfolio"
        path="/portfolio"
        description="Explore Bali Creative Studio's recent client case studies across web design, branding, and commercial photography for luxury Bali villas, cafes, and retreats."
      />

      {/* =========================================================================
          PAGE HERO: Guaranteed Dark Background with Color Move Ambient Mesh
          ========================================================================= */}
      <section
        style={{ backgroundColor: '#03120E' }}
        className="relative overflow-hidden bg-palm-950 pb-20 pt-36 text-white"
        aria-label="Portfolio intro"
      >
        <div className="absolute inset-0 color-move-ambient opacity-50 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md">
              <Sparkles className="h-3 w-3 text-clay-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-sand-100">
                Selected Island Case Studies
              </span>
            </div>

            <h1 className="mt-4 max-w-3xl font-display text-4xl sm:text-6xl font-semibold leading-tight text-white text-balance">
              Digital craft that{' '}
              <span className="colorfill-text italic font-normal">
                moves the needle
              </span>{' '}
              for Bali brands
            </h1>

            <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-sand-200/90">
              A curated index of bespoke websites, identities, and on-location photography shot across Seminyak, Canggu, Uluwatu, and Ubud. Click any project to inspect results and visual galleries.
            </p>
          </Reveal>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE FILTER BAR
          ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" aria-label="Project gallery">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row border-b border-ink/10 pb-8">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink-subtle">
            <Filter className="h-4 w-4 text-clay-600" />
            <span>Filter by discipline:</span>
          </div>

          {/* Filter Pills with animated layout indicator */}
          <div className="flex flex-wrap items-center justify-center gap-2" role="group" aria-label="Filter projects by category">
            {FILTERS.map((f) => {
              const count = f === 'All' ? PROJECTS.length : PROJECTS.filter((p) => p.category === f).length
              const isActive = filter === f

              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  aria-pressed={isActive}
                  className={`relative flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'text-white'
                      : 'bg-white text-ink-muted hover:text-ink hover:bg-sand-100 border border-ink/5 shadow-subtle'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="portfolio-active-pill"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      className="absolute inset-0 rounded-full bg-palm-800 shadow-soft"
                    />
                  )}
                  <span className="relative z-10">{f}</span>
                  <span
                    className={`relative z-10 rounded-full px-1.5 py-0.5 text-[10px] ${
                      isActive ? 'bg-white/20 text-white' : 'bg-sand-200 text-ink/70'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-soft transition-all duration-300 hover:shadow-lift hover:border-palm-800/30">
                {/* Visual Banner */}
                <button
                  type="button"
                  onClick={() => setLightboxIndex(projects.indexOf(p))}
                  className="card-img-zoom relative block w-full overflow-hidden text-left focus:outline-none"
                  aria-label={`Open ${p.title} case study view`}
                >
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-palm-950">
                    <img
                      src={p.image}
                      alt={p.imageAlt}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-palm-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    {/* Top Badges */}
                    <div className="absolute top-4 inset-x-4 flex items-center justify-between">
                      <span className="rounded-full bg-clay-500 px-3.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white shadow-md">
                        {p.category}
                      </span>
                      <span className="rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-[11px] font-medium text-white">
                        {p.year}
                      </span>
                    </div>

                    {/* Hover Quick View Trigger */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-ink shadow-lift backdrop-blur-md">
                        <Eye className="h-4 w-4 text-clay-600" />
                        <span>Inspect Project</span>
                      </span>
                    </div>
                  </div>
                </button>

                {/* Content */}
                <div className="p-7 flex flex-1 flex-col justify-between">
                  <div>
                    <div className="flex items-baseline justify-between gap-2">
                      <h2 className="font-display text-2xl font-bold text-ink group-hover:text-clay-600 transition-colors">
                        {p.title}
                      </h2>
                    </div>

                    <p className="mt-1 text-xs uppercase tracking-wider text-ink-subtle">
                      Client: {p.client}
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                      {p.summary}
                    </p>
                  </div>

                  {/* Measurable Results */}
                  <div className="mt-6 border-t border-ink/5 pt-4">
                    <p className="text-[10px] uppercase tracking-wider font-semibold text-ink-subtle mb-2">
                      Delivered Impact
                    </p>
                    <ul className="space-y-1.5">
                      {p.results.map((r) => (
                        <li key={r} className="flex items-center gap-2 text-xs font-semibold text-palm-700">
                          <TrendingUp className="h-3.5 w-3.5 text-emerald-600 shrink-0" aria-hidden="true" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      type="button"
                      onClick={() => setLightboxIndex(projects.indexOf(p))}
                      className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-clay-600 hover:text-clay-500"
                    >
                      <span>View Full Gallery & Metrics</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Lightbox Modal */}
        <Lightbox
          projects={projects}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />

        {/* Project Callout Banner with Guaranteed Dark Background */}
        <Reveal className="mt-20">
          <div
            style={{ backgroundColor: '#03120E' }}
            className="relative overflow-hidden rounded-3xl bg-palm-950 p-10 sm:p-14 text-center text-white shadow-lift border border-white/10"
          >
            <div className="absolute inset-0 color-move-ambient opacity-50 pointer-events-none" />

            <div className="relative z-10">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-clay-400">
                Collaborate With Us
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-5xl font-semibold leading-tight text-white text-balance max-w-2xl mx-auto">
                Ready to create your next{' '}
                <span className="colorfill-text italic font-normal">
                  iconic digital chapter
                </span>?
              </h2>
              <p className="mt-4 max-w-xl mx-auto text-sm sm:text-base leading-relaxed text-sand-200/90">
                Share your goals with us. We will prepare 2–3 creative homepage concepts and a fixed-price roadmap before you commit to anything.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="btn-colorfill group inline-flex items-center gap-2 rounded-full bg-clay-500 px-8 py-4 text-xs font-semibold uppercase tracking-wider text-white shadow-soft transition hover:shadow-glow"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-7 py-4 text-xs font-semibold text-white backdrop-blur transition hover:bg-white/20"
                >
                  <span>WhatsApp the Studio</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}
