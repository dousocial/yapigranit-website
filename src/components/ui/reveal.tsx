"use client";

import * as React from "react";
import { motion, useInView, type Variants } from "motion/react";
import { cn } from "@/lib/utils";

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number;
  y?: number;
  once?: boolean;
  as?: "div" | "section" | "article" | "header" | "footer";
}

const variants: Variants = {
  hidden: (y: number) => ({ opacity: 0, y }),
  visible: { opacity: 1, y: 0 },
};

export function Reveal({
  delay = 0,
  y = 24,
  once = true,
  className,
  children,
  as = "div",
  ...props
}: RevealProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, amount: 0.2 });
  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      ref={ref}
      custom={y}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className={cn(className)}
      {...(props as React.ComponentProps<typeof motion.div>)}
    >
      {children}
    </MotionTag>
  );
}
