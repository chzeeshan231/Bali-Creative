// ---------------------------------------------------------------------------
// Sample content for the demo website "Bali Creative Studio".
// ALL text, names, prices, addresses and contact details below are FICTIONAL
// placeholders standing in for client-provided content (SOW item 3f).
// ---------------------------------------------------------------------------

import heroBali from '../assets/images/hero-bali.jpg'
import aboutTeam from '../assets/images/about-team.jpg'
import serviceWeb from '../assets/images/service-web.jpg'
import serviceBranding from '../assets/images/service-branding.jpg'
import servicePhoto from '../assets/images/service-photo.jpg'
import serviceSeo from '../assets/images/service-seo.jpg'
import serviceSocial from '../assets/images/service-social.jpg'
import serviceShop from '../assets/images/service-shop.jpg'
import portfolioCafe from '../assets/images/portfolio-cafe.jpg'
import portfolioHotel from '../assets/images/portfolio-hotel.jpg'
import portfolioYoga from '../assets/images/portfolio-yoga.jpg'
import portfolioRestaurant from '../assets/images/portfolio-restaurant.jpg'
import avatar1 from '../assets/images/avatar-1.jpg'
import avatar2 from '../assets/images/avatar-2.jpg'
import avatar3 from '../assets/images/avatar-3.jpg'

export const IMAGES = {
  heroBali,
  aboutTeam,
  serviceWeb,
  serviceBranding,
  servicePhoto,
  serviceSeo,
  serviceSocial,
  serviceShop,
  portfolioCafe,
  portfolioHotel,
  portfolioYoga,
  portfolioRestaurant,
  avatar1,
  avatar2,
  avatar3,
}

export const SITE = {
  name: 'Bali Creative Studio',
  tagline: 'Web Design, Branding & Photography in Bali',
  description:
    'A modern, responsive sample business website built as a demo for the Freelance Website Development SOW (Wix / Squarespace).',
  email: 'hello@balicreative.studio',
  phone: '+62 812-3456-7890',
  address: 'Jl. Raya Seminyak No. 88, Kerobokan, Bali 80361',
  hours: 'Mon–Fri, 9:00 AM – 6:00 PM (WITA)',
  mapEmbed:
    'https://www.google.com/maps?q=Seminyak,+Bali,+Indonesia&z=13&output=embed',
  socials: [
    { label: 'Instagram', href: 'https://instagram.com/', icon: 'instagram' },
    { label: 'Facebook', href: 'https://facebook.com/', icon: 'facebook' },
    { label: 'X (Twitter)', href: 'https://x.com/', icon: 'twitter' },
    { label: 'LinkedIn', href: 'https://linkedin.com/', icon: 'linkedin' },
    { label: 'YouTube', href: 'https://youtube.com/', icon: 'youtube' },
    { label: 'TikTok', href: 'https://tiktok.com/', icon: 'tiktok' },
  ] as { label: string; href: string; icon: string }[],
}

export interface Service {
  slug: string
  title: string
  short: string
  description: string
  image: string
  imageAlt: string
  features: string[]
  icon: string
}

export const SERVICES: Service[] = [
  {
    slug: 'web-design',
    title: 'Web Design & Development',
    short: 'Modern, mobile-first websites that turn visitors into customers.',
    description:
      'We design and build fast, responsive websites — from simple business sites on Wix/Squarespace-style platforms to fully custom builds. Every site is optimized for mobile, tablet and desktop, with clean SEO foundations baked in from day one.',
    image: serviceWeb,
    imageAlt: 'Web designer workspace with laptop showing a website mockup',
    features: [
      'Custom homepage + up to 10 inner pages',
      'Fully responsive: mobile, tablet, desktop',
      'Contact forms & WhatsApp chat integration',
      'Basic SEO: meta titles, descriptions, alt tags',
      'Google Maps & social media integration',
      'Launch support & 30 days of fixes',
    ],
    icon: 'monitor',
  },
  {
    slug: 'branding',
    title: 'Branding & Logo Design',
    short: 'Memorable identities for Bali businesses that stand out.',
    description:
      'From logo to full brand guidelines, we craft identities that capture the spirit of your business — colors, typography, stationery and everything in between, delivered as print-ready and digital files.',
    image: serviceBranding,
    imageAlt: 'Flat lay of branding stationery mockup with logo design',
    features: [
      'Logo design with 3 initial concepts',
      'Color palette & typography system',
      'Business cards & stationery mockups',
      'Brand guideline mini-book (PDF)',
      'Social media profile kit',
      '2 revision rounds included',
    ],
    icon: 'palette',
  },
  {
    slug: 'photography',
    title: 'Photography & Videography',
    short: 'Stunning visuals shot on location across Bali.',
    description:
      'Professional photo and video shoots for hotels, restaurants, products and portraits. We handle art direction, shooting and editing — you get a gallery of web-ready images that make your business look its best.',
    image: servicePhoto,
    imageAlt: 'Photographer holding a camera during a beach photoshoot',
    features: [
      'Half-day or full-day shoots',
      'Drone footage available',
      'Professional retouching & color grading',
      'Web-optimized + print-resolution files',
      'Short promo reels for social media',
      'Licensed for commercial use',
    ],
    icon: 'camera',
  },
  {
    slug: 'seo-marketing',
    title: 'SEO & Digital Marketing',
    short: 'Get found on Google by customers ready to buy.',
    description:
      'Technical SEO audits, keyword strategy and content optimization that lift your rankings. We set up Google Business Profile, analytics and search console so you can see exactly what is working.',
    image: serviceSeo,
    imageAlt: 'Laptop showing SEO analytics dashboard with graphs',
    features: [
      'Full SEO audit & keyword research',
      'On-page optimization (titles, meta, headings)',
      'Google Business Profile setup',
      'Analytics & Search Console configuration',
      'Monthly performance report',
      'Local Bali search optimization',
    ],
    icon: 'trending-up',
  },
  {
    slug: 'social-media',
    title: 'Social Media Management',
    short: 'Scroll-stopping content that grows your audience.',
    description:
      'Content calendars, photography, reels and community management for Instagram, TikTok and Facebook. We keep your feed active and on-brand while you focus on running your business.',
    image: serviceSocial,
    imageAlt: 'Smartphone showing social media marketing apps',
    features: [
      'Monthly content calendar',
      '12 posts + 4 reels per month',
      'Captions & hashtag strategy',
      'Stories & community replies',
      'Monthly growth report',
      'Ad campaign setup (optional)',
    ],
    icon: 'share-2',
  },
  {
    slug: 'ecommerce',
    title: 'E-commerce Stores',
    short: 'Sell online with a store that is easy to manage.',
    description:
      'Beautiful online stores with secure checkout, product galleries and order management. We train you on adding products and processing orders, so the shop practically runs itself.',
    image: serviceShop,
    imageAlt: 'Small business owner packing online orders for ecommerce',
    features: [
      'Up to 50 products at launch',
      'Secure checkout & payment setup',
      'Discount codes & promotions',
      'Order & inventory dashboard',
      'Training video + manual',
      'Mobile shopping optimized',
    ],
    icon: 'shopping-bag',
  },
]

export type PortfolioCategory = 'Web Design' | 'Branding' | 'Photography'

export interface Project {
  slug: string
  title: string
  category: PortfolioCategory
  client: string
  year: string
  image: string
  imageAlt: string
  summary: string
  results: string[]
}

export const PROJECTS: Project[] = [
  {
    slug: 'cliffside-villas',
    title: 'Cliffside Villas Uluwatu',
    category: 'Web Design',
    client: 'Cliffside Villas (sample)',
    year: '2025',
    image: portfolioHotel,
    imageAlt: 'Boutique hotel room interior in Bali style for Cliffside Villas website project',
    summary:
      'A booking-focused website for a 12-villa clifftop property, with room galleries, live availability forms and multi-language pages.',
    results: ['+64% direct bookings', '1.9s average load time', '4.9/5 guest feedback on site ease'],
  },
  {
    slug: 'kopi-kita',
    title: 'Kopi Kita Café',
    category: 'Branding',
    client: 'Kopi Kita (sample)',
    year: '2025',
    image: portfolioCafe,
    imageAlt: 'Cozy wooden tropical cafe interior for Kopi Kita branding project',
    summary:
      'Complete brand identity for a Canggu café — logo, packaging, menus, signage and a warm visual language inspired by Balinese craft.',
    results: ['Full identity in 4 weeks', '38 branded touchpoints', 'Featured in 2 local guides'],
  },
  {
    slug: 'shala-yoga',
    title: 'Shala Yoga Retreat',
    category: 'Web Design',
    client: 'Shala Yoga (sample)',
    year: '2024',
    image: portfolioYoga,
    imageAlt: 'Outdoor yoga retreat in Bali for Shala Yoga website project',
    summary:
      'Serene one-page-plus booking site for a yoga retreat center, with class schedules, teacher profiles and retreat packages.',
    results: ['+41% retreat inquiries', 'Online schedule sync', 'Bilingual EN/ID pages'],
  },
  {
    slug: 'bambu-restaurant',
    title: 'Bambu Restaurant',
    category: 'Branding',
    client: 'Bambu (sample)',
    year: '2024',
    image: portfolioRestaurant,
    imageAlt: 'Modern tropical restaurant interior with rattan for Bambu rebrand project',
    summary:
      'Rebrand for a farm-to-table restaurant: new logo, menu system, staff uniforms graphics and launch campaign visuals.',
    results: ['Rebrand rolled out in 6 weeks', 'Menu redesign + QR system', '+28% Instagram followers'],
  },
  {
    slug: 'the-slow-hotel',
    title: 'The Slow Hotel',
    category: 'Photography',
    client: 'The Slow (sample)',
    year: '2025',
    image: portfolioHotel,
    imageAlt: 'Boutique hotel interior photography for The Slow Hotel project',
    summary:
      'Two-day interior and lifestyle shoot producing 120+ edited images for the hotel website, OTA listings and press kit.',
    results: ['120+ edited photos', 'Drone pool & aerial shots', 'Press kit delivered'],
  },
  {
    slug: 'island-boutique',
    title: 'Island Boutique',
    category: 'Photography',
    client: 'Island Boutique (sample)',
    year: '2024',
    image: portfolioCafe,
    imageAlt: 'Tropical boutique interior product photography for Island Boutique project',
    summary:
      'Product and lifestyle photography for a resort-wear boutique — lookbook, e-commerce packshots and campaign imagery.',
    results: ['85 product shots', 'Lookbook design', 'Campaign video reel'],
  },
]

export interface Testimonial {
  name: string
  role: string
  quote: string
  avatar: string
  avatarAlt: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sarah Mitchell',
    role: 'Owner, Cliffside Villas (sample)',
    quote:
      'Our old site looked tired and bookings came mostly through agents. The new website paid for itself within two months — direct bookings are up and guests keep complimenting how easy it is to use.',
    avatar: avatar1,
    avatarAlt: 'Portrait of Sarah Mitchell',
  },
  {
    name: 'Dewi Anggraini',
    role: 'Founder, Shala Yoga (sample)',
    quote:
      'They understood the calm feeling we wanted before we could even describe it. The retreat bookings page alone has doubled our inquiries. Working with a local Bali team made everything so smooth.',
    avatar: avatar2,
    avatarAlt: 'Portrait of Dewi Anggraini',
  },
  {
    name: 'James Carter',
    role: 'Manager, Bambu Restaurant (sample)',
    quote:
      'From logo to menus to the website, everything finally feels like one brand. Our Instagram looks incredible and customers mention the new menus all the time.',
    avatar: avatar3,
    avatarAlt: 'Portrait of James Carter',
  },
]

export const TEAM = [
  {
    name: 'Made Wirawan',
    role: 'Founder & Design Lead',
    bio: '8 years designing for Bali hospitality brands. Leads every project personally.',
    initials: 'MW',
  },
  {
    name: 'Ayu Lestari',
    role: 'Brand Strategist',
    bio: 'Turns business goals into visual stories. Previously with a Jakarta agency.',
    initials: 'AL',
  },
  {
    name: 'Tom Becker',
    role: 'Lead Photographer',
    bio: 'Shoots hotels, food and people across the island. Drone licensed.',
    initials: 'TB',
  },
]

export const STATS = [
  { value: '120+', label: 'Projects delivered' },
  { value: '8', label: 'Years in Bali' },
  { value: '98%', label: 'Client satisfaction' },
  { value: '12', label: 'Design awards' },
]

export const PROCESS = [
  {
    step: '01',
    title: 'Discover',
    text: 'We learn your business, goals and audience in a free consultation — in person in Bali or over video call.',
  },
  {
    step: '02',
    title: 'Design',
    text: 'You review 2–3 homepage concepts, then we refine your favorite into the full site design.',
  },
  {
    step: '03',
    title: 'Develop',
    text: 'We build every page responsively, add your content, forms, maps and social integrations.',
  },
  {
    step: '04',
    title: 'Launch',
    text: 'Testing on mobile, tablet and desktop, basic SEO setup, then we connect your domain and go live.',
  },
]

export const PACKAGES = [
  {
    name: 'Starter',
    price: '$490',
    note: 'Perfect for new businesses',
    features: ['5-page website', 'Mobile responsive', 'Contact form', 'Google Maps embed', 'Basic SEO setup', '1 revision round'],
    cta: 'Choose Starter',
    featured: false,
  },
  {
    name: 'Business',
    price: '$1,190',
    note: 'Our most popular package',
    features: [
      '10-page website',
      'Everything in Starter',
      'Blog / news section',
      'Social media integration',
      'Photo gallery',
      '2 revision rounds',
      '30 days post-launch support',
    ],
    cta: 'Choose Business',
    featured: true,
  },
  {
    name: 'Premium',
    price: '$2,490',
    note: 'For brands that want it all',
    features: [
      '20-page website or online store',
      'Everything in Business',
      'Branding mini-kit (logo refresh)',
      'Half-day photo shoot',
      'Advanced SEO setup',
      '3 revision rounds',
      '90 days priority support',
    ],
    cta: 'Choose Premium',
    featured: false,
  },
]

export const FAQS = [
  {
    q: 'How long does a typical website take?',
    a: 'A standard 5–10 page business website takes 2–4 weeks from approved content. Larger sites and online stores take 4–8 weeks. We give you a clear timeline before we start.',
  },
  {
    q: 'Do you work on Wix or Squarespace?',
    a: 'Yes. We build on Wix and Squarespace when you want to manage the site yourself, and we also do fully custom builds. We will recommend the best fit during the free consultation.',
  },
  {
    q: 'Will my website work on phones and tablets?',
    a: 'Absolutely. Every site we build is fully responsive — we test on mobile, tablet and desktop before launch, since most of your visitors will come from phones.',
  },
  {
    q: 'Can I update the website myself after launch?',
    a: 'Yes. We provide a recorded training session and a simple manual, and every package includes post-launch support while you get comfortable.',
  },
  {
    q: 'Do you write the content and provide photos?',
    a: 'We polish and structure the text you provide, and we offer copywriting and professional photography as add-ons — many Bali clients bundle a half-day shoot with their website.',
  },
  {
    q: 'What are the ongoing costs?',
    a: 'Just your platform subscription (e.g. Wix/Squarespace plan) and domain renewal — typically under $30/month total. No hidden fees from us.',
  },
]

export const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Contact Us' },
]
