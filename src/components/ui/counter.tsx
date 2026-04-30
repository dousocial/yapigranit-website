"use client";

import * as React from "react";
import { useInView, useMotionValue, useTransform, animate } from "motion/react";
import { motion } from "motion/react";

interface CounterProps {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function Counter({ to, suffix = "", duration = 1.6, className }: CounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString("tr-TR"));

  React.useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
  }, [inView, to, duration, count]);

  return (
    <span ref={ref} className={className}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
