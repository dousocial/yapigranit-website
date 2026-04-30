import * as React from "react";
import { cn } from "@/lib/utils";

interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "gold" | "dark" | "light";
}

export function Eyebrow({
  className,
  variant = "gold",
  ...props
}: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-block text-[0.72rem] font-medium uppercase tracking-[0.22em]",
        variant === "gold" && "text-gold-deep",
        variant === "dark" && "text-ink-soft",
        variant === "light" && "text-gold",
        className,
      )}
      {...props}
    />
  );
}
