import { site } from "@/lib/site"

const links = [
  { href: "#work", label: "Work" },
  { href: "#rates", label: "Rates" },
  { href: "#contact", label: "Contact" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-baseline justify-between gap-6 px-6 py-5 sm:px-10">
        <a
          href="#top"
          className="font-display text-xl leading-none tracking-tight transition-opacity hover:opacity-70"
        >
          {site.name}
        </a>

        <nav aria-label="Sections">
          <ul className="flex items-baseline gap-5 sm:gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[11px] tracking-[0.18em] text-muted-foreground uppercase transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
