import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

type StarProps = {
  className?: string;
  size?: number;
  style?: CSSProperties;
};

export function Star({ className, size = 16, style }: StarProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      style={style}
      className={cn("text-secondary", className)}
    >
      <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
    </svg>
  );
}

type DotProps = {
  className?: string;
};

export function Dot({ className }: DotProps) {
  return (
    <span
      aria-hidden
      className={cn("inline-block size-1.5 rounded-full bg-primary", className)}
    />
  );
}

type OrbitProps = {
  className?: string;
};

export function Orbit({ className }: OrbitProps) {
  return (
    <svg
      viewBox="0 0 320 120"
      fill="none"
      aria-hidden
      className={cn("pointer-events-none text-primary", className)}
    >
      <ellipse
        cx="160"
        cy="60"
        rx="148"
        ry="42"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="6 10"
        className="opacity-70"
        transform="rotate(-12 160 60)"
      />
    </svg>
  );
}

type SquiggleArrowProps = {
  className?: string;
};

export function SquiggleArrow({ className }: SquiggleArrowProps) {
  return (
    <svg
      viewBox="0 0 80 100"
      fill="none"
      aria-hidden
      className={cn("pointer-events-none text-primary", className)}
    >
      <path
        d="M40 8 C 12 28, 68 42, 28 62 C 8 74, 22 88, 40 92"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        className="opacity-80"
      />
      <path
        d="M28 84 L40 94 L48 80"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="opacity-80"
      />
    </svg>
  );
}
