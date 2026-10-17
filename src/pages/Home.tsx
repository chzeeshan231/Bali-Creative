import {
  ArrowRight,
  Award,
  Check,
  ChevronRight,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Smartphone,
  Sparkles,
  Star,
  TrendingUp,
  Zap,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm'
import Reveal from '../components/Reveal'
import SEO from '../components/SEO'
import SectionHeading from '../components/SectionHeading'
import { ServiceIcon } from '../components/icons'
import { IMAGES, PROJECTS, SERVICES, SITE, STATS, TESTIMONIALS } from '../data/content'

const WHY_US_CARDS = [
  {
    icon: HeartHandshake,
    tag: 'LOCAL PRESENCE',
    title: 'On-Island Team in Seminyak',
    text: 'Meet us over single-origin coffee in Seminyak or Canggu. We understand Bali hospitality, seasonal tourism, and what makes island visitors click.',
    highlight: 'Seminyak & Canggu meetings',
  },
  {
    icon: Smartphone,
    tag: 'RESPONSIVE FIRST',
    title: 'Engineered for Mobile-First',
    text: 'Over 82% of Bali villa and cafe guests browse from their phones while traveling. Every layout is perfected on small screens first, then scaled up.',
    highlight: 'Tested across 15+ screen sizes',
  },
  {
    icon: Zap,
    tag: 'FAST LAUNCH',
    title: '2 to 4 Week Rapid Launch',
    text: 'No 6-month corporate agency runarounds. You work directly with senior founders and photographers with guaranteed delivery dates and clear milestones.',
    highlight: 'Milestones agreed on day 1',
  },
  {
    icon: Award,
    tag: 'FOUNDATIONS',
    title: 'Built-in SEO & Analytics',
    text: 'Clean semantic code, Google Business Profile configuration, meta descriptions, and analytics setup come standard — not as a hidden add-on.',
    highlight: 'Google Lighthouse 95+ scores',
  },
]

const MARQUEE_ITEMS = [
  'LUXURY VILLAS & RESIDENTIAL RESORTS',
  'SPECIALTY CAFES & ROASTERIES',
  'HOLISTIC WELLNESS & YOGA SANCTUARIES',
  'TROPICAL DINING & BEACH CLUBS',
  'RESORT WEAR & ARTISAN BOUTIQUES',
  'WIX & SQUARESPACE SPECIALISTS',
  'CUSTOM FULL-STACK WEB BUILDS',
]

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        path="/"
        description="Bali Creative Studio — luxury web design, brand identity & commercial photography in Seminyak, Bali. Dedicated to exceptional island businesses."
      />

      {/* =========================================================================
          HERO SECTION: Layered Editorial Composition with Color Move Ambient Mesh
          ========================================================================= */}
      <section
        style={{ backgroundColor: '#03120E' }}
        className="relative min-h-[96vh] flex items-center overflow-hidden bg-palm-950 text-white"
        aria-label="Welcome"
      >
        {/* Background Image with rich cinematic gradient */}
        <div className="absolute inset-0 -z-10">
          <img
            src={IMAGES.heroBali}
            alt="Lush tropical garden of a luxury Bali villa at golden hour"
            className="h-full w-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 hero-gradient" aria-hidden="true" />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" aria-hidden="true" />
          {/* Animated Color Move Ambient Mesh */}
          <div className="absolute inset-0 color-move-ambient opacity-60 pointer-events-none" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-24 pb-20 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7">
              <Reveal>
                {/* Provenance pill */}
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse-subtle" />
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-sand-100">
                    Boutique Creative Studio · Bali, ID
                  </span>
                </div>

                {/* Primary Headline with Radiant Colorfill Text Animation */}
                <h1 className="mt-6 font-display text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[1.08] tracking-tight text-white text-balance">
                  Websites that make Bali brands{' '}
                  <span className="colorfill-text italic font-normal">
                    impossible to ignore
                  </span>
                </h1>

                {/* Supporting proposition */}
                <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-sand-200/90 font-normal">
                  We design high-converting websites, craft timeless brand identities, and shoot commercial-grade photography — built on-island by a senior team you can actually meet in Seminyak.
                </p>

                {/* Action Buttons with Interactive Colorfill Animations */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    to="/contact"
                    className="btn-colorfill group inline-flex items-center gap-2.5 rounded-full bg-clay-500 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white shadow-lift hover:shadow-glow hover:scale-[1.02]"
                  >
                    <span>Start Your Project</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                  </Link>

                  <Link
                    to="/portfolio"
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/20 hover:border-white/50"
                  >
                    <span>View Portfolio</span>
                    <ChevronRight className="h-4 w-4 opacity-70" />
                  </Link>
                </div>

                {/* Social proof badge */}
                <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-white/10 pt-6">
                  <div className="flex -space-x-2.5">
                    <img src={IMAGES.avatar1} alt="Client Sarah" className="h-9 w-9 rounded-full border-2 border-palm-950 object-cover" />
                    <img src={IMAGES.avatar2} alt="Client Dewi" className="h-9 w-9 rounded-full border-2 border-palm-950 object-cover" />
                    <img src={IMAGES.avatar3} alt="Client James" className="h-9 w-9 rounded-full border-2 border-palm-950 object-cover" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-gold-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-current" />
                      ))}
                      <span className="ml-1.5 text-xs font-semibold text-white">4.9 / 5.0</span>
                    </div>
                    <p className="text-xs text-sand-300/80">
                      Trusted by 120+ villas, retreats, & cafés across Bali
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Visual Composition (5 cols) */}
            <div className="lg:col-span-5 relative">
              <Reveal delay={0.2}>
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Floating Primary Project Card */}
                  <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-palm-900/90 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:scale-[1.02]">
                    <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                      <img
                        src={PROJECTS[0].image}
                        alt={PROJECTS[0].imageAlt}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-palm-950 via-palm-950/20 to-transparent" />

                      {/* Top live badge */}
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span className="rounded-full bg-clay-500/90 backdrop-blur-md px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white shadow-md">
                          Featured Case Study
                        </span>
                      </div>

                      {/* ROI Result Chip */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-palm-950/85 border border-white/15 p-3.5 backdrop-blur-md">
                        <div>
                          <p className="text-[10px] uppercase tracking-wider text-sand-300/70">Verified Outcome</p>
                          <p className="font-display text-sm font-semibold text-white">{PROJECTS[0].title}</p>
                        </div>
                        <span className="flex items-center gap-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 px-2.5 py-1 text-xs font-semibold text-emerald-300">
                          <TrendingUp className="h-3.5 w-3.5" />
                          +64% Direct
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Overlapping Floating Secondary Badge */}
                  <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 rounded-2xl border border-white/20 bg-palm-900/95 p-4 text-white shadow-2xl backdrop-blur-md">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-clay-500 text-white font-display font-bold shadow-md">
                      8+
                    </div>
                    <div>
                      <p className="font-display text-sm font-semibold text-white">Years in Bali</p>
                      <p className="text-xs text-sand-300/70">Seminyak HQ · Worldwide Clients</p>
                    </div>
                  </div>

                  {/* Overlapping Top Right Pill */}
                  <div className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2 rounded-full border border-white/15 bg-palm-950/95 px-4 py-2 text-xs font-medium text-emerald-300 shadow-xl backdrop-blur-md">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse-subtle" />
                    <span>🟢 In Studio Today</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MARQUEE CLIENT / INDUSTRY TICKER
          ========================================================================= */}
      <div className="border-y border-ink/10 bg-sand-100/90 py-4 overflow-hidden marquee-container">
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
            <div key={idx} className="mx-6 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.25em] text-ink-muted">
              <span>{item}</span>
              <span className="text-clay-500 opacity-60">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================================================
          STUDIO METRICS BAND: Elevated Glass Cards
          ========================================================================= */}
      <section className="bg-sand-50 py-16" aria-label="Studio statistics">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 sm:gap-6">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="group relative h-full rounded-2xl border border-ink/5 bg-white p-6 sm:p-8 shadow-subtle transition-all duration-300 hover:shadow-soft hover:border-palm-800/20">
                  <span className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-palm-800">
                    {s.value}
                  </span>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-clay-600">
                    {s.label}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-ink-subtle">
                    {i === 0 && 'Websites, rebrands & campaigns delivered.'}
                    {i === 1 && 'Serving local villas, cafes & creators.'}
                    {i === 2 && '5-star reviews from island partners.'}
                    {i === 3 && 'Recognized for craft, speed & elegance.'}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SERVICES SUITE: Perfectly Balanced 3-Column Showcase + Full-Width Banner
          ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8" aria-label="Services">
        <SectionHeading
          badge="Core Capabilities"
          eyebrow="What we do"
          title="Everything your Bali business needs to win online"
          text="From first whiteboard concepts to launch day — one unified team handles your website, brand identity, and commercial visuals."
        />

        {/* Perfectly Balanced 3-Column Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {SERVICES.slice(0, 3).map((s, idx) => (
            <Reveal key={s.slug} delay={idx * 0.1}>
              <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-ink/10 bg-white p-7 sm:p-8 shadow-soft transition-all duration-300 hover:shadow-lift hover:border-palm-800/25">
                <div>
                  <div className="card-img-zoom relative mb-6 h-52 overflow-hidden rounded-2xl shadow-sm">
                    <img
                      src={s.image}
                      alt={s.imageAlt}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span className="absolute top-3 left-3 rounded-full bg-clay-500 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white shadow-md">
                      {idx === 0 ? 'Web Design' : idx === 1 ? 'Branding' : 'Photography'}
                    </span>
                  </div>

                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-palm-800/10 text-palm-800">
                    <ServiceIcon icon={s.icon} className="h-5 w-5" />
                  </span>

                  <h3 className="mt-4 font-display text-2xl font-semibold text-ink">
                    {s.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {s.short}
                  </p>

                  <div className="mt-4 space-y-1.5 border-t border-ink/5 pt-3">
                    {s.features.slice(0, 3).map((f) => (
                      <div key={f} className="flex items-center gap-2 text-xs text-ink/80">
                        <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-ink/5">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-clay-600 hover:text-clay-500"
                  >
                    <span>Explore details & pricing</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}

          {/* Full-Width Studio Menu Banner Spanning All Columns */}
          <Reveal delay={0.25} className="col-span-full">
            <div
              style={{ backgroundColor: '#061E17' }}
              className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-3xl bg-palm-900 p-8 sm:p-10 text-white shadow-lift border border-white/10"
            >
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-clay-400">
                  Complete Studio Menu
                </span>
                <h4 className="mt-1 font-display text-2xl sm:text-3xl font-semibold text-white">
                  Also providing SEO Growth, E-Commerce Stores & Social Media
                </h4>
                <p className="mt-2 text-sm text-sand-200/85 max-w-2xl">
                  Explore all 6 service scopes with transparent package prices starting from $490 USD, fixed quote guarantees, and 30 days of post-launch support.
                </p>
              </div>

              <Link
                to="/services"
                className="btn-colorfill shrink-0 inline-flex items-center gap-2 rounded-full bg-clay-500 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-white shadow-soft transition hover:shadow-glow"
              >
                <span>Explore All 6 Services</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================================
          WHY CHOOSE US: Asymmetrical Architectural Grid
          ========================================================================= */}
      <section className="bg-sand-100 py-24" aria-label="Why choose us">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Studio Philosophy"
            eyebrow="Why Bali Creative Studio"
            title="A boutique studio's care, a world-class standard"
            text="We intentionally remain a focused Bali-based team so every villa, retreat, and hospitality client works directly with our principal designers."
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_US_CARDS.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.08}>
                <div className="flex h-full flex-col justify-between rounded-3xl border border-ink/5 bg-white p-7 shadow-subtle transition-all duration-300 hover:shadow-soft hover:-translate-y-1">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-clay-500/10 text-clay-600">
                        <w.icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-ink-subtle">
                        0{i + 1}
                      </span>
                    </div>

                    <span className="mt-6 inline-block text-[11px] font-semibold uppercase tracking-wider text-clay-600">
                      {w.tag}
                    </span>
                    <h3 className="mt-1 font-display text-xl font-semibold text-ink">
                      {w.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                      {w.text}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-ink/5 pt-4 text-xs font-medium text-palm-700">
                    ✓ {w.highlight}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          PORTFOLIO SHOWCASE: Curated Island Works
          ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8" aria-label="Featured work">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <SectionHeading
            align="left"
            badge="Featured Gallery"
            eyebrow="Portfolio"
            title="Recent projects that moved the needle"
            text="Real case studies from boutique villas, specialty coffee shops, and tranquil retreat centers across Bali."
          />
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-palm-800/20 bg-white px-6 py-3 text-sm font-semibold text-palm-800 shadow-sm transition hover:bg-palm-800 hover:text-white"
          >
            <span>See full portfolio ({PROJECTS.length})</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Masonry / Magazine Style Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.slice(0, 4).map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <Link
                to="/portfolio"
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-subtle transition-all duration-300 hover:shadow-lift"
              >
                <div className="card-img-zoom relative h-64 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.imageAlt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-palm-950/80 via-transparent to-transparent" />

                  <span className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink">
                    {p.category}
                  </span>

                  <span className="absolute bottom-4 left-4 text-xs font-semibold text-sand-100">
                    {p.year} · {p.client}
                  </span>
                </div>

                <div className="p-6 flex flex-1 flex-col justify-between">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-ink group-hover:text-clay-600 transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-ink-muted">
                      {p.summary}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-ink/5 flex items-center justify-between text-xs font-semibold text-palm-700">
                    <span>{p.results[0]}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* =========================================================================
          TESTIMONIALS: Guaranteed Rich Dark Emerald Background + Ambient Color Move
          ========================================================================= */}
      <section
        style={{ backgroundColor: '#03120E' }}
        className="relative overflow-hidden bg-palm-950 py-24 text-sand-100"
        aria-label="Client testimonials"
      >
        {/* Animated Color Move Ambient Background */}
        <div className="absolute inset-0 color-move-ambient opacity-50 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            dark
            colorfill
            badge="Client Voices"
            eyebrow="Kind words"
            title="Trusted by founders who value their brand"
            text="Read how our partners expanded their direct bookings, foot traffic, and digital credibility."
          />

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <figure className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-white/20">
                  <div>
                    <div className="flex items-center gap-1 text-gold-400">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <blockquote className="mt-5 text-sm sm:text-base leading-relaxed text-sand-100 font-display italic">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                  </div>

                  <figcaption className="mt-8 flex items-center gap-3.5 border-t border-white/10 pt-5">
                    <img
                      src={t.avatar}
                      alt={t.avatarAlt}
                      className="h-12 w-12 rounded-full object-cover ring-2 ring-clay-500"
                      loading="lazy"
                    />
                    <div>
                      <p className="font-display text-base font-semibold text-white">{t.name}</p>
                      <p className="text-xs text-sand-200/80">{t.role}</p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-sand-300/60">
            Fictional sample testimonials demonstrating client proof presentation for the SOW.
          </p>
        </div>
      </section>

      {/* =========================================================================
          CONSULTATION & INQUIRY SECTION
          ========================================================================= */}
      <section className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8" aria-label="Get in touch">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          {/* Left Editorial Guidance (5 cols) */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-clay-500/10 border border-clay-500/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-clay-600">
                <Sparkles className="h-3 w-3" />
                Complimentary Discovery
              </span>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-ink">
                Let&apos;s build something{' '}
                <span className="colorfill-text-warm font-normal italic">
                  exceptional
                </span>{' '}
                together
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-muted">
                Every partnership begins with a no-obligation 30-minute consultation — either in person in Seminyak or via Zoom worldwide.
              </p>

              {/* What happens next */}
              <div className="mt-8 space-y-4 rounded-2xl bg-sand-100/80 p-6 border border-ink/5">
                <p className="text-xs font-semibold uppercase tracking-wider text-ink">What happens next:</p>
                <div className="space-y-3 text-xs text-ink-muted">
                  <div className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-palm-800 text-white font-bold text-[10px]">1</span>
                    <span>We review your requirements and respond within 12–24 hours.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-palm-800 text-white font-bold text-[10px]">2</span>
                    <span>Free 30-minute discovery call to clarify vision, budget and timeline.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-palm-800 text-white font-bold text-[10px]">3</span>
                    <span>Receive a tailored fixed proposal + 2–3 creative moodboard concepts.</span>
                  </div>
                </div>
              </div>

              {/* Quick direct contacts */}
              <div className="mt-8 flex flex-col gap-3">
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-emerald-600/30 bg-emerald-50/50 p-4 text-xs font-semibold text-emerald-800 transition hover:bg-emerald-100"
                >
                  <MessageCircle className="h-5 w-5 text-emerald-600" />
                  <div>
                    <p className="font-bold">Prefer fast WhatsApp chat?</p>
                    <p className="text-emerald-700/80 font-normal">+62 812-3456-7890 (Direct Studio Line)</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-2 text-xs text-ink-subtle">
                  <MapPin className="h-4 w-4 text-clay-500" />
                  <span>Studio located at {SITE.address}</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Upgraded Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
