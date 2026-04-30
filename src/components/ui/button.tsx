import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "font-medium tracking-wide uppercase text-[0.78rem]",
    "transition-all duration-200 cursor-pointer",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:size-4 [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        primary:
          "bg-gold text-ink hover:bg-gold-soft active:bg-gold-deep [&_svg]:transition-transform hover:[&_svg]:translate-x-1",
        dark:
          "bg-surface-dark text-on-dark hover:bg-surface-darker [&_svg]:transition-transform hover:[&_svg]:translate-x-1",
        outline:
          "border border-line-strong text-ink hover:bg-surface-muted [&_svg]:transition-transform hover:[&_svg]:translate-x-1",
        "outline-light":
          "border border-on-dark/30 text-on-dark hover:bg-on-dark/10 [&_svg]:transition-transform hover:[&_svg]:translate-x-1",
        ghost:
          "text-ink hover:bg-surface-muted",
        "ghost-light":
          "text-on-dark hover:bg-on-dark/10",
        link:
          "text-gold-deep hover:text-gold normal-case tracking-normal text-sm h-auto p-0",
        "link-light":
          "text-gold hover:text-gold-soft normal-case tracking-normal text-sm h-auto p-0",
      },
      size: {
        sm: "h-9 px-4",
        md: "h-11 px-6",
        lg: "h-13 px-8 text-[0.82rem]",
        xl: "h-14 px-10 text-[0.85rem]",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { buttonVariants };
