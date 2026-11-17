import { SectionHeading } from "@/components/section-heading"
import { rateNotes, rates, site } from "@/lib/site"

const enquiryHref = (subject: string) =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}`

export function Rates() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-24 sm:px-10 sm:pt-32">
      <SectionHeading
        id="rates"
        index="02"
        label="Rates"
        meta="Quoted in full before we start"
      >
        Three ways to work together.
      </SectionHeading>

      <p className="mt-6 max-w-2xl text-[15px] leading-7 text-muted-foreground">
        Every commission is quoted in full before we begin, with no add-ons
        arriving afterwards. If your day does not fit neatly into one of these,
        say so — most of my work is arranged over email first.
      </p>

      <ul className="mt-14 grid gap-x-8 gap-y-12 sm:mt-16 sm:grid-cols-3">
        {rates.map((rate) => (
          <li
            key={rate.name}
            className="flex flex-col border-t border-border pt-6"
          >
            <h3 className="font-display text-2xl leading-tight tracking-tight">
              {rate.name}
            </h3>
            <p className="mt-2 text-[13px] text-muted-foreground">
              {rate.duration}
            </p>

            <p className="mt-6 font-display text-3xl tracking-tight">
              {rate.price}
            </p>

            <ul className="mt-6 space-y-2.5 text-[13px] leading-6 text-muted-foreground">
              {rate.includes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden className="text-border">
                    —
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href={enquiryHref(`${rate.enquirySubject} enquiry`)}
              className="mt-8 inline-flex w-fit items-baseline gap-2 border-b border-foreground/25 pb-1 text-sm transition-colors hover:border-foreground"
            >
              Enquire
              <span aria-hidden className="text-muted-foreground">
                →
              </span>
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-16 border-t border-border pt-5">
        <ul className="max-w-3xl space-y-1.5 text-[13px] leading-6 text-muted-foreground">
          {rateNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
