import type { FC } from "react";
import { twMerge } from "tailwind-merge";

import type {
  CardProps,
  CardHeaderProps,
  CardContentProps,
  CardFooterProps,
} from "./Card.types";
const cardVariants = {
  default:
    "bg-white border border-slate-200/80 shadow-[0_2px_8px_rgba(15,23,42,0.04)]",

  interactive:
    "bg-white border border-slate-200/80 shadow-[0_2px_8px_rgba(15,23,42,0.04)] " +
    "cursor-pointer transition-all duration-200 ease-out " +
    "hover:-translate-y-1 hover:border-indigo-200 " +
    "hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)] " +
    "focus-visible:outline-none focus-visible:ring-2 " +
    "focus-visible:ring-indigo-500 focus-visible:ring-offset-2",

  highlight:
    "bg-white border border-indigo-100 shadow-[0_4px_16px_rgba(99,102,241,0.08)] " +
    "relative overflow-hidden " +
    "before:absolute before:inset-x-0 before:top-0 before:h-1 " +
    "before:bg-gradient-to-r before:from-indigo-500 before:to-purple-500",

  flat:
    "bg-white border border-slate-200/80",
};
export const Card: FC<CardProps> = ({
  variant = "default",
  className = "",
  children,
  ...props
}) => {
  return (
    <div
      className={twMerge(
        "rounded-xl p-6",
        cardVariants[variant],
        className
      )}
      data-variant={variant}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader: FC<CardHeaderProps> = ({
  className = "",
  children,
  ...props
}) => {
  return (
    <div
      className={twMerge("mb-5", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardContent: FC<CardContentProps> = ({
  className = "",
  children,
  ...props
}) => {
  return (
    <div
      className={twMerge("text-slate-600", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardFooter: FC<CardFooterProps> = ({
  className = "",
  children,
  ...props
}) => {
  return (
    <div
      className={twMerge(
        "mt-5 flex items-center",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};