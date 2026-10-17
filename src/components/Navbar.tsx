import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  Camera,
  ChevronDown,
  Clock,
  Menu,
  MessageCircle,
  Monitor,
  Palette,
  TrendingUp,
  X,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo'
import { NAV_LINKS, SITE } from '../data/content'

// Service shortcuts for mega dropdown
const SERVICE_SHORTCUTS = [
  {
    title: 'Web Design & Build',
    desc: 'High-converting custom sites & platform setups',
    icon: Monitor,
    to: '/services',
  },
  {
    title: 'Brand Identity',
    desc: 'Logos, color palettes & complete guidelines',
    icon: Palette,
    to: '/services',
  },
  {
    title: 'Photography & Film',
    desc: 'On-location hospitality & lifestyle visuals',
    icon: Camera,
    to: '/services',
  },
  {
    title: 'SEO & Growth',
    desc: 'Search rankings and analytics configured',
    icon: TrendingUp,
    to: '/services',
  },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [servicesDropdown, setServicesDropdown] = useState(false)
  const [baliTime, setBaliTime] = useState('')
  const location = useLocation()

  // Format local Bali time (WITA: UTC+8)
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
    const timer = setInterval(updateTime, 30000)
    return () => clearInterval(timer)
  }, [])

  // Close menus on route change
  useEffect(() => {
    setOpen(false)
    setServicesDropdown(false)
  }, [location.pathname])

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      {/* Top Studio Micro-Ticker Bar (Desktop) */}
      <div
        style={{ backgroundColor: '#020C09' }}
        className="relative z-50 hidden border-b border-white/10 bg-palm-950 py-2 text-[11px] text-sand-200/90 lg:block"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 font-medium text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Accepting select clients for Q2/Q3
            </span>
            <span className="text-white/20">|</span>
            <span className="flex items-center gap-1.5 text-sand-200/80">
              <Clock className="h-3.5 w-3.5 text-clay-400" aria-hidden="true" />
              Bali Studio (WITA): <span className="font-semibold text-white">{baliTime || '10:48 AM'}</span>
            </span>
            <span className="text-white/20">|</span>
            <span className="text-sand-300/80">Seminyak · Canggu · Uluwatu</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <MessageCircle className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
              WhatsApp Direct: +62 812-3456-7890
            </a>
            <span className="text-white/20">|</span>
            <a
              href={`mailto:${SITE.email}`}
              className="transition-colors hover:text-white"
            >
              {SITE.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar: Always dark emerald glass with high-contrast readable text */}
      <header
        style={{ backgroundColor: '#03120E' }}
        className="sticky top-0 z-40 w-full border-b border-white/10 bg-palm-950 py-3.5 shadow-lift backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Recreated Attractive Logo Component */}
          <Logo variant="navbar" theme="dark" />

          {/* Desktop Nav Links */}
          <nav className="hidden items-center gap-1.5 lg:flex" aria-label="Main navigation">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.to
              const isServices = link.to === '/services'

              return (
                <div
                  key={link.to}
                  className="relative"
                  onMouseEnter={() => isServices && setServicesDropdown(true)}
                  onMouseLeave={() => isServices && setServicesDropdown(false)}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive: active }) =>
                      `nav-link-colorflow relative flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                        active
                          ? 'text-white font-semibold'
                          : 'text-sand-100/90 hover:text-white'
                      }`
                    }
                  >
                    <span>{link.label}</span>
                    {isServices && (
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${
                          servicesDropdown ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    )}

                    {/* Active gliding indicator with subtle colorfill shimmer */}
                    {isActive && (
                      <motion.div
                        layoutId="nav-active-pill"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-clay-500/30 via-gold-400/20 to-palm-500/30 border border-white/20 shadow-sm"
                      />
                    )}
                  </NavLink>

                  {/* Services Mega Dropdown */}
                  {isServices && (
                    <AnimatePresence>
                      {servicesDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-1/2 top-full -translate-x-1/2 pt-2.5 z-50"
                        >
                          <div className="w-80 rounded-2xl border border-white/15 bg-palm-900/98 p-3.5 shadow-2xl backdrop-blur-2xl">
                            <div className="px-3 pb-2 pt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-clay-400">
                              Core Capabilities
                            </div>
                            <div className="space-y-1">
                              {SERVICE_SHORTCUTS.map((item) => (
                                <Link
                                  key={item.title}
                                  to={item.to}
                                  className="group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-white/10"
                                >
                                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-clay-500/20 text-clay-400 transition-colors group-hover:bg-clay-500 group-hover:text-white">
                                    <item.icon className="h-4 w-4" />
                                  </div>
                                  <div>
                                    <p className="text-xs font-semibold text-white group-hover:text-clay-300">
                                      {item.title}
                                    </p>
                                    <p className="text-[11px] text-sand-300/70">
                                      {item.desc}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                            <div className="mt-2 border-t border-white/10 pt-2.5 text-center">
                              <Link
                                to="/services"
                                className="inline-flex items-center gap-1 text-xs font-semibold text-clay-400 hover:text-clay-300"
                              >
                                View all 6 services & pricing <ArrowRight className="h-3 w-3" />
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              )
            })}
          </nav>

          {/* Desktop Call to Actions */}
          <div className="hidden items-center gap-3.5 lg:flex">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct WhatsApp Chat"
              className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3.5 py-1.5 text-xs font-medium text-emerald-300 transition-all duration-200 hover:border-emerald-400 hover:bg-emerald-600/20 hover:text-white"
            >
              <MessageCircle className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
              <span>WhatsApp</span>
            </a>

            {/* Colorfill Animated CTA Button with flowing colors on hover */}
            <Link
              to="/contact"
              className="btn-colorflow group relative inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-soft focus:outline-none focus:ring-2 focus:ring-clay-500/50"
            >
              <span className="relative z-10">Start Project</span>
              <ArrowRight className="relative z-10 h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? 'Close main menu' : 'Open main menu'}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-md hover:bg-white/25 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Luxury Full-Screen Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ backgroundColor: '#03120E' }}
            className="fixed inset-0 z-50 flex flex-col bg-palm-950 p-6 text-sand-50 backdrop-blur-2xl lg:hidden"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <Logo variant="navbar" theme="dark" />

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Links List */}
            <nav className="my-auto flex flex-col space-y-2 py-6" aria-label="Mobile navigation">
              {NAV_LINKS.map((link, idx) => {
                const isActive = location.pathname === link.to
                return (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx }}
                  >
                    <NavLink
                      to={link.to}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-2xl font-display font-medium transition ${
                        isActive
                          ? 'bg-white/15 text-clay-400 border border-white/10'
                          : 'text-sand-100 hover:text-white'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="h-5 w-5 opacity-40" />
                    </NavLink>
                  </motion.div>
                )
              })}
            </nav>

            {/* Mobile Footer & Quick Actions */}
            <div className="border-t border-white/10 pt-5">
              <div className="mb-4 flex items-center justify-between text-xs text-sand-300/80">
                <span>Bali Studio (WITA): {baliTime}</span>
                <span className="text-emerald-400">● Open for Q2/Q3</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600/20 border border-emerald-500/30 px-4 py-3 text-sm font-semibold text-emerald-300 hover:bg-emerald-600/30"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="btn-colorflow flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white shadow-soft"
                >
                  <span className="relative z-10">Get Quote</span>
                  <ArrowRight className="relative z-10 h-4 w-4" />
                </Link>
              </div>

              <p className="mt-4 text-center text-[11px] text-sand-300/50">
                Jl. Raya Seminyak No. 88, Bali · {SITE.phone}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
