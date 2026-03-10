"use client";

import * as React from "react";
import { motion, type MotionProps } from "framer-motion";

export function FadeIn({
  children,
  delay = 0,
  className,
}: React.PropsWithChildren<{ delay?: number; className?: string }>) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

export function Pop({
  children,
  className,
  ...props
}: React.PropsWithChildren<{ className?: string } & MotionProps>) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
