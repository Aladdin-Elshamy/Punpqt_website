"use client";

import { cn } from "@/lib/utils";
import { Zap } from "lucide-react";
import { useState } from "react";

const sortOptions = [
  { value: "urgency", label: "⚡ By Urgency" },
  { value: "price", label: "By Price" },
  { value: "date", label: "Added Order" },
] as const;

type SortOption = (typeof sortOptions)[number]["value"];

export default function CartSortTabs() {
  const [activeSort, setActiveSort] = useState<SortOption>("urgency");

  return (
    <div
      className="inline-flex rounded-full bg-muted/80 p-1"
      aria-label="Cart sorting"
    >
      {sortOptions.map((option) => {
        const isActive = activeSort === option.value;

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setActiveSort(option.value)}
            className={cn(
              "inline-flex h-8 items-center justify-center gap-1.5 rounded-full px-3 text-xs font-semibold text-muted-foreground transition-colors",
              isActive && "bg-background text-foreground shadow-sm",
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}