import type { ReactNode } from "react";
import { cn } from "../../../utils/cn";
import type { BadgeProps } from "./Badge.types";

const variantStyles = {
  default: "bg-slate-100 text-slate-700 border-slate-200",
  success: "bg-green-50 text-green-700 border-green-200",
  warning: "bg-amber-50 text-amber-700 border-amber-200",
  error: "bg-red-50 text-red-700 border-red-200",
  info: "bg-indigo-50 text-indigo-700 border-indigo-200",
};

const sizeStyles = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-1 text-sm",
  lg: "px-3 py-1.5 text-base",
};

interface BadgeComponentProps extends BadgeProps {
  children?: ReactNode;
}

export function Badge({
  variant = "default",
  size = "md",
  className,
  children,
  ...props
}: BadgeComponentProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center",
        "rounded-full border font-medium",
        "whitespace-nowrap",
        "transition-colors duration-200",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}