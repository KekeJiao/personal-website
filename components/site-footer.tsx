import { site } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="mx-auto mt-24 max-w-6xl px-6 pb-10 sm:mt-32 sm:px-10">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3 border-t border-border pt-6 text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p className="order-3 sm:order-2">Made in Shanghai</p>
        <a
          href="#top"
          className="order-2 transition-colors hover:text-foreground sm:order-3"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
