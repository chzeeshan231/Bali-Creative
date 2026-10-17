import { Link } from 'react-router-dom'

interface LogoProps {
  variant?: 'navbar' | 'footer' | 'mark-only'
  theme?: 'dark' | 'light' | 'auto'
  className?: string
}

/**
 * Custom Bespoke Logo for Bali Creative Studio
 * Features a sacred Balinese Candi Bentar (temple gateway) + tropical sunrise + wave crest emblem
 * with handcrafted luxury serif typography and animated color-move flow glow on hover.
 */
export default function Logo({
  variant = 'navbar',
  theme = 'dark',
  className = '',
}: LogoProps) {
  const isFooter = variant === 'footer'
  const isMarkOnly = variant === 'mark-only'
  const isLight = theme === 'light'

  return (
    <Link
      to="/"
      className={`group inline-flex items-center gap-3.5 focus:outline-none ${className}`}
      aria-label="Bali Creative Studio — Home"
    >
      {/* Bespoke Handcrafted Emblem with Colorflow on Hover */}
      <div
        className={`relative flex shrink-0 items-center justify-center rounded-2xl p-2 transition-all duration-300 group-hover:scale-105 ${
          isFooter
            ? 'h-14 w-14 bg-gradient-to-br from-palm-800 via-palm-900 to-palm-950 ring-1 ring-gold-400/30 shadow-lg'
            : isLight
            ? 'h-11 w-11 bg-palm-900 ring-1 ring-palm-700/50 shadow-md'
            : 'h-11 w-11 bg-gradient-to-br from-palm-800 to-palm-950 ring-1 ring-white/20 shadow-md'
        }`}
      >
        {/* Animated aura glow on hover with colorflow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-clay-500/30 via-gold-400/30 to-palm-500/30 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />

        {/* Artistic Balinese Temple Gateway & Sunrise SVG */}
        <svg
          viewBox="0 0 64 64"
          className={`relative z-10 transition-transform duration-500 group-hover:rotate-3 ${
            isFooter ? 'h-9 w-9' : 'h-7 w-7'
          }`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Gradient definitions */}
          <defs>
            <linearGradient id="sunGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F3D49B" />
              <stop offset="50%" stopColor="#DE855C" />
              <stop offset="100%" stopColor="#C8653B" />
            </linearGradient>
            <linearGradient id="gateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FAF7F2" />
              <stop offset="100%" stopColor="#DDD0BC" />
            </linearGradient>
            <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1C6B56" />
              <stop offset="50%" stopColor="#CCA15C" />
              <stop offset="100%" stopColor="#DE855C" />
            </linearGradient>
          </defs>

          {/* Tropical Sun Disc */}
          <circle cx="32" cy="24" r="11" fill="url(#sunGrad)" />

          {/* Subtle sun aura rays */}
          <circle cx="32" cy="24" r="14" stroke="#CCA15C" strokeWidth="1" strokeDasharray="2 3" opacity="0.6" />

          {/* Balinese Candi Bentar (Left Split Gate Pillar) */}
          <path
            d="M20 46V30L23 27V21L26 18V46"
            stroke="url(#gateGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M17 38H26" stroke="url(#gateGrad)" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M15 46H27" stroke="url(#gateGrad)" strokeWidth="2.5" strokeLinecap="round" />

          {/* Balinese Candi Bentar (Right Split Gate Pillar) */}
          <path
            d="M44 46V30L41 27V21L38 18V46"
            stroke="url(#gateGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M38 38H47" stroke="url(#gateGrad)" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M37 46H49" stroke="url(#gateGrad)" strokeWidth="2.5" strokeLinecap="round" />

          {/* Ocean waves / Island Horizon */}
          <path
            d="M10 52C15 48 20 48 25 52C30 56 34 56 39 52C44 48 49 48 54 52"
            stroke="url(#waveGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M16 57C20 54 24 54 28 57C32 60 36 60 40 57C44 54 48 54 52 57"
            stroke="url(#waveGrad)"
            strokeWidth="1.8"
            strokeLinecap="round"
            opacity="0.7"
          />
        </svg>
      </div>

      {/* Wordmark & Typography */}
      {!isMarkOnly && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-display font-bold tracking-tight transition-colors duration-200 ${
                isLight ? 'text-ink' : 'text-white'
              } ${isFooter ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'}`}
            >
              Bali Creative
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span
              className={`text-[10px] font-bold uppercase tracking-[0.32em] transition-colors ${
                isLight ? 'text-clay-600' : 'text-clay-400 group-hover:text-gold-400'
              }`}
            >
              STUDIO
            </span>
            <span className="h-1 w-1 rounded-full bg-gold-400/60" aria-hidden="true" />
            <span
              className={`text-[9px] uppercase tracking-[0.18em] font-medium ${
                isLight ? 'text-ink-subtle' : 'text-sand-200/80'
              }`}
            >
              EST. 2018 · BALI
            </span>
          </div>
        </div>
      )}
    </Link>
  )
}
