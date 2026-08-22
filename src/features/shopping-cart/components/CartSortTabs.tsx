"use client";

import { CART_SORT_OPTIONS } from "@/features/shopping-cart/shopping-cart.data";
import { cn } from "@/lib/utils";
import { useState } from "react";

type SortOption = (typeof CART_SORT_OPTIONS)[number]["value"];

export default function CartSortTabs() {
  const [activeSort, setActiveSort] = useState<SortOption>("urgency");

  return (
    <div
      className="inline-flex rounded-full bg-muted/80 p-1"
      aria-label="Cart sorting"
    >
      {CART_SORT_OPTIONS.map((option) => {
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