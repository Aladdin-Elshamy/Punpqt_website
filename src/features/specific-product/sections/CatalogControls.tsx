"use client";

import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import SelectCategory from "../components/SelectCategory";
import ViewToggleButtons from "../components/ViewToggleButtons";
import {
  CatalogCategory,
  CatalogState,
  CatalogView,
} from "../models/types";

interface CatalogControlsProps {
  catalogState: CatalogState;
  view: CatalogView;
  onViewChange: (view: CatalogView) => void;
}

export default function CatalogControls({
  catalogState,
  view,
  onViewChange,
}: CatalogControlsProps) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateCatalog = useCallback(
    (updates: Partial<Pick<CatalogState, "tab" | "category">>) => {
      const params = new URLSearchParams(searchParams.toString());
      const nextTab = updates.tab ?? catalogState.tab;
      const nextCategory = updates.category ?? catalogState.category;

      if (nextTab === "products") params.delete("tab");
      else params.set("tab", nextTab);

      if (nextCategory === "popular") params.delete("category");
      else params.set("category", nextCategory);

      router.replace(`${pathname}${params.size ? `?${params}` : ""}`, {
        scroll: false,
      });
    },
    [catalogState, pathname, router, searchParams],
  );

  return (
    <div className="flex items-stretch gap-2">
      <SelectCategory
        value={catalogState.category}
        onValueChange={(value) => {
          if (value) updateCatalog({ category: value as CatalogCategory });
        }}
      />
      <ViewToggleButtons
        view={view}
        onViewChange={onViewChange}
        activeTab={catalogState.tab}
      />
    </div>
  );
}
