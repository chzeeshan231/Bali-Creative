import {
  Camera,
  Facebook,
  Instagram,
  Linkedin,
  Monitor,
  Music2,
  Palette,
  Share2,
  ShoppingBag,
  TrendingUp,
  Twitter,
  Youtube,
} from 'lucide-react'

const SOCIAL_MAP: Record<string, typeof Instagram> = {
  instagram: Instagram,
  facebook: Facebook,
  twitter: Twitter,
  linkedin: Linkedin,
  youtube: Youtube,
  tiktok: Music2,
}

const SERVICE_ICON_MAP: Record<string, typeof Monitor> = {
  monitor: Monitor,
  palette: Palette,
  camera: Camera,
  'trending-up': TrendingUp,
  'share-2': Share2,
  'shopping-bag': ShoppingBag,
}

export function SocialIcon({ icon, className }: { icon: string; className?: string }) {
  const Cmp = SOCIAL_MAP[icon] ?? Share2
  return <Cmp className={className} aria-hidden="true" />
}

export function ServiceIcon({ icon, className }: { icon: string; className?: string }) {
  const Cmp = SERVICE_ICON_MAP[icon] ?? Monitor
  return <Cmp className={className} aria-hidden="true" />
}
