import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

/** Default bottom margin for a full section heading block (matches legacy `section-header`). */
export const sectionHeadingSpacing =
  "mb-10 sm:mb-12 md:mb-14 lg:mb-16"

export type SectionHeadingAlign = "center" | "left"

type SectionBadgeProps = {
  children: ReactNode
  className?: string
  align?: SectionHeadingAlign
}

/**
 * Uppercase kicker with coral dot — matches marketing section label pattern (e.g. “PRICING PLANS”).
 */
export function SectionBadge({ children, className, align = "center" }: SectionBadgeProps) {
  return (
    <div
      className={cn(
        "mb-4 flex items-center gap-2 sm:mb-5",
        align === "center" && "justify-center",
        align === "left" && "justify-start",
        className,
      )}
    >
      <span
        className="size-2 shrink-0 rounded-full bg-section-coral sm:size-2.5"
        aria-hidden
      />
      <span
        className={cn(
          "font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-section-coral sm:text-xs sm:tracking-[0.2em]",
        )}
      >
        {children}
      </span>
    </div>
  )
}

type SectionTitleProps = {
  /** Plain title (no highlight). Ignored if `before` / `highlight` are used. */
  children?: ReactNode
  /** Text before the parallelogram highlight (dark ink). */
  before?: ReactNode
  /** Text inside the skewed coral panel (white, upright). */
  highlight?: ReactNode
  as?: "h1" | "h2" | "h3"
  className?: string
  align?: SectionHeadingAlign
}

/**
 * Large section title. Optional `before` + `highlight` renders the parallelogram accent
 * (skewed background, unskewed text) from the reference design.
 */
export function SectionTitle({
  children,
  before,
  highlight,
  as: Tag = "h2",
  className,
  align = "center",
}: SectionTitleProps) {
  const useSplit = before !== undefined && highlight !== undefined

  if (!useSplit) {
    return (
      <Tag
        className={cn(
          "font-sans text-2xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl",
          align === "center" && "text-center",
          align === "left" && "text-left",
          className,
        )}
      >
        {children}
      </Tag>
    )
  }

  return (
    <Tag
      className={cn(
        "font-sans text-2xl font-bold leading-[1.15] tracking-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl",
        align === "center" && "text-center",
        align === "left" && "text-left",
        className,
      )}
    >
      <span
        className={cn(
          "inline-flex max-w-full flex-wrap items-center gap-x-2 gap-y-2 sm:gap-x-2.5 sm:gap-y-2",
          align === "center" && "justify-center",
          align === "left" && "justify-start",
        )}
      >
        <span className="text-foreground">{before}</span>
        <span className="inline-flex -skew-x-[10deg] bg-section-coral px-3 py-1 sm:px-4 sm:py-1.5">
          <span className="skew-x-[10deg] text-section-coral-foreground">{highlight}</span>
        </span>
      </span>
    </Tag>
  )
}

type SectionLeadProps = {
  children: ReactNode
  as?: "p" | "h2"
  className?: string
  align?: SectionHeadingAlign
}

/**
 * Muted subheading / supporting copy below the section title (larger gap via `mt-*` here).
 */
export function SectionLead({ children, as: Tag = "p", className, align = "center" }: SectionLeadProps) {
  return (
    <Tag
      className={cn(
        "font-sans text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg",
        "mt-6 max-w-2xl sm:mt-7",
        align === "center" && "mx-auto text-center",
        align === "left" && "max-w-lg text-left",
        className,
      )}
    >
      {children}
    </Tag>
  )
}

type SectionHeaderBase = {
  badge: ReactNode
  titleAs?: "h1" | "h2" | "h3"
  description?: ReactNode
  descriptionAs?: "p" | "h2"
  align?: SectionHeadingAlign
  className?: string
}

export type SectionHeaderProps =
  | (SectionHeaderBase & {
      titleBefore: ReactNode
      titleHighlight: ReactNode
    })
  | (SectionHeaderBase & {
      title: ReactNode
    })

/**
 * Composes badge + title + lead with consistent spacing (centered or left).
 */
export function SectionHeader(props: SectionHeaderProps) {
  const {
    badge,
    titleAs = "h2",
    description,
    descriptionAs = "p",
    align = "center",
    className,
  } = props

  const split = "titleBefore" in props && "titleHighlight" in props

  return (
    <div className={cn(align === "center" && "text-center", className)}>
      <SectionBadge align={align}>{badge}</SectionBadge>
      {split ? (
        <SectionTitle
          as={titleAs}
          before={props.titleBefore}
          highlight={props.titleHighlight}
          align={align}
        />
      ) : (
        <SectionTitle as={titleAs} align={align}>
          {"title" in props ? props.title : null}
        </SectionTitle>
      )}
      {description !== undefined ? (
        <SectionLead as={descriptionAs} align={align}>
          {description}
        </SectionLead>
      ) : null}
    </div>
  )
}
