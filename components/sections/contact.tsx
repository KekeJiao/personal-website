import { SectionHeading } from "@/components/section-heading"
import { site } from "@/lib/site"

export function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-24 sm:px-10 sm:pt-32">
      <SectionHeading
        id="contact"
        index="03"
        label="Contact"
        meta="Replies within two working days"
      >
        Have something in mind?
      </SectionHeading>

      <p className="mt-6 max-w-2xl text-[15px] leading-7 text-muted-foreground">
        Tell me the date, the place, and the kind of photographs you want. A few
        lines are enough to start — I will come back with availability, a full
        quote, and a couple of questions.
      </p>

      <div className="mt-10">
        <a
          href={`mailto:${site.email}`}
          className="group inline-flex max-w-full flex-wrap items-baseline gap-x-4 gap-y-2 border-b border-foreground/25 pb-3 font-display text-3xl leading-none tracking-tight transition-colors hover:border-foreground sm:text-5xl"
        >
          <span className="break-all">{site.email}</span>
          <span
            aria-hidden
            className="text-xl text-muted-foreground transition-transform group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 sm:text-2xl"
          >
            →
          </span>
        </a>
      </div>

      <dl className="mt-14 grid gap-x-8 gap-y-8 border-t border-border pt-6 text-[13px] leading-6 sm:grid-cols-3">
        <div>
          <dt className="text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
            Based in
          </dt>
          <dd className="mt-2">{site.location}</dd>
        </div>
        <div>
          <dt className="text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
            Travel
          </dt>
          <dd className="mt-2">
            Available across China and Asia, with notice.
          </dd>
        </div>
        <div>
          <dt className="text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
            Elsewhere
          </dt>
          <dd className="mt-2 flex gap-4">
            {site.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
                rel="noreferrer noopener"
                target="_blank"
              >
                {social.label}
              </a>
            ))}
          </dd>
        </div>
      </dl>
    </section>
  )
}
