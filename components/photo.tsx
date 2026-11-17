import Image from "next/image"

import { cn } from "@/lib/utils"

const ratios = {
  portrait: "aspect-[4/5]",
  landscape: "aspect-[3/2]",
  square: "aspect-square",
  wide: "aspect-[16/9]",
} as const

export type PhotoRatio = keyof typeof ratios

type PhotoProps = {
  src: string
  alt: string
  ratio: PhotoRatio
  sizes?: string
  priority?: boolean
  className?: string
}

/**
 * A single photographic frame. The wrapper owns the aspect ratio so the grid
 * stays calm while the image is still loading; `object-cover` keeps the crop
 * sensible across breakpoints.
 */
export function Photo({
  src,
  alt,
  ratio,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  className,
}: PhotoProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-muted",
        ratios[ratio],
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />
    </div>
  )
}
