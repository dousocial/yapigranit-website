import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => (
  <input
    ref={ref}
    type={type}
    className={cn(
      "w-full bg-transparent text-ink placeholder:text-ink-soft text-[0.95rem]",
      "border-0 border-b border-line-strong px-0 py-3",
      "transition-colors focus:outline-none focus:border-gold",
      "disabled:opacity-60 disabled:cursor-not-allowed",
      className,
    )}
    {...props}
  />
));
Input.displayName = "Input";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "w-full bg-transparent text-ink placeholder:text-ink-soft text-[0.95rem]",
      "border-0 border-b border-line-strong px-0 py-3 min-h-[120px] resize-y",
      "transition-colors focus:outline-none focus:border-gold",
      "disabled:opacity-60 disabled:cursor-not-allowed",
      className,
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";

export { Input, Textarea };
