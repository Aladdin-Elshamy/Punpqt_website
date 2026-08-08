"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Settings from "@/shared/icons/Settings";
import { Grid, List } from "lucide-react";
import Filter from "./Filter";
import { useLocale, useTranslations } from "next-intl";

export type ViewMode = "grid" | "list";

interface ViewToggleButtonsProps {
  view: ViewMode;
  onViewChange: (view: ViewMode) => void;
  activeTab: "products" | "printers";
}

export default function ViewToggleButtons({
  view,
  onViewChange,
  activeTab,
}: ViewToggleButtonsProps) {
  const locale = useLocale();
  const t = useTranslations("SpecificProduct.filter");

  return (
    <div className="flex items-stretch gap-2">
      {/* Mobile Filter Button */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="secondary"
                className="sm:h-full! w-15 h-15.25 rounded-xl bg-white border border-input shadow-xs hover:bg-gray-50 flex items-center justify-center cursor-pointer transition-colors"
                title={t("title")}
              >
                <Settings className="size-6 text-muted-foreground" />
              </Button>
            }
          />
          <SheetContent side={locale === "en" ? "left" : "right"} className="w-80 p-0 sm:max-w-md overflow-y-auto">
            <SheetHeader className="p-4 border-b">
              <SheetTitle className="text-lg font-bold flex items-center gap-2">
                <Settings className="size-5" />
                <span>{t("title")}</span>
              </SheetTitle>
            </SheetHeader>
            <div className="p-4 pt-0 xl:pt-4">
              <Filter className="border-0 shadow-none p-0 min-w-0" showTitle={false} />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {activeTab !== "printers" && (
        <Button
          onClick={() => onViewChange("grid")}
          variant={view === "grid" ? "default" : "secondary"}
          className={`h-15.25 sm:h-auto! w-15 rounded-xl transition-colors ${view === "grid"
            ? "bg-black hover:bg-black/80 text-white"
            : "bg-white border shadow-xs hover:bg-gray-50"
            }`}
        >
          <Grid
            className={`size-7 ${view === "grid" ? "text-white" : "text-muted-foreground"
              }`}
          />
        </Button>
      )}

      <Button
        onClick={() => onViewChange("list")}
        variant={view === "list" ? "default" : "secondary"}
        className={`h-15.25 sm:h-auto! w-15 rounded-xl transition-colors ${view === "list"
          ? "bg-black hover:bg-black/80 text-white"
          : "bg-white border shadow-xs hover:bg-gray-50"
          }`}
      >
        <List
          className={`size-6 ${view === "list" ? "text-white" : "text-muted-foreground"
            }`}
        />
      </Button>
    </div>
  );
}
