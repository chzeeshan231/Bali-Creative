# Bali Creative Studio — Demo Website

A fully static, responsive demo website built from the **"Freelance Website Development
using Wix / Squarespace"** Scope of Work. The business ("Bali Creative Studio") is
**fictional** — every name, price, address, testimonial and image is sample placeholder
content standing in for client-provided content (SOW item 3f).

## SOW coverage

| SOW item | Status in this demo |
|---|---|
| 3a Platform setup (Wix/Squarespace) | Demo-only: this is a static React build showing exactly what the finished site looks like; the real site would be recreated on Wix/Squarespace at launch |
| 3b Design & layout, modern UI/UX | ✅ Implemented — 2–3 homepage concepts are part of the fictional process; this build is concept 1 |
| 3c Pages: Home, About Us, Services/Products, Portfolio/Gallery, Contact Us | ✅ All 5 pages + 404 |
| 3d Responsive (mobile, tablet, desktop) | ✅ Mobile-first, tested at 390px / 768px / 1280px |
| 3e Contact form | ✅ Validated form (simulated submit → localStorage in demo) |
| 3e Social media integration | ✅ Instagram, Facebook, X, LinkedIn, YouTube, TikTok links in footer + contact page |
| 3e Google Maps integration | ✅ Embedded map of Seminyak, Bali (needs internet at runtime) |
| 3f Content upload | ✅ Sample text/images bundled locally in `src/assets/` |
| 3g Basic SEO | ✅ Per-page titles + meta descriptions, OG/Twitter tags, semantic HTML, alt text on all images, `robots.txt`, `sitemap.xml` |
| 3h Final launch / domain | Out of scope for the demo (would be done on Wix/Squarespace with the client's domain) |

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
npm run preview  # serve the production build
```

No backend, no database, no API keys. Everything runs from static files.

## Project structure

```
src/
  assets/images/   # bundled sample photos (offline)
  assets/fonts/    # Fraunces + Inter woff2 (offline)
  components/      # Navbar, Footer, SEO, ContactForm, Lightbox, Reveal, ...
  data/content.ts  # ALL site copy in one place — swap with real client content
  pages/           # Home, About, Services, Portfolio, Contact, NotFound
  App.tsx          # HashRouter routes
```

## Known demo limitations

- The contact form **simulates** submission (saves to browser localStorage); the live
  Wix/Squarespace site would use the platform's real form handler.
- The Google Maps embed requires an internet connection.
- Social links point to platform homepages (sample) — replace with the client's profiles.
- All copy, prices, people and contact details are fictional samples.
