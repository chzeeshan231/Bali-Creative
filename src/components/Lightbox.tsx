import { AnimatePresence, motion } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  TrendingUp,
  X,
} from 'lucide-react'
import { useCallback, useEffect } from 'react'
import type { Project } from '../data/content'

interface LightboxProps {
  projects: Project[]
  index: number | null
  onClose: () => void
  onNavigate: (index: number) => void
}

/** Full-screen luxury gallery lightbox with keyboard and thumbnail navigation. */
export default function Lightbox({ projects, index, onClose, onNavigate }: LightboxProps) {
  const project = index === null ? null : projects[index]

  const step = useCallback(
    (dir: 1 | -1) => {
      if (index === null) return
      onNavigate((index + dir + projects.length) % projects.length)
    },
    [index, projects.length, onNavigate],
  )

  useEffect(() => {
    if (index === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [index, onClose, step])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-palm-950/95 p-4 sm:p-6 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          aria-label={`Project showcase: ${project.title}`}
          onClick={onClose}
        >
          {/* Top Controls Bar */}
          <div className="absolute top-4 inset-x-4 sm:inset-x-8 flex items-center justify-between text-sand-100 z-10 pointer-events-none">
            <div className="flex items-center gap-2 pointer-events-auto bg-black/40 px-3.5 py-1.5 rounded-full border border-white/10 text-xs">
              <Sparkles className="h-3.5 w-3.5 text-clay-400" />
              <span>Case Study View</span>
              <span className="opacity-40">·</span>
              <span className="text-sand-300">
                {(index ?? 0) + 1} of {projects.length}
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close project viewer"
              className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20 hover:scale-105"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              step(-1)
            }}
            aria-label="Previous project"
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/25 hover:scale-110"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Card figure content */}
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-h-[85vh] w-full max-w-4xl overflow-hidden rounded-3xl border border-white/15 bg-palm-900 shadow-lift flex flex-col my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 sm:h-96 w-full overflow-hidden bg-black/40">
              <img
                src={project.image}
                alt={project.imageAlt}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-palm-900 via-transparent to-black/20" />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="rounded-full bg-clay-500 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-md">
                  {project.category}
                </span>
                <span className="rounded-full bg-black/50 backdrop-blur-md px-3 py-1 text-xs font-medium text-sand-100">
                  {project.year}
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 bg-palm-900 text-sand-100">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-wider text-clay-400 font-semibold">
                    Client: {project.client}
                  </p>
                </div>
              </div>

              <p className="mt-3 text-sm sm:text-base leading-relaxed text-sand-200/90 max-w-3xl">
                {project.summary}
              </p>

              {/* Key Results / Metrics */}
              <div className="mt-5 border-t border-white/10 pt-4">
                <p className="text-[11px] uppercase tracking-wider font-semibold text-sand-300/70 mb-2.5">
                  Delivered Impact & Achievements
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {project.results.map((res) => (
                    <span
                      key={res}
                      className="inline-flex items-center gap-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 px-3.5 py-1 text-xs font-medium text-emerald-300"
                    >
                      <TrendingUp className="h-3.5 w-3.5 text-emerald-400" />
                      {res}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              step(1)
            }}
            aria-label="Next project"
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/25 hover:scale-110"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Bottom Thumbnails */}
          <div className="absolute bottom-4 inset-x-4 flex justify-center gap-2 pointer-events-auto">
            {projects.map((p, i) => (
              <button
                key={p.slug}
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  onNavigate(i)
                }}
                aria-label={`Go to slide ${i + 1}: ${p.title}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === i ? 'w-8 bg-clay-400' : 'w-2.5 bg-white/30 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
