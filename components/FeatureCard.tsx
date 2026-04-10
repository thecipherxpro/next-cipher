import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export type FeatureCardLayout = "left-content" | "right-content" | "top-content"

/** Lexend demo asset — image + shell scrims only (no decorative “cards” in the media area). */
export const LEXEND_FEATURE_IMAGE_SRC =
  "https://lexend-nuxt.vercel.app/_nuxt/home-11-feature-01.BZxjhK4W.png"

export interface FeatureCardProps {
  title: string
  description: string
  primaryCta: { text: string; href: string }
  secondaryCta?: { text: string; href: string }
  badges?: string[]
  layout?: FeatureCardLayout
  /** Defaults to Lexend reference image when omitted and `image` is not set */
  heroImage?: { src: string; alt: string; priority?: boolean; width?: number; height?: number }
  /** Custom media slot (replaces hero image) */
  image?: ReactNode
  className?: string
  contentClassName?: string
  imageClassName?: string
  /** Merged onto the inner `relative grid` row (e.g. fixed sm height). */
  innerGridClassName?: string
  /** Merged onto the hero `<figure>` after defaults (e.g. override sm height). */
  imageFigureClassName?: string
  /** Merged onto `div.feature-item-image` (overrides default sm max-height when set last). */
  imageShellClassName?: string
  /** Merged onto the `absolute inset-0` wrapper around the hero (e.g. inset padding for `object-contain`). */
  imageMediaClassName?: string
  /** Extra classes on the default `next/image` hero (e.g. `object-contain`). */
  heroImageClassName?: string
  /**
   * Bento half-cell: image left / content right, fixed image height (sm+), Lexend edge scrims.
   * Matches `feature-item` row with image-first order and bottom/top gradient on media.
   */
  bentoSplit?: boolean
}

export default function FeatureCard({
  title,
  description,
  primaryCta,
  secondaryCta,
  badges,
  layout = "left-content",
  heroImage,
  image,
  className = "",
  contentClassName = "",
  imageClassName = "",
  innerGridClassName,
  imageFigureClassName,
  imageShellClassName,
  imageMediaClassName,
  heroImageClassName,
  bentoSplit = false,
}: FeatureCardProps) {
  const isImageLeft = layout === "right-content" || bentoSplit

  const resolvedHero = heroImage ?? {
    src: LEXEND_FEATURE_IMAGE_SRC,
    alt: "",
    priority: false,
  }

  const heroSizes = "(max-width: 640px) 100vw, 50vw"
  const heroIntrinsic =
    Boolean(resolvedHero.width && resolvedHero.height) && !image

  const visual =
    image ??
    (heroIntrinsic ? (
      <div className="flex h-full min-h-0 w-full items-center justify-center">
        <Image
          src={resolvedHero.src}
          alt={resolvedHero.alt || title}
          width={resolvedHero.width!}
          height={resolvedHero.height!}
          sizes={heroSizes}
          className={cn(
            "h-auto max-h-full w-auto max-w-full object-contain object-center",
            heroImageClassName,
          )}
          priority={resolvedHero.priority}
        />
      </div>
    ) : (
      <Image
        src={resolvedHero.src}
        alt={resolvedHero.alt || title}
        fill
        sizes={heroSizes}
        className={cn("object-cover", heroImageClassName)}
        priority={resolvedHero.priority}
      />
    ))

  const contentCol = (
    <div
      className={cn(
        "min-h-0",
        isImageLeft ? "sm:order-2" : "sm:order-1",
        bentoSplit ? "order-1 sm:order-2" : "order-1",
      )}
    >
      <div
        className={cn(
          "feature-item-content panel relative z-[2] flex min-h-0 flex-col justify-between gap-3 px-2 py-3 sm:gap-3 sm:px-3 sm:py-2.5 xl:px-4 xl:py-3",
          contentClassName,
        )}
      >
        <div className="flex flex-col gap-1 sm:gap-2">
          <h3 className="m-0 text-xl font-semibold leading-snug tracking-tight text-inherit sm:text-2xl xl:text-3xl">
            {title}
          </h3>
          <p className="max-w-[34rem] text-sm leading-relaxed text-muted-foreground xl:text-base">
            {description}
          </p>
          {badges && badges.length > 0 && (
            <ul className="flex flex-wrap gap-2 pt-2">
              {badges.map((b) => (
                <li
                  key={b}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-background/50 px-3 py-1.5 text-xs font-medium text-muted-foreground"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden />
                  {b}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex flex-row flex-wrap items-center gap-3 pt-3 sm:pt-2.5">
          <Link
            href={primaryCta.href}
            className="inline-flex w-fit items-center gap-2 rounded-full border-0 bg-gradient-to-r from-primary to-tertiary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 active:scale-[0.98] dark:hover:opacity-80 xl:px-6 xl:py-3 xl:text-[15px]"
          >
            {primaryCta.text}
            <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2.25} aria-hidden />
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="inline-flex h-[46px] w-fit items-center gap-2 rounded-xl border border-border bg-background/60 px-4 text-sm font-semibold text-card-foreground transition hover:bg-background/90"
            >
              {secondaryCta.text}
            </Link>
          )}
        </div>
      </div>
    </div>
  )

  const imageCol = (
    <div
      className={cn(
        "min-h-0",
        isImageLeft ? "sm:order-1" : "sm:order-2",
        bentoSplit ? "order-2 sm:order-1" : "order-2",
        imageClassName,
      )}
    >
      <div
        className={cn(
          "feature-item-image panel relative w-full",
          bentoSplit && "sm:h-[450px]",
          !bentoSplit && "sm:max-h-[391px] sm:self-start",
          imageShellClassName,
        )}
      >
        <figure
          className={cn(
            "relative m-0 w-full overflow-hidden",
            bentoSplit
              ? "aspect-[4/3] max-h-[min(100vw,320px)] sm:aspect-auto sm:h-full sm:max-h-none"
              : "aspect-[4/3] max-h-[min(92vw,320px)] sm:aspect-auto sm:h-[391px] sm:max-h-[391px] sm:min-h-0",
            imageFigureClassName,
          )}
        >
          <div className={cn("absolute inset-0", imageMediaClassName)}>{visual}</div>
        </figure>
      </div>
    </div>
  )

  const defaultScrims = !bentoSplit && (
    <>
      <div
        className="pointer-events-none absolute left-0 top-0 z-[1] hidden h-full w-1/2 bg-gradient-to-r from-secondary via-card/90 to-transparent sm:block"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-0 top-0 z-[1] block h-1/2 w-full bg-gradient-to-b from-secondary via-card/90 to-transparent sm:hidden"
        aria-hidden
      />
    </>
  )

  const splitScrims = bentoSplit && (
    <>
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-[1] hidden h-1/2 bg-gradient-to-t from-secondary to-transparent dark:from-muted dark:to-transparent sm:block"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 z-[1] block h-1/2 bg-gradient-to-b from-secondary to-transparent dark:from-muted dark:to-transparent sm:hidden"
        aria-hidden
      />
    </>
  )

  return (
    <article
      className={cn(
        "feature-item panel relative w-full max-w-full overflow-hidden rounded-2xl border border-border bg-card text-card-foreground",
        "sm:rounded-3xl xl:rounded-[2rem]",
        className,
      )}
    >
      <div
        className={cn(
          "relative grid min-h-0 grid-cols-1 sm:grid-cols-2 sm:grid-rows-1 sm:px-[23px] sm:py-0",
          bentoSplit ? "items-stretch gap-2" : "items-start gap-0",
          innerGridClassName,
        )}
      >
        {defaultScrims}
        {splitScrims}
        {contentCol}
        {imageCol}
      </div>
    </article>
  )
}
