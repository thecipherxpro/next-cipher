import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export type FeatureCardLayout = "left-content" | "right-content" | "top-content"

export const LEXEND_FEATURE_IMAGE_SRC =
  "https://lexend-nuxt.vercel.app/_nuxt/home-11-feature-01.BZxjhK4W.png"

export interface FeatureCardProps {
  title: string
  description: string
  primaryCta: { text: string; href: string }
  secondaryCta?: { text: string; href: string }
  badges?: string[]
  layout?: FeatureCardLayout
  heroImage?: { src: string; alt: string; priority?: boolean; width?: number; height?: number }
  image?: ReactNode
  className?: string
  contentClassName?: string
  imageClassName?: string
  innerGridClassName?: string
  imageFigureClassName?: string
  imageShellClassName?: string
  imageMediaClassName?: string
  heroImageClassName?: string
  badgesClassName?: string
  ctaRowClassName?: string
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
  badgesClassName,
  ctaRowClassName,
  bentoSplit = false,
}: FeatureCardProps) {
  const isTopContent = layout === "top-content"
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

  /* ── Content column ────────────────────────────────────────────────────── */
  const contentCol = (
    <div
      className={cn(
        "relative z-[3] flex min-h-0 flex-col",
        isTopContent
          ? "order-2"
          : cn(
              isImageLeft ? "sm:order-2" : "sm:order-1",
              bentoSplit ? "order-1 sm:order-2" : "order-1",
            ),
      )}
    >
      <div
        className={cn(
          "feature-item-content relative z-[2] flex h-full min-h-0 flex-col justify-between gap-5 p-6 sm:p-7 xl:p-8",
          contentClassName,
        )}
      >
        {/* Title + description + badges */}
        <div className="flex flex-col gap-3">
          <h3 className="m-0 text-xl font-bold leading-snug tracking-tight text-card-foreground sm:text-2xl xl:text-[1.65rem]">
            {title}
          </h3>
          <p className="max-w-[34rem] text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
            {description}
          </p>

          {badges && badges.length > 0 && (
            <ul
              role="list"
              className={cn(
                "m-0 flex min-w-0 list-none flex-row flex-wrap items-start gap-1.5 p-0 pt-1",
                badgesClassName,
              )}
            >
              {badges.map((b) => (
                <li
                  key={b}
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border/70 bg-background/60 px-3 py-1 text-[11px] font-medium tracking-wide text-muted-foreground sm:text-xs"
                >
                  <CheckCircle2 className="h-3 w-3 shrink-0 text-primary" aria-hidden />
                  {b}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* CTA row */}
        <div
          className={cn(
            "flex flex-col items-start gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3",
            ctaRowClassName,
          )}
        >
          <Link
            href={primaryCta.href}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-tertiary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90 active:scale-[0.98] sm:w-auto sm:min-w-[200px] xl:px-6 xl:py-3 xl:text-[0.9375rem]"
          >
            {primaryCta.text}
            <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2.25} aria-hidden />
          </Link>

          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-background/50 px-5 py-2.5 text-sm font-semibold text-card-foreground transition hover:bg-background/90 active:scale-[0.98] sm:w-auto sm:min-w-[200px] xl:px-6 xl:py-3 xl:text-[0.9375rem]"
            >
              {secondaryCta.text}
            </Link>
          )}
        </div>
      </div>
    </div>
  )

  /* ── Image column ──────────────────────────────────────────────────────── */
  const imageCol = (
    <div
      className={cn(
        "relative z-[2] min-h-0",
        isTopContent
          ? "order-1 w-full"
          : cn(
              isImageLeft ? "sm:order-1" : "sm:order-2",
              bentoSplit ? "order-2 sm:order-1" : "order-2",
            ),
        imageClassName,
      )}
    >
      <div
        className={cn(
          "feature-item-image relative w-full overflow-hidden",
          isTopContent && "w-full",
          !bentoSplit && !isTopContent && "h-full",
          imageShellClassName,
        )}
      >
        <figure
          className={cn(
            "relative m-0 w-full overflow-hidden",
            isTopContent
              ? "aspect-[16/9] max-h-[min(55vw,280px)] sm:aspect-auto sm:h-[320px] sm:max-h-[320px]"
              : bentoSplit
                ? "aspect-[4/3] max-h-[min(100vw,340px)] sm:aspect-auto sm:h-full sm:max-h-none"
                : "h-full min-h-[240px] sm:min-h-0",
            imageFigureClassName,
          )}
        >
          <div className={cn("absolute inset-0 z-[2]", imageMediaClassName)}>
            {visual}
          </div>
        </figure>

        {/* Bottom fade for top-content cards */}
        {isTopContent && (
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-12 bg-gradient-to-t from-card via-card/60 to-transparent sm:h-16"
            aria-hidden
          />
        )}
      </div>
    </div>
  )

  /* ── Scrims ────────────────────────────────────────────────────────────── */
  const defaultScrims = !bentoSplit && !isTopContent && (
    <>
      <div
        className="pointer-events-none absolute left-0 top-0 z-0 hidden h-full w-2/5 bg-gradient-to-r from-card via-card/80 to-transparent sm:block"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-0 top-0 z-0 block h-2/5 w-full bg-gradient-to-b from-card via-card/80 to-transparent sm:hidden"
        aria-hidden
      />
    </>
  )

  const splitScrims = bentoSplit && !isTopContent && (
    <>
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-0 hidden h-1/2 bg-gradient-to-t from-card to-transparent sm:block"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 z-0 block h-1/2 bg-gradient-to-b from-card to-transparent sm:hidden"
        aria-hidden
      />
    </>
  )

  const topContentScrims = isTopContent && (
    <div
      className="pointer-events-none absolute left-0 top-0 z-0 h-2/5 w-full bg-gradient-to-b from-card/60 to-transparent"
      aria-hidden
    />
  )

  return (
    <article
      className={cn(
        "feature-item relative w-full max-w-full overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-sm",
        "sm:rounded-3xl",
        className,
      )}
    >
      <div
        className={cn(
          "relative grid min-h-0 w-full grid-cols-1",
          isTopContent
            ? "items-stretch gap-0"
            : cn(
                "sm:grid-cols-2 sm:grid-rows-1 items-stretch gap-0",
                bentoSplit && "gap-2",
              ),
          innerGridClassName,
        )}
      >
        {defaultScrims}
        {splitScrims}
        {topContentScrims}
        {contentCol}
        {imageCol}
      </div>
    </article>
  )
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
  badgesClassName,
  ctaRowClassName,
  bentoSplit = false,
}: FeatureCardProps) {
  const isTopContent = layout === "top-content"
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
        "relative z-[3] min-h-0",
        isTopContent
          ? "order-2"
          : cn(isImageLeft ? "sm:order-2" : "sm:order-1", bentoSplit ? "order-1 sm:order-2" : "order-1"),
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
            <ul
              role="list"
              className={cn(
                "m-0 flex min-w-0 list-none flex-row flex-wrap items-start gap-2 p-0 pt-2",
                badgesClassName,
              )}
            >
              {badges.map((b) => (
                <li
                  key={b}
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border/80 bg-background/50 px-3 py-1.5 text-xs font-medium text-muted-foreground"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden />
                  {b}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div
          className={cn(
            "flex flex-row flex-wrap items-center gap-3 pt-3 sm:pt-2.5",
            ctaRowClassName,
          )}
        >
          <Link
            href={primaryCta.href}
            className="inline-flex w-fit min-w-[264px] items-center justify-center gap-2 rounded-full border-0 bg-gradient-to-r from-primary to-tertiary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 active:scale-[0.98] dark:hover:opacity-80 xl:px-6 xl:py-3 xl:text-[15px]"
          >
            {primaryCta.text}
            <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2.25} aria-hidden />
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="inline-flex h-[46px] w-[264px] shrink-0 items-center justify-center gap-2 rounded-xl border border-border bg-background/60 px-4 text-center text-sm font-semibold leading-snug text-card-foreground transition hover:bg-background/90"
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
        "relative z-[2] min-h-0",
        isTopContent
          ? "order-1 w-full"
          : cn(isImageLeft ? "sm:order-1" : "sm:order-2", bentoSplit ? "order-2 sm:order-1" : "order-2"),
        imageClassName,
      )}
    >
      <div
        className={cn(
          "feature-item-image panel relative w-full",
          bentoSplit && "sm:h-[450px]",
          isTopContent && "w-full",
          !bentoSplit && !isTopContent && "sm:max-h-[391px] sm:self-start",
          imageShellClassName,
        )}
      >
        <figure
          className={cn(
            "relative m-0 w-full overflow-hidden",
            isTopContent
              ? "aspect-[16/9] max-h-[min(52vw,260px)] sm:aspect-auto sm:h-[300px] sm:max-h-[300px] sm:min-h-0"
              : bentoSplit
                ? "aspect-[4/3] max-h-[min(100vw,320px)] sm:aspect-auto sm:h-full sm:max-h-none"
                : "aspect-[4/3] max-h-[min(92vw,320px)] sm:aspect-auto sm:h-[391px] sm:max-h-[391px] sm:min-h-0",
            imageFigureClassName,
          )}
        >
          <div className={cn("absolute inset-0 z-[2]", imageMediaClassName)}>{visual}</div>
        </figure>
        {isTopContent && (
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-16 bg-gradient-to-t from-card via-card/70 to-transparent sm:h-24"
            aria-hidden
          />
        )}
      </div>
    </div>
  )

  const defaultScrims = !bentoSplit && !isTopContent && (
    <>
      <div
        className="pointer-events-none absolute left-0 top-0 z-0 hidden h-full w-1/2 bg-gradient-to-r from-secondary via-card/90 to-transparent sm:block"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-0 top-0 z-0 block h-1/2 w-full bg-gradient-to-b from-secondary via-card/90 to-transparent sm:hidden"
        aria-hidden
      />
    </>
  )

  const splitScrims = bentoSplit && !isTopContent && (
    <>
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-0 hidden h-1/2 bg-gradient-to-t from-secondary to-transparent dark:from-muted dark:to-transparent sm:block"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 z-0 block h-1/2 bg-gradient-to-b from-secondary to-transparent dark:from-muted dark:to-transparent sm:hidden"
        aria-hidden
      />
    </>
  )

  /** Vertical stack (image top, content bottom): same secondary → card blend as horizontal cards, but top-to-bottom. */
  const topContentScrims = isTopContent && (
    <div
      className="pointer-events-none absolute left-0 top-0 z-0 h-1/2 w-full bg-gradient-to-b from-secondary via-card/90 to-transparent"
      aria-hidden
    />
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
          "relative grid min-h-0 w-full grid-cols-1 sm:px-[23px] sm:py-0",
          isTopContent
            ? "items-stretch gap-0"
            : cn(
                "sm:grid-cols-2 sm:grid-rows-1 items-stretch gap-0",
                bentoSplit && "gap-2",
              ),
          innerGridClassName,
        )}
      >
        {defaultScrims}
        {splitScrims}
        {topContentScrims}
        {contentCol}
        {imageCol}
      </div>
    </article>
  )
}
