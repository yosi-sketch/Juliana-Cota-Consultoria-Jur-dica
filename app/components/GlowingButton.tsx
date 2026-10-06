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
    gold: "border border-[#d4a34b]/40 bg-gradient-to-r from-[#b88628] via-[#c99738] to-[#966718] text-white shadow-md shadow-[#966718]/20 hover:-translate-y-0.5 hover:from-[#c99738] hover:via-[#dfad4a] hover:to-[#b88628] hover:shadow-lg hover:shadow-[#c99738]/30",
    outline: "border border-[#c99738]/50 bg-transparent text-[#966718] hover:-translate-y-0.5 hover:border-[#c99738] hover:bg-[#c99738]/10 hover:text-[#744e10]",
    white: "border border-white/20 bg-white text-slate-950 shadow-md hover:-translate-y-0.5 hover:bg-[#fbf8f0] hover:shadow-lg",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-full font-bold uppercase transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#c99738] select-none text-center cursor-pointer " +
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
