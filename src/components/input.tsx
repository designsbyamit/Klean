import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn("h-10 w-full rounded-xl border border-neutral-300 bg-white px-3 text-sm outline-none placeholder:text-neutral-400 focus:border-black focus:ring-2 focus:ring-neutral-200", className)} {...props} />;
}
