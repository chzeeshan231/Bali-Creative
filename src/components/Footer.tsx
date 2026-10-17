import {
  ArrowRight,
  Clock,
  Heart,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import { NAV_LINKS, SERVICES, SITE } from '../data/content'
import { SocialIcon } from './icons'

export default function Footer() {
  const [currentTime, setCurrentTime] = useState('')

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
        setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(now))
      } catch {
        setCurrentTime('10:48 AM')
      }
    }
    updateTime()
    const interval = setInterval(updateTime, 30000)
    return () => clearInterval(interval)
  }, [])

  return (
    <footer
      style={{ backgroundColor: '#03120E' }}
      className="relative overflow-hidden bg-palm-950 text-sand-100"
    >
      {/* Animated Color Move Ambient Background */}
      <div className="absolute inset-0 color-move-ambient opacity-40 pointer-events-none" />

      {/* Top Editorial Banner */}
      <div className="relative z-10 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-clay-500/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-clay-400 ring-1 ring-clay-500/30">
                <Sparkles className="h-3 w-3" />
                Let&apos;s collaborate
              </span>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] text-white">
                Ready to elevate your presence on the island?
              </h2>
              <p className="mt-4 max-w-xl text-base text-sand-200/90 leading-relaxed">
                Whether you run a cliffside villa in Uluwatu, a boutique roastery in Canggu, or an international hospitality brand — we build digital homes that convert.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
              <Link
                to="/contact"
                className="btn-colorflow group inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white shadow-soft transition-all duration-300"
              >
                <span className="relative z-10">Start Your Project</span>
                <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                <MessageCircle className="h-4 w-4 text-emerald-400" />
                <span>WhatsApp Studio</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column with Recreated Attractive Logo */}
          <div className="lg:col-span-2">
            <Logo variant="footer" theme="dark" />

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-sand-200/80">
              Independent web design, branding, and location photography studio based in Seminyak, Bali. Dedicated to high-craft digital experiences for passionate brands.
            </p>

            {/* Studio Local Time card with glowing indicator */}
            <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-md">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-palm-800 text-emerald-400">
                <Clock className="h-4 w-4" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-sand-300/70">Bali Studio Time</p>
                <p className="font-display text-sm font-semibold text-white">
                  {currentTime || '10:48 AM'} WITA (UTC+8)
                </p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-6 flex flex-wrap gap-2">
              {SITE.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${SITE.name} on ${s.label}`}
                  title={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-sand-100 transition-all duration-200 hover:bg-clay-500 hover:text-white hover:scale-105"
                >
                  <SocialIcon icon={s.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Sitemap */}
          <nav aria-label="Footer navigation">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay-400">
              Navigation
            </p>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-sand-200/85 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Capabilities */}
          <nav aria-label="Services list">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay-400">
              Expertise
            </p>
            <ul className="mt-4 space-y-3">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services"
                    className="text-sm text-sand-200/85 transition-colors hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Direct Studio Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay-400">
              Studio Base
            </p>
            <ul className="mt-4 space-y-3.5 text-sm text-sand-200/85">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-clay-400" aria-hidden="true" />
                <span>
                  {SITE.address}
                  <span className="block text-xs text-sand-300/60 mt-0.5">(Sample Location)</span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-clay-400" aria-hidden="true" />
                <a
                  href={`tel:${SITE.phone.replace(/\s/g, '')}`}
                  className="transition-colors hover:text-white"
                >
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-clay-400" aria-hidden="true" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="transition-colors hover:text-white"
                >
                  {SITE.email}
                </a>
              </li>
            </ul>

            <div className="mt-6 rounded-xl bg-white/5 p-3 text-xs text-sand-300/80">
              <p className="font-semibold text-white">Office Hours:</p>
              <p className="mt-0.5">{SITE.hours}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-sand-300/60 sm:flex-row">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="h-3.5 w-3.5 text-clay-500 fill-clay-500" />
            <span>in Bali for the Freelance Website Development SOW.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
