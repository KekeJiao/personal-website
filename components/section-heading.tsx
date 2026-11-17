import type { ReactNode } from "react"

type SectionHeadingProps = {
  index: string
  label: string
  meta?: string
  children: ReactNode
  id?: string
}

/**
 * The editorial rule that opens every section: a hairline, a number, a label,
 * and then the one sentence that carries the section.
 */
export function SectionHeading({
  index,
  label,
  meta,
  children,
  id,
}: SectionHeadingProps) {
  return (
    <div id={id} className="scroll-mt-24">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-t border-border pt-4">
        <p className="text-[11px] tracking-[0.22em] text-muted-foreground uppercase">
          <span className="tabular-nums">{index}</span>
          <span aria-hidden className="px-3 text-border">
            /
          </span>
          {label}
        </p>
        {meta ? (
          <p className="text-[11px] tracking-[0.22em] text-muted-foreground uppercase">
            {meta}
          </p>
        ) : null}
      </div>
      <h2 className="mt-8 max-w-3xl font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl">
        {children}
      </h2>
    </div>
  )
}
