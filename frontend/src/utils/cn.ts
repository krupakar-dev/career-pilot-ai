import { twMerge } from "tailwind-merge";

export function cn(
  ...classes: Array<
    string | undefined | null | false | 0
  >
) {
  return twMerge(classes.filter(Boolean).join(" "));
}