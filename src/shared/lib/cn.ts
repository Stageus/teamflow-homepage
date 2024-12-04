import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...css: ClassValue[]) {
   return twMerge(clsx(css));
}
