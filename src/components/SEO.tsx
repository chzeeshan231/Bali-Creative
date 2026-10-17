import { useEffect } from 'react'
import { SITE } from '../data/content'

interface SEOProps {
  title: string
  description?: string
  path?: string
}

/** Per-page SEO: sets <title> and meta description (SOW item 3g). */
export default function SEO({ title, description, path = '/' }: SEOProps) {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE.name}`
    document.title = fullTitle

    const setMeta = (attr: 'name' | 'property', key: string, content: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, key)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('name', 'description', description ?? SITE.description)
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', description ?? SITE.description)
    setMeta('property', 'og:url', `https://example.com${path}`)
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', description ?? SITE.description)

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', `https://example.com${path}`)
  }, [title, description, path])

  return null
}
