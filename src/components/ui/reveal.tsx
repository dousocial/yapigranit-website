import * as React from "react";
import { cn } from "@/lib/utils";

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Animation start delay in seconds. */
  delay?: number;
  /**
   * @deprecated Kept for backwards compatibility — Y-offset is now baked into
   * the `.reveal-in` keyframes (16 px). Prop is ignored.
   */
  y?: number;
  /**
   * @deprecated Animation always plays once on mount/visibility (CSS keyframe).
   * Prop is ignored — kept for backwards compatibility with existing call sites.
   */
  once?: boolean;
  as?: "div" | "section" | "article" | "header" | "footer" | "li" | "ul" | "ol";
}

/**
 * SSR-safe reveal-on-scroll wrapper, CSS-only.
 *
 * - Renders identical HTML on server and client (no hydration mismatch).
 * - Uses the global `.reveal-in` keyframe (defined in globals.css). The
 *   element starts at `opacity:0; translateY(16px)` and animates to its
 *   resting state. The keyframe uses `animation-fill-mode: both`, so the
 *   final state is preserved even if the animation finishes off-screen.
 * - `prefers-reduced-motion` is honoured by the same CSS layer (animation
 *   skipped, opacity:1 enforced).
 * - Optional `delay` is applied via inline `animation-delay`.
 *
 * Note: the previous framer-motion implementation triggered a React 19
 * hydration-mismatch warning because the post-mount swap to `motion.div`
 * differed from the SSR HTML. CSS keyframes avoid the entire problem and
 * keep the polish.
 */
export function Reveal({
  delay = 0,
  y: _y,
  once: _once,
  className,
  children,
  as = "div",
  style,
  ...props
}: RevealProps) {
  void _y;
  void _once;
  const Tag = as as keyof React.JSX.IntrinsicElements;
  const mergedStyle: React.CSSProperties = {
    ...style,
    ...(delay > 0 ? { animationDelay: `${delay}s` } : {}),
  };
  return React.createElement(
    Tag,
    {
      className: cn("reveal-in", className),
      style: mergedStyle,
      ...props,
    },
    children,
  );
}
