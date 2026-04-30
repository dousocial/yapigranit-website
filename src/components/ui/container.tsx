import * as React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "wide" | "narrow";
}

export function Container({
  className,
  size = "default",
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "w-full mx-auto px-6 md:px-8",
        size === "default" && "max-w-[1280px]",
        size === "wide" && "max-w-[1440px]",
        size === "narrow" && "max-w-[960px]",
        className,
      )}
      {...props}
    />
  );
}
