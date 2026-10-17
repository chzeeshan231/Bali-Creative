import Reveal from './Reveal'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  text?: string
  align?: 'left' | 'center'
  dark?: boolean
  badge?: string
  colorfill?: boolean
}

export default function SectionHeading({
  eyebrow,
  title,
  text,
  align = 'center',
  dark = false,
  badge,
  colorfill = false,
}: SectionHeadingProps) {
  const isCenter = align === 'center'
  const alignCls = isCenter ? 'text-center mx-auto items-center' : 'text-left items-start'

  return (
    <Reveal className={`flex flex-col max-w-3xl ${alignCls}`}>
      <div className="flex items-center gap-2">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] ${
            dark
              ? 'bg-white/10 text-clay-400 border border-white/15 backdrop-blur-md'
              : 'bg-clay-500/10 text-clay-600 border border-clay-500/20'
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse-subtle" aria-hidden="true" />
          {badge ?? eyebrow}
        </span>
      </div>

      <h2
        className={`mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-balance leading-[1.15] ${
          colorfill
            ? 'colorfill-text'
            : dark
              ? 'text-white'
              : 'text-ink'
        }`}
      >
        {title}
      </h2>

      {text && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed text-balance ${
            dark ? 'text-sand-200/90' : 'text-ink-muted'
          }`}
        >
          {text}
        </p>
      )}
    </Reveal>
  )
}

