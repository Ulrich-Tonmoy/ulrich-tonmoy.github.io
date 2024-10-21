import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function randomNumber(min = 0, max = 6) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const color = ["red", "green", "yellow", "blue", "orange", "pink", "black"];