import { Photo } from "@/components/photo"
import { SectionHeading } from "@/components/section-heading"
import { work } from "@/lib/site"
import { cn } from "@/lib/utils"

export function Work() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-24 sm:px-10 sm:pt-32">
      <SectionHeading
        id="work"
        index="01"
        label="Selected work"
        meta="2019 — 2026"
      >
        A small edit, kept short on purpose.
      </SectionHeading>

      <div className="mt-14 grid gap-x-8 gap-y-16 sm:mt-16 sm:grid-cols-12">
        {work.map((item) => (
          <figure
            key={item.title}
            className={cn("group", item.span, item.offset)}
          >
            <Photo
              src={item.src}
              alt={item.alt}
              ratio={item.ratio}
              sizes="(min-width: 640px) 45vw, 90vw"
            />
            <figcaption className="mt-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-border pt-3">
              <span className="font-display text-lg leading-none">
                {item.title}
              </span>
              <span className="text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
                {item.series} · {item.year}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
