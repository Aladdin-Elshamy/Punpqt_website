"use client";

import { useEffect, useState } from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { TabsLine } from "../components/TabsLine";
import SearchSpecs from "../components/Search";
import ViewToggleButtons, { ViewMode } from "../components/ViewToggleButtons";
import ProductList from "../components/ProductList";
import PrinterCard from "../components/PrinterCard";
import SelectCategory from "../components/SelectCategory";
import { useTranslations } from "next-intl";

export interface ProductCatalogViewProps {
  products?: Array<any>;
}

export default function ProductCatalogView({
  products = [1, 2, 3, 4, 5, 6],
}: ProductCatalogViewProps) {
  const t = useTranslations("SpecificProduct.catalog");
  const [view, setView] = useState<ViewMode>("grid");
  const [activeTab, setActiveTab] = useState<"products" | "printers">("products");

  useEffect(() => {
    if (activeTab === "printers") {
      setView("list");
    }
  }, [activeTab]);

  return (
    <Tabs defaultValue={"products"} value={activeTab} onValueChange={setActiveTab} className="flex-1 space-y-6">
      {/* Top Header Controls Row */}
      <div className="flex items-start xl:items-center justify-between gap-4 flex-col xl:flex-row">
        {/* <TabsLine
          tabs={[
            { label: t("tabs.products", { count: 6 }), value: "products" },
            { label: t("tabs.printers", { count: 3 }), value: "printers" },
          ]}
        /> */}

        <div className="flex
         ms-0 w-full xl:ms-auto xl:w-auto order-1 xl:order-2 items-stretch xl:flex-row flex-wrap gap-2">
          <SearchSpecs />

          <SelectCategory />

          <ViewToggleButtons view={view} onViewChange={setView} activeTab={activeTab} />
        </div>
      </div>

      {/* Product List Content */}
      <TabsContent value={"products"}>
        <ProductList view={view} products={products} />
      </TabsContent>

      <TabsContent value={"printers"}>
        <div className="space-y-4">
          <PrinterCard startingPrice={250} />
          <PrinterCard startingPrice={undefined} />
        </div>
      </TabsContent>
    </Tabs>
  );
}
