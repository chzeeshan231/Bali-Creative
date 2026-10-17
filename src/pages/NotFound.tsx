import { Compass, Home } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        path="/404"
        description="The page you are looking for does not exist on Bali Creative Studio."
      />
      <section
        style={{ backgroundColor: '#03120E' }}
        className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-palm-950 py-32 text-sand-100"
        aria-label="Page not found"
      >
        <div className="absolute inset-0 color-move-ambient opacity-50 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-2xl px-4 text-center sm:px-6">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10 text-clay-400 backdrop-blur-md ring-1 ring-white/15">
            <Compass className="h-10 w-10 animate-spin" style={{ animationDuration: '20s' }} />
          </div>

          <p className="mt-8 font-display text-8xl font-bold tracking-tight text-clay-400">
            404
          </p>

          <h1 className="mt-4 font-display text-3xl sm:text-5xl font-semibold text-white">
            This page{' '}
            <span className="colorfill-text italic font-normal">
              wandered off to the beach
            </span>
          </h1>

          <p className="mt-4 text-base leading-relaxed text-sand-200/80">
            The link you followed may have drifted out with the tide, or the page was relocated. Let&apos;s get you back to civilization.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/"
              className="btn-colorfill inline-flex items-center gap-2 rounded-full bg-clay-500 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-white shadow-soft transition hover:shadow-glow"
            >
              <Home className="h-4 w-4" aria-hidden="true" />
              <span>Back to Home</span>
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-xs font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              <span>Explore Portfolio</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-xs font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              <span>Contact Studio</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
