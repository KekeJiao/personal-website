import { Photo } from "@/components/photo"
import { heroPhoto, portraitPhoto, site } from "@/lib/site"

export function Intro() {
  return (
    <section
      id="top"
      className="mx-auto max-w-6xl px-6 pt-14 sm:px-10 sm:pt-20"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-border pb-5">
        <p className="text-[11px] tracking-[0.22em] text-muted-foreground uppercase">
          {site.role} — {site.location}
        </p>
        <p className="text-[11px] tracking-[0.22em] text-muted-foreground uppercase">
          {site.availability}
        </p>
      </div>

      <h1 className="mt-10 max-w-4xl font-display text-[2.6rem] leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
        I make quiet photographs of people, places, and the{" "}
        <em className="italic">space</em> between them.
      </h1>

      <figure className="mt-12 sm:mt-16">
        <Photo
          src={heroPhoto.src}
          alt={heroPhoto.alt}
          ratio="wide"
          priority
          sizes="(min-width: 1200px) 1120px, 100vw"
        />
        <figcaption className="mt-3 flex flex-wrap items-baseline justify-between gap-2 text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
          <span>{heroPhoto.caption}</span>
          <span>35mm, available light</span>
        </figcaption>
      </figure>

      <div className="mt-14 grid gap-12 sm:mt-16 sm:grid-cols-12 sm:gap-8">
        <div className="sm:col-span-7 lg:col-span-6">
          <p className="max-w-prose text-[15px] leading-7 text-muted-foreground">
            I&apos;m Alex, a photographer based in Shanghai. I work with
            couples, families and small studios — weddings, portraits and
            editorial commissions, shot slowly and edited by hand over the week
            that follows.
          </p>
          <p className="mt-5 max-w-prose text-[15px] leading-7 text-muted-foreground">
            Most of what I care about happens between the posed frames: a hand
            on a shoulder, a room before the guests arrive. I would rather spend
            the first hour hearing how a day should feel than setting up lights.
          </p>

          <a
            href="#work"
            className="mt-8 inline-flex items-baseline gap-2 border-b border-foreground/25 pb-1 text-sm transition-colors hover:border-foreground"
          >
            See the work
            <span aria-hidden className="text-muted-foreground">
              ↓
            </span>
          </a>
        </div>

        <div className="sm:col-span-5 sm:justify-self-end">
          <figure className="group w-full max-w-xs sm:max-w-sm">
            <Photo
              src={portraitPhoto.src}
              alt={portraitPhoto.alt}
              ratio="portrait"
              sizes="(min-width: 640px) 380px, 90vw"
            />
            <figcaption className="mt-3 text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
              {portraitPhoto.caption}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
