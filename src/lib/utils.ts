import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatLpa(value: number) {
  return `${value.toFixed(value % 1 ? 1 : 0)} LPA`;
}
