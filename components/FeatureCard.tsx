import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export type FeatureCardLayout = "left-content" | "right-content" | "top-content"

/** Lexend demo asset — image + shell scrims only (no decorative "cards" in the media area). */
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
  /** Merged onto the inner wrapper row. */
  innerGridClassName?: string
  /** Merged onto the hero `<figure>` after defaults. */
  imageFigureClassName?: string
  /** Merged onto `div.feature-item-image`. */
  imageShellClassName?: string
  /** Merged onto the `absolute inset-0` wrapper around the hero. */
  imageMediaClassName?: string
  /** Extra classes on the default `next/image` hero. */
  heroImageClassName?: string
  /**
   * Bento half-cell: image left / content right, fixed image height (sm+), Lexend edge scrims.
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
  const heroIntrinsic = Boolean(resolvedHero.width && resolvedHero.height) && !image

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

  /* ── Content column ────────────────────────────────────────────────── */
  const contentCol = (
    <div
      className={cn(
        "flex min-h-0 flex-col",
        bentoSplit
          ? "order-1 justify-center p-6 sm:order-2 sm:p-8"
          : "order-1 p-6 sm:p-8 xl:p-10",
        isImageLeft ? "sm:order-2" : "sm:order-1",
        contentClassName,
      )}
    >
      {/* Text block */}
      <div className="flex flex-col gap-2 sm:gap-3">
        <h3 className="text-xl font-semibold leading-snug tracking-tight text-card-foreground sm:text-2xl xl:text-3xl">
          {title}
        </h3>
        <p className="max-w-[34rem] text-sm leading-relaxed text-muted-foreground sm:text-base">
          {description}
        </p>
        {badges && badges.length > 0 && (
          <ul className="flex flex-wrap gap-2 pt-1">
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

      {/* CTA row — consistent height & font across both buttons */}
      <div className="mt-6 flex flex-row flex-wrap items-center gap-3">
        <Link
          href={primaryCta.href}
          className="inline-flex h-11 items-center gap-2 rounded-full bg-gradient-to-r from-primary to-tertiary px-5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 active:scale-[0.98] xl:px-6 xl:text-[15px]"
        >
          {primaryCta.text}
          <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2.25} aria-hidden />
        </Link>
        {secondaryCta && (
          <Link
            href={secondaryCta.href}
            className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-background/60 px-5 text-sm font-semibold text-card-foreground transition hover:bg-background/90 xl:px-6 xl:text-[15px]"
          >
            {secondaryCta.text}
          </Link>
        )}
      </div>
    </div>
  )

  /* ── Image column ──────────────────────────────────────────────────── */
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
          "feature-item-image relative w-full",
          bentoSplit ? "h-52 sm:h-full" : "h-52 sm:h-full",
          imageShellClassName,
        )}
      >
        <figure
          className={cn(
            "relative m-0 h-full w-full overflow-hidden",
            !bentoSplit && "sm:rounded-r-3xl xl:rounded-r-[2rem]",
            imageFigureClassName,
          )}
        >
          <div className={cn("absolute inset-0", imageMediaClassName)}>{visual}</div>
        </figure>
      </div>
    </div>
  )

  /* ── Scrims ────────────────────────────────────────────────────────── */
  const defaultScrims = !bentoSplit && (
    <>
      <div
        className="pointer-events-none absolute left-0 top-0 z-[1] hidden h-full w-1/2 bg-gradient-to-r from-card via-card/80 to-transparent sm:block"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-0 top-0 z-[1] block h-2/3 w-full bg-gradient-to-b from-card via-card/80 to-transparent sm:hidden"
        aria-hidden
      />
    </>
  )

  const splitScrims = bentoSplit && (
    <>
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-[1] hidden h-1/3 bg-gradient-to-t from-card to-transparent sm:block"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 z-[1] block h-1/3 bg-gradient-to-b from-card to-transparent sm:hidden"
        aria-hidden
      />
    </>
  )

  /* ── Wide (horizontal) card layout ────────────────────────────────── */
  if (!bentoSplit) {
    return (
      <article
        className={cn(
          "feature-item relative w-full overflow-hidden rounded-2xl border border-border bg-card text-card-foreground",
          "sm:rounded-3xl xl:rounded-[2rem]",
          className,
        )}
      >
        <div
          className={cn(
            "relative grid min-h-0 grid-cols-1 sm:grid-cols-2 sm:grid-rows-1",
            "items-center",
            innerGridClassName,
          )}
        >
          {defaultScrims}
          {contentCol}
          {imageCol}
        </div>
      </article>
    )
  }

  /* ── Half / bentoSplit (vertical) card layout ──────────────────────── */
  return (
    <article
      className={cn(
        "feature-item relative w-full overflow-hidden rounded-2xl border border-border bg-card text-card-foreground",
        "sm:rounded-3xl xl:rounded-[2rem]",
        className,
      )}
    >
      <div
        className={cn(
          "relative flex min-h-0 flex-col",
          innerGridClassName,
        )}
      >
        {splitScrims}
        {/* Image on top for vertical cards */}
        <div className="relative h-52 w-full shrink-0 sm:h-60 xl:h-72">
          <figure
            className={cn(
              "relative m-0 h-full w-full overflow-hidden",
              imageFigureClassName,
            )}
          >
            <div className={cn("absolute inset-0", imageMediaClassName)}>{visual}</div>
          </figure>
        </div>
        {/* Content below */}
        <div
          className={cn(
            "flex flex-col gap-3 p-6 sm:p-7 xl:p-8",
            contentClassName,
          )}
        >
          <div className="flex flex-col gap-2 sm:gap-3">
            <h3 className="text-xl font-semibold leading-snug tracking-tight text-card-foreground sm:text-2xl xl:text-3xl">
              {title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              {description}
            </p>
            {badges && badges.length > 0 && (
              <ul className="flex flex-wrap gap-2 pt-1">
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

          {/* Consistent CTA row */}
          <div className="mt-2 flex flex-row flex-wrap items-center gap-3">
            <Link
              href={primaryCta.href}
              className="inline-flex h-11 items-center gap-2 rounded-full bg-gradient-to-r from-primary to-tertiary px-5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 active:scale-[0.98] xl:px-6 xl:text-[15px]"
            >
              {primaryCta.text}
              <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2.25} aria-hidden />
            </Link>
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-background/60 px-5 text-sm font-semibold text-card-foreground transition hover:bg-background/90 xl:px-6 xl:text-[15px]"
              >
                {secondaryCta.text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
