import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Sparkles,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import ContactForm from '../components/ContactForm'
import Reveal from '../components/Reveal'
import SEO from '../components/SEO'
import { SocialIcon } from '../components/icons'
import { SITE } from '../data/content'

export default function Contact() {
  const [baliTime, setBaliTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date()
        const options: Intl.DateTimeFormatOptions = {
          timeZone: 'Asia/Makassar',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        }
        setBaliTime(new Intl.DateTimeFormat('en-US', options).format(now))
      } catch {
        setBaliTime('10:48 AM')
      }
    }
    updateTime()
    const interval = setInterval(updateTime, 30000)
    return () => clearInterval(interval)
  }, [])

  const INFO_CARDS = [
    {
      icon: MapPin,
      badge: 'Location',
      title: 'Seminyak Studio',
      lines: [SITE.address + ' (sample)', 'Seminyak, Badung, Bali 80361'],
      action: 'https://maps.google.com/?q=Seminyak+Bali',
      actionLabel: 'Open Google Maps →',
      isExternal: true,
    },
    {
      icon: MessageCircle,
      badge: 'Direct Chat',
      title: 'WhatsApp Studio Line',
      lines: [SITE.phone + ' (sample)', 'Fastest channel for project chats'],
      action: 'https://wa.me/6281234567890',
      actionLabel: 'Chat on WhatsApp →',
      isExternal: true,
    },
    {
      icon: Mail,
      badge: 'Formal Inquiry',
      title: 'Studio Email',
      lines: [SITE.email + ' (sample)', 'Guaranteed reply in 1 business day'],
      action: `mailto:${SITE.email}`,
      actionLabel: 'Send an Email →',
      isExternal: false,
    },
    {
      icon: Clock,
      badge: 'Local Hours',
      title: 'Operating Hours',
      lines: [`Current Bali Time: ${baliTime || '10:48 AM'} WITA`, 'Mon – Fri, 9:00 AM – 6:00 PM'],
      action: '#inquiry-form',
      actionLabel: 'Leave a Message →',
      isExternal: false,
    },
  ]

  return (
    <>
      <SEO
        title="Contact Us"
        path="/contact"
        description="Connect with Bali Creative Studio in Seminyak, Bali — free discovery consultation for web design, branding, and commercial photography."
      />

      {/* =========================================================================
          PAGE HERO: Guaranteed Dark Background with Color Move Ambient Mesh
          ========================================================================= */}
      <section
        style={{ backgroundColor: '#03120E' }}
        className="relative overflow-hidden bg-palm-950 pb-20 pt-36 text-white"
        aria-label="Contact intro"
      >
        <div className="absolute inset-0 color-move-ambient opacity-50 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md">
              <Sparkles className="h-3 w-3 text-clay-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-sand-100">
                Studio Communications
              </span>
            </div>

            <h1 className="mt-4 max-w-3xl font-display text-4xl sm:text-6xl font-semibold leading-tight text-white text-balance">
              Let&apos;s talk about what you&apos;re{' '}
              <span className="colorfill-text italic font-normal">
                building in Bali
              </span>
            </h1>

            <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-sand-200/90">
              The first 30-minute discovery consultation is completely free of charge — in person over coffee in Seminyak or via Zoom worldwide.
            </p>
          </Reveal>
        </div>
      </section>

      {/* =========================================================================
          CONTACT CARDS
          ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" aria-label="Contact channels">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {INFO_CARDS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="flex h-full flex-col justify-between rounded-3xl border border-ink/10 bg-white p-7 shadow-subtle transition-all duration-300 hover:shadow-soft hover:border-palm-800/30">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-palm-800/10 text-palm-800">
                      <c.icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-clay-600 bg-clay-50 px-2.5 py-1 rounded-full">
                      {c.badge}
                    </span>
                  </div>

                  <h2 className="mt-5 font-display text-xl font-bold text-ink">
                    {c.title}
                  </h2>

                  <div className="mt-2 space-y-1">
                    {c.lines.map((l) => (
                      <p key={l} className="text-xs sm:text-sm text-ink-muted">
                        {l}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="mt-6 border-t border-ink/5 pt-4">
                  <a
                    href={c.action}
                    target={c.isExternal ? '_blank' : undefined}
                    rel={c.isExternal ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-clay-600 hover:text-clay-500"
                  >
                    <span>{c.actionLabel}</span>
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* =========================================================================
          FORM + MAP / SOCIAL SECTION
          ========================================================================= */}
      <section id="inquiry-form" className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8" aria-label="Send us a message">
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          {/* Form Column (7 cols) */}
          <div className="lg:col-span-7">
            <Reveal>
              <ContactForm />
            </Reveal>
          </div>

          {/* Map & Social Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal delay={0.15}>
              {/* Studio Map Preview Card */}
              <div className="overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-soft">
                <div className="p-5 border-b border-ink/5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-clay-600">
                    Location Embed
                  </span>
                  <h3 className="font-display text-lg font-bold text-ink">
                    Seminyak Creative Studio
                  </h3>
                  <p className="text-xs text-ink-subtle">
                    Jl. Raya Seminyak No. 88, Kerobokan, Bali
                  </p>
                </div>
                <div className="h-64 sm:h-72 w-full overflow-hidden bg-sand-100">
                  <iframe
                    title="Map showing Bali Creative Studio location in Seminyak, Bali (sample)"
                    src={SITE.mapEmbed}
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Direct WhatsApp Callout Banner with Guaranteed Dark Emerald Background */}
              <div
                style={{ backgroundColor: '#022C22' }}
                className="mt-6 rounded-3xl bg-emerald-950/95 border border-emerald-500/30 p-6 text-sand-100 shadow-soft backdrop-blur-md"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-sm">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-display text-base font-bold text-white">
                      Instant WhatsApp Chat
                    </h4>
                    <p className="text-xs text-emerald-300">
                      Typical reply time: &lt; 15 minutes during office hours
                    </p>
                  </div>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-sand-200/85">
                  Prefer chatting directly over WhatsApp? Reach Made or our design lead anytime to discuss immediate timelines or quote ideas.
                </p>

                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-colorfill mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition hover:bg-emerald-500"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Start WhatsApp Conversation</span>
                </a>
              </div>

              {/* Follow Our Work / Social Channels with Guaranteed Dark Background */}
              <div
                style={{ backgroundColor: '#03120E' }}
                className="mt-6 rounded-3xl bg-palm-950 p-6 text-sand-100 shadow-soft border border-white/10"
              >
                <h4 className="font-display text-base font-semibold text-white">
                  Follow Studio Updates & Launches
                </h4>
                <p className="mt-1 text-xs text-sand-200/80">
                  Behind-the-scenes footage, drone reels, and freshly launched Bali brands.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {SITE.socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${SITE.name} on ${s.label}`}
                      title={s.label}
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-sand-100 transition-all duration-200 hover:bg-clay-500 hover:text-white hover:scale-105"
                    >
                      <SocialIcon icon={s.icon} className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
