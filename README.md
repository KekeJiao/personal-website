# Alex Rivera — portfolio

A single-page photography portfolio: an introduction, a curated edit of work, rates, and a contact
link that is hard to miss. Built as a static Next.js app (no database, no CMS), so it deploys
anywhere that can serve Node or static output.

## Stack

- **Next.js 16** (App Router, Turbopack) + React 19, TypeScript
- **Tailwind CSS 4** with the shadcn `base-lyra` preset (`components.json`)
- **next/font**: Instrument Serif for display type, Inter for text — both self-hosted at build time
- **next/image** with remote patterns for Unsplash placeholders

The interface is deliberately two-tone: warm paper and ink, so the photographs carry the colour.
Dark mode follows the operating system (`next-themes`); the template hotkey `d` still toggles it.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
npm run typecheck
```

## Where to edit

| What                                                  | Where                                                      |
| ----------------------------------------------------- | ---------------------------------------------------------- |
| Name, email, location, availability, intro copy       | `lib/site.ts`                                              |
| Hero photograph and portrait                          | `lib/site.ts` (`heroPhoto`, `portraitPhoto`)               |
| Work gallery: image, title, series, year, layout span | `lib/site.ts` (`work`)                                     |
| Pricing tiers and the fine print under them           | `lib/site.ts` (`rates`, `rateNotes`)                       |
| Section copy and layout                               | `components/sections/*`                                    |
| Header, footer                                        | `components/site-header.tsx`, `components/site-footer.tsx` |
| Colours, type scale, spacing defaults                 | `app/globals.css`                                          |
| Metadata, Open Graph, canonical URL                   | `app/layout.tsx`                                           |
| Sitemap and robots rules                              | `app/sitemap.ts`, `app/robots.ts`                          |

All photographs in `lib/site.ts` are placeholders. `PLACEHOLDERS.md` lists every frame and what to
shoot for it.

## Deploying

The build is fully static except for image optimisation. On Vercel it works with no configuration.
On another host, run `npm run build && npm run start`, or add `output: "export"` in `next.config.ts`
if you accept unoptimised images and switch the image URLs to local files.

Set `NEXT_PUBLIC_SITE_URL` to the production origin (for example `https://example.com`) so the
canonical link, Open Graph URLs and sitemap point at the real domain. Without it the fallback in
`lib/site.ts` is used.
