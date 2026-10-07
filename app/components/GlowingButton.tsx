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
    gold: "border border-[#fae4a8]/50 bg-gradient-to-r from-[#977128] via-[#cda34f] to-[#eed083] text-[#0a130c] font-black shadow-md shadow-[#977128]/25 hover:-translate-y-0.5 hover:from-[#cda34f] hover:via-[#fae4a8] hover:to-[#977128] hover:shadow-lg hover:shadow-[#cda34f]/35",
    outline: "border border-[#cda34f]/50 bg-transparent text-[#977128] hover:-translate-y-0.5 hover:border-[#cda34f] hover:bg-[#cda34f]/10 hover:text-[#684b12]",
    white: "border border-white/20 bg-white text-[#0a130c] shadow-md hover:-translate-y-0.5 hover:bg-[#faf8f2] hover:shadow-lg",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-full font-bold uppercase transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#cda34f] select-none text-center cursor-pointer " +
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
