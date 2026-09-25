import type { TableHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Table({ className, ...props }: TableHTMLAttributes<HTMLTableElement>) {
  return <div className="overflow-x-auto rounded-2xl border border-neutral-200 bg-white"><table className={cn("w-full text-left text-sm", className)} {...props} /></div>;
}
