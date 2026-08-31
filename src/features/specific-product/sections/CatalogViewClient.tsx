"use client";

import { useState, type ReactNode } from "react";
import CatalogControls from "./CatalogControls";
import type { CatalogState, CatalogView } from "../models/types";

interface CatalogViewClientProps {
  catalogState: CatalogState;
  searchNode: ReactNode;
  productsGridNode: ReactNode;
  productsListNode: ReactNode;
  printersNode: ReactNode;
}

export default function CatalogViewClient({
  catalogState,
  searchNode,
  productsGridNode,
  productsListNode,
  printersNode,
}: CatalogViewClientProps) {
  // view lives purely in client state — never touches the URL
  const [view, setView] = useState<CatalogView>(
    // printers tab is always list; otherwise seed from catalogState (URL-seeded initial value)
    catalogState.tab === "printers" ? "list" : catalogState.view,
  );

  const effectiveView: CatalogView =
    catalogState.tab === "printers" ? "list" : view;

  const handleViewChange = (nextView: CatalogView) => {
    if (catalogState.tab === "printers") return;
    setView(nextView);
  };

  return (
    <section className="flex-1 space-y-6">
      <div className="flex items-start xl:items-center justify-between gap-4 flex-col xl:flex-row">
        <div className="flex ms-0 w-full xl:ms-auto order-1 xl:order-2 items-stretch xl:flex-row flex-col gap-2">
          {searchNode}
          <CatalogControls
            catalogState={catalogState}
            view={effectiveView}
            onViewChange={handleViewChange}
          />
        </div>
      </div>

      {catalogState.tab === "products" ? (
        effectiveView === "grid" ? productsGridNode : productsListNode
      ) : (
        printersNode
      )}
    </section>
  );
}
