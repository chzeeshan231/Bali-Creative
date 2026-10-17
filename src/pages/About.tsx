import {
  ArrowRight,
  CheckCircle2,
  Compass,
  Eye,
  Leaf,
  Sparkles,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import SEO from '../components/SEO'
import SectionHeading from '../components/SectionHeading'
import { IMAGES, PROCESS, TEAM } from '../data/content'

const VALUES = [
  {
    icon: Eye,
    title: 'Design with Radical Honesty',
    text: 'No off-the-shelf templates masquerading as custom work, and no confusing technical jargon. You see every wireframe, mock-up, and decision clearly at every stage.',
    badge: 'Transparency',
  },
  {
    icon: Leaf,
    title: 'Rooted in Bali & Island Culture',
    text: 'We live here, hire locally, and understand the pulse of Bali tourism — designing digital homes that resonate deeply with guests flying in from across the globe.',
    badge: 'Authenticity',
  },
  {
    icon: Compass,
    title: 'Engineered for Longevity',
    text: 'Clean semantic structure, lightning-fast assets, documented setup guides, and personalized video training so you and your team can manage the site effortlessly.',
    badge: 'Empowerment',
  },
]

const TIMELINE = [
  {
    year: '2018',
    title: 'Canggu Café Origins',
    desc: 'Founded by Made Wirawan with a single laptop, crafting booking websites for neighborhood villa owners.',
  },
  {
    year: '2021',
    title: 'On-Location Photography',
    desc: 'Brought full production on-island with commercial drone and interior lifestyle photography suites.',
  },
  {
    year: '2024',
    title: '100+ Projects & Awards',
    desc: 'Crossed over 100 client launches across Bali, Singapore, and Australia, earning regional hospitality design honors.',
  },
  {
    year: '2026',
    title: 'Seminyak Studio HQ',
    desc: 'A dedicated team of senior designers and developers delivering premier platforms for luxury island businesses.',
  },
]

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        path="/about"
        description="Meet Bali Creative Studio — an independent team of designers, developers, and photographers crafting luxury websites in Seminyak, Bali since 2018."
      />

      {/* =========================================================================
          PAGE HERO: Cinematic Editorial Header with Guaranteed Dark Background
          ========================================================================= */}
      <section
        style={{ backgroundColor: '#03120E' }}
        className="relative min-h-[58vh] flex items-end overflow-hidden bg-palm-950 pb-16 pt-36"
        aria-label="About intro"
      >
        <img
          src={IMAGES.aboutTeam}
          alt="Creative studio team collaborating in a bright modern studio in Bali"
          className="absolute inset-0 h-full w-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-palm-950 via-palm-950/80 to-palm-950/40" />
        <div className="absolute inset-0 color-move-ambient opacity-50 pointer-events-none" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md">
              <Sparkles className="h-3 w-3 text-clay-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-sand-100">
                Origins & Philosophy
              </span>
            </div>

            <h1 className="mt-4 max-w-3xl font-display text-4xl sm:text-6xl font-semibold leading-tight text-white text-balance">
              A boutique Bali studio with{' '}
              <span className="colorfill-text italic font-normal">big-island energy</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-sand-200/90">
              We started with a simple conviction: Bali has some of the most inspiring hospitality and artisan brands in the world — their online experience should be just as breathtaking.
            </p>
          </Reveal>
        </div>
      </section>

      {/* =========================================================================
          FOUNDING STORY & HERITAGE
          ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8" aria-label="Our story">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          {/* Narrative (7 cols) */}
          <div className="lg:col-span-7">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-clay-600">
                Our Story
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-ink text-balance">
                Started at a Canggu café table in 2018
              </h2>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-muted">
                <p>
                  Bali Creative Studio began when founder <strong className="text-ink font-semibold">Made Wirawan</strong>, an experienced freelance web designer, kept hearing the exact same story from local boutique hotel managers and roastery owners: <em className="italic text-ink font-serif">&ldquo;Beautiful business, invisible online.&rdquo;</em> Their websites were sluggish, impossible to edit, broke on smartphones, and vanished on Google.
                </p>
                <p>
                  Eight years later, we have intentionally stayed a close-knit, agile studio. We don&apos;t pass clients off to junior account managers. When you message us, you are speaking directly with the designers who craft your pages, the photographers on your property, and the developers writing your code.
                </p>
                <p>
                  To date, we have launched over 120 websites, identities, and visual campaigns for villas in Uluwatu, cafés in Canggu, yoga shalas in Ubud, and beach clubs in Seminyak.
                </p>
              </div>

              {/* Founder quote pill */}
              <div className="mt-8 rounded-2xl border-l-4 border-clay-500 bg-sand-100 p-6">
                <p className="font-display text-base italic text-ink">
                  &ldquo;Our golden rule has never wavered: treat every client&apos;s project as if our own name and livelihood were on the line — because for our partners, it is.&rdquo;
                </p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-clay-600">
                  Made Wirawan · Founder & Design Lead
                </p>
              </div>
            </Reveal>
          </div>

          {/* Timeline & Stats (5 cols) */}
          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <div className="rounded-3xl border border-ink/10 bg-white p-8 shadow-soft">
                <h3 className="font-display text-xl font-semibold text-ink border-b border-ink/5 pb-4">
                  Studio Evolution
                </h3>

                <div className="mt-6 space-y-6">
                  {TIMELINE.map((item, idx) => (
                    <div key={item.year} className="relative flex items-start gap-4">
                      {/* Line connector */}
                      {idx !== TIMELINE.length - 1 && (
                        <span className="absolute left-4 top-8 -bottom-6 w-0.5 bg-sand-200" aria-hidden="true" />
                      )}
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-palm-800 text-[11px] font-bold text-white shadow-sm">
                        {item.year.slice(2)}
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-clay-600 uppercase tracking-wider">
                            {item.year}
                          </span>
                          <span className="text-xs font-semibold text-ink">· {item.title}</span>
                        </div>
                        <p className="mt-1 text-xs text-ink-subtle leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick stats mini-grid */}
                <div className="mt-8 grid grid-cols-2 gap-3 border-t border-ink/5 pt-6">
                  <div className="rounded-xl bg-sand-50 p-3.5 text-center">
                    <p className="font-display text-2xl font-bold text-palm-800">120+</p>
                    <p className="text-[10px] uppercase tracking-wider text-ink-subtle">Projects Live</p>
                  </div>
                  <div className="rounded-xl bg-sand-50 p-3.5 text-center">
                    <p className="font-display text-2xl font-bold text-clay-600">98%</p>
                    <p className="text-[10px] uppercase tracking-wider text-ink-subtle">Happy Clients</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================================
          STUDIO VALUES
          ========================================================================= */}
      <section className="bg-sand-100 py-24" aria-label="Our values">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Studio Tenets"
            eyebrow="What we believe"
            title="Values that guide every pixel and line of code"
            text="We reject bloated agency practices. Here is the operational philosophy behind every relationship we build."
          />

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="flex h-full flex-col justify-between rounded-3xl border border-ink/5 bg-white p-8 shadow-subtle transition-all duration-300 hover:shadow-soft hover:-translate-y-1">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-palm-800/10 text-palm-800">
                        <v.icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                      <span className="rounded-full bg-sand-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-ink-subtle">
                        {v.badge}
                      </span>
                    </div>

                    <h3 className="mt-6 font-display text-2xl font-semibold text-ink">
                      {v.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                      {v.text}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-clay-600">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Guaranteed in every contract</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          THE TEAM: Studio Principals
          ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8" aria-label="Our team">
        <SectionHeading
          badge="Principal Team"
          eyebrow="The team"
          title="The minds behind the pixels"
          text="Small enough to know every nuance of your business, experienced enough to deliver high-converting launches."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.1}>
              <article className="group h-full rounded-3xl border border-ink/10 bg-white p-8 text-center shadow-subtle transition-all duration-300 hover:shadow-lift hover:border-palm-800/20">
                {/* Monogram Badge */}
                <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-palm-800 to-clay-500 font-display text-3xl font-bold text-white shadow-md transition-transform duration-300 group-hover:scale-105">
                  {m.initials}
                  <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-sand-50 border border-ink/10 text-[10px]">
                    🌴
                  </span>
                </div>

                <h3 className="mt-6 font-display text-2xl font-semibold text-ink">
                  {m.name}
                </h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-clay-600">
                  {m.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                  {m.bio}
                </p>

                <div className="mt-6 border-t border-ink/5 pt-4 text-xs font-medium text-ink-subtle">
                  Based in Bali · Fluent EN & ID
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-ink-faint">
          Sample team profiles presented for the freelance website demo build.
        </p>
      </section>

      {/* =========================================================================
          4-STEP PROVEN LAUNCH METHOD: Guaranteed Dark Background + Color Move Mesh
          ========================================================================= */}
      <section
        style={{ backgroundColor: '#03120E' }}
        className="relative overflow-hidden bg-palm-950 py-24 text-sand-100"
        aria-label="Our process"
      >
        {/* Animated Color Move Ambient Mesh */}
        <div className="absolute inset-0 color-move-ambient opacity-50 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            dark
            colorfill
            badge="Proven Workflow"
            eyebrow="How we work"
            title="From discovery call to live launch in 4 disciplined steps"
            text="A structured, collaborative path with zero mystery. You are updated after every milestone."
          />

          <ol className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.1}>
                <li className="flex h-full flex-col justify-between rounded-3xl border border-white/15 bg-white/5 p-7 backdrop-blur transition-all duration-300 hover:border-white/30 hover:bg-white/10">
                  <div>
                    <span className="font-display text-5xl font-bold text-clay-400">
                      {p.step}
                    </span>
                    <h3 className="mt-4 font-display text-2xl font-semibold text-white">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-sand-200/90">
                      {p.text}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-white/10 pt-4 text-xs font-semibold text-sand-300">
                    Step {p.step} · 100% Client Approval Required
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal className="mt-16 text-center">
            <Link
              to="/contact"
              className="btn-colorfill group inline-flex items-center gap-2.5 rounded-full bg-clay-500 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white shadow-soft transition hover:shadow-glow"
            >
              <span>Book Your Free Consultation</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
