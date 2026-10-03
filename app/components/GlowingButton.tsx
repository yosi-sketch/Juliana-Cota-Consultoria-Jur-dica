"use client";

import type { ReactNode } from "react";

interface GlowingButtonProps {
  children: ReactNode;
  href?: string;
  target?: string;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "gold" | "outline" | "white";
}

export default function GlowingButton({
  children,
  href,
  target,
  onClick,
  className = "",
  size = "md",
  variant = "gold",
}: GlowingButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-3 text-[10px] tracking-[0.14em]",
    md: "px-6 py-3.5 text-xs tracking-[0.15em]",
    lg: "px-7 py-4 text-xs tracking-[0.15em]",
  }[size];

  const variantClasses = {
    gold: "border border-amber-500/30 bg-gradient-to-r from-amber-600 via-amber-600 to-amber-700 text-white shadow-md shadow-amber-950/20 hover:-translate-y-0.5 hover:from-amber-500 hover:to-amber-600 hover:shadow-lg hover:shadow-amber-600/30",
    outline: "border border-amber-600/40 bg-transparent text-amber-800 hover:-translate-y-0.5 hover:border-amber-600 hover:bg-amber-50 hover:text-amber-950",
    white: "border border-white/20 bg-white text-slate-950 shadow-md hover:-translate-y-0.5 hover:bg-amber-50 hover:shadow-lg",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-full font-bold uppercase transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-amber-600 select-none text-center cursor-pointer " +
    sizeClasses +
    " " +
    variantClasses +
    " " +
    className;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
