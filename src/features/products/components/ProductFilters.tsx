"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import SearchIcon from "@/shared/icons/Search";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface ProductFiltersProps {
  currentCategory?: string;
  currentSort?: string;
  currentSearch?: string;
  isPopularOnly?: boolean;
}

export default function ProductFilters({
  currentCategory = "all",
  currentSort = "",
  currentSearch = "",
  isPopularOnly = false,
}: ProductFiltersProps) {
  const t = useTranslations("AllProducts.filters");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const updateFilters = (updates: Record<string, string | null>) => {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(updates).forEach(([key, value]) => {
      if (value === null || value === "" || value === "all") {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });

    // Reset to page 1 whenever filters change
    params.delete("page");

    startTransition(() => {
      const qs = params.toString();
      router.push(`${pathname}${qs ? `?${qs}` : ""}`, { scroll: false });
    });
  };

  const categories = [
    { id: "all", label: t("categories.all") },
    { id: "business-cards", label: t("categories.businessCards") },
    { id: "flyers", label: t("categories.flyers") },
    { id: "brochures", label: t("categories.brochures") },
    { id: "packaging", label: t("categories.packaging") },
    { id: "envelopes", label: t("categories.envelopes") },
    { id: "invitations", label: t("categories.invitations") },
    { id: "documents", label: t("categories.documents") },
  ];

  const sortOptions = [
    { value: "default", label: t("sortOptions.default") },
    { value: "price_asc", label: t("sortOptions.priceAsc") },
    { value: "price_desc", label: t("sortOptions.priceDesc") },
    { value: "latest", label: t("sortOptions.latest") },
  ];

  return (
    <div className="space-y-4 mb-8 relative z-10">
      {/* Search and Sort row */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
        <div className="w-full sm:max-w-md">
          <InputGroup className="bg-white rounded-2xl border border-black/10 py-1.5 px-2">
            <InputGroupAddon>
              <SearchIcon className="size-4 text-muted-foreground" />
            </InputGroupAddon>
            <InputGroupInput
              placeholder={t("searchPlaceholder")}
              defaultValue={currentSearch}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  updateFilters({
                    search: e.currentTarget.value.trim() || null,
                  });
                }
              }}
              onBlur={(e) => {
                if (e.currentTarget.value.trim() !== currentSearch) {
                  updateFilters({
                    search: e.currentTarget.value.trim() || null,
                  });
                }
              }}
              className="text-sm placeholder:text-muted-foreground"
            />
          </InputGroup>
        </div>

        <div className="flex gap-2.5 items-stretch h-11">
          {/* Popular toggle */}
          <Button
            variant={isPopularOnly ? "default" : "outline"}
            size="sm"
            onClick={() =>
              updateFilters({ popular: isPopularOnly ? null : "1" })
            }
            className={`h-11 rounded-2xl px-4 text-xs font-semibold ${
              isPopularOnly
                ? "bg-primary text-white"
                : "bg-white text-black border-black/10 hover:bg-muted"
            }`}
          >
            {t("popularOnly")}
          </Button>

          {/* Sort selector */}
          <div className=" h-full">
            <Select
              value={currentSort || "default"}
              onValueChange={(val) =>
                updateFilters({ sort: val === "default" ? null : val })
              }
              items={sortOptions}
            >
              <SelectTrigger className="data-[size=default]:h-full! bg-white rounded-2xl border-black/10 min-h-full text-xs font-semibold">
                <SelectValue placeholder={t("sortPlaceholder")} />
              </SelectTrigger>
              <SelectContent className={"w-55"}>
                {sortOptions.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => {
          const isActive =
            (cat.id === "all" &&
              (!currentCategory || currentCategory === "all")) ||
            currentCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => updateFilters({ category: cat.id })}
              className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                isActive
                  ? "bg-primary text-white shadow-xs"
                  : "bg-white text-[#6B6B80] border border-black/8 hover:text-black hover:border-black/20"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {isPending && (
        <div className="h-1 w-full bg-primary/20 overflow-hidden rounded-full">
          <div className="h-full bg-primary animate-pulse w-1/3 rounded-full" />
        </div>
      )}
    </div>
  );
}
