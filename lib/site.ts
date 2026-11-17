/**
 * Everything that changes from time to time lives here.
 * Text, photographs, prices and links are all editable without touching a component.
 *
 * Photographs are placeholders (Unsplash) — see PLACEHOLDERS.md for the swap list.
 */

export const site = {
  name: "Keke Jiao",
  role: "Photographer",
  location: "Shanghai, China",
  // Placeholder address — replace with the inbox you actually read.
  email: "hello@kekejiao.com",
  // Used for canonical URLs, Open Graph tags and the sitemap.
  // Set NEXT_PUBLIC_SITE_URL in production, or edit the fallback below.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kekejiao.com",
  availability: "Booking spring — autumn 2026",
  intro:
    "I make quiet photographs of people, places, and the space between them. Weddings, portraits and small editorial commissions, shot slowly and edited by hand.",
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "小红书", href: "https://www.xiaohongshu.com" },
  ],
} as const

const unsplash = (id: string, width: number, height: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&h=${height}&q=80`

/** Hero frame, directly under the headline. */
export const heroPhoto = {
  src: unsplash("photo-1470071459604-3b5ec3a7fe05", 2000, 1125),
  alt: "Low fog moving through a ridge of pine trees at first light",
  caption: "First light, Huangshan — 2025",
}

/** Small portrait beside the introduction. */
export const portraitPhoto = {
  src: unsplash("photo-1524504388940-b1c1722653e1", 900, 1125),
  alt: "Portrait of a woman in soft window light, looking slightly away from the camera",
  caption: "Studio window, Shanghai — 2025",
}

export type WorkItem = {
  title: string
  series: string
  year: string
  src: string
  alt: string
  /** Tailwind aspect class for the frame. */
  ratio: "portrait" | "landscape" | "square" | "wide"
  /** Column span on the twelve-column work grid (sm and up). */
  span: string
  /** Optional vertical offset that keeps the edit from feeling like a spreadsheet. */
  offset?: string
}

export const work: WorkItem[] = [
  {
    title: "Before the vows",
    series: "Wedding",
    year: "2026",
    src: unsplash("photo-1519741497674-611481863552", 1200, 1500),
    alt: "Bride and groom standing close together in a doorway, hands held",
    ratio: "portrait",
    span: "sm:col-span-5",
  },
  {
    title: "Six forty in the evening",
    series: "Portrait",
    year: "2025",
    src: unsplash("photo-1494790108377-be9c29b29330", 1600, 1067),
    alt: "Portrait of a woman smiling in late afternoon light",
    ratio: "landscape",
    span: "sm:col-span-7",
    offset: "sm:mt-16",
  },
  {
    title: "Salt",
    series: "Editorial",
    year: "2025",
    src: unsplash("photo-1483985988355-763728e1935b", 1600, 1067),
    alt: "Two figures walking past a white wall in strong daylight",
    ratio: "landscape",
    span: "sm:col-span-7",
  },
  {
    title: "Her mother's garden",
    series: "Wedding",
    year: "2025",
    src: unsplash("photo-1511285560929-80b456fea0bc", 1200, 1500),
    alt: "Couple embracing outdoors with soft greenery behind them",
    ratio: "portrait",
    span: "sm:col-span-5",
    offset: "sm:-mt-12",
  },
  {
    title: "Studio, Tuesday",
    series: "Portrait",
    year: "2026",
    src: unsplash("photo-1507003211169-0a1dd7228f2d", 1200, 1200),
    alt: "Portrait of a man against a neutral backdrop, looking off camera",
    ratio: "square",
    span: "sm:col-span-6",
  },
  {
    title: "The long way home",
    series: "Personal",
    year: "2024",
    src: unsplash("photo-1500530855697-b586d89ba3ee", 1400, 1050),
    alt: "Empty road curving through dry hills at dusk",
    ratio: "landscape",
    span: "sm:col-span-6",
    offset: "sm:mt-16",
  },
]

export type Rate = {
  name: string
  duration: string
  price: string
  includes: string[]
  enquirySubject: string
}

export const rates: Rate[] = [
  {
    name: "Portrait session",
    duration: "Up to two hours, one location",
    price: "from ¥2,800",
    includes: [
      "35–45 edited frames",
      "Private online gallery",
      "Full-resolution downloads",
      "Print release for personal use",
    ],
    enquirySubject: "Portrait session",
  },
  {
    name: "Wedding day",
    duration: "Up to ten hours of coverage",
    price: "from ¥12,000",
    includes: [
      "600+ edited frames",
      "Second photographer on request",
      "Engagement session included",
      "A printed album of thirty spreads",
    ],
    enquirySubject: "Wedding day",
  },
  {
    name: "Editorial & brand",
    duration: "One production day",
    price: "from ¥6,500",
    includes: [
      "Treatment call before the shoot",
      "One year of web and social licensing",
      "Retouching to your brand spec",
      "Additional days at ¥5,000",
    ],
    enquirySubject: "Editorial and brand work",
  },
]

export const rateNotes = [
  "Travel outside Shanghai is charged at cost.",
  "A 30% deposit holds the date; the balance is due seven days after delivery.",
  "Rush delivery and extended licensing are quoted separately.",
]
