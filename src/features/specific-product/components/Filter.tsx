"use client";

import Settings from "@/shared/icons/Settings";
import Star2 from "@/shared/icons/Star2";
import { useTranslations } from "next-intl";
import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export interface FilterOptions {
  startingPrices?: string[];
  locations?: string[];
  ratings?: number[];
}

export interface FilterProps {
  options?: FilterOptions;
  selectedPrice?: string;
  selectedLocation?: string;
  selectedRating?: number;
  onPriceSelect?: (price: string) => void;
  onLocationSelect?: (location: string) => void;
  onRatingSelect?: (rating: number | undefined) => void;
  showTitle?: boolean;
  className?: string;
}

const priceOptions = ["any", "under-200"] as const;
const locationOptions = ["cairo", "alexandria"] as const;

export default function Filter({
  options,
  selectedPrice: propPrice,
  selectedLocation: propLocation,
  selectedRating: propRating,
  onPriceSelect,
  onLocationSelect,
  onRatingSelect,
  showTitle = true,
  className = "",
}: FilterProps) {
  const t = useTranslations("SpecificProduct.filter");
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const prices = options?.startingPrices || [
    t("options.anyPrice"),
    t("options.underEgp200"),
  ];
  const locations = options?.locations || [
    t("options.cairo"),
    t("options.alexandria"),
  ];
  const ratings = options?.ratings || [5, 4, 3, 2];
  const activePrice = propPrice ?? searchParams.get("price") ?? "";
  const activeLocation = propLocation ?? searchParams.get("location") ?? "";
  const ratingParam = Number(searchParams.get("rating"));
  const activeRating = propRating ?? (ratings.includes(ratingParam) ? ratingParam : undefined);

  const updateParam = useCallback(
    (name: string, value: string | undefined) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) params.set(name, value);
      else params.delete(name);
      router.replace(`${pathname}${params.size ? `?${params}` : ""}`, {
        scroll: false,
      });
    },
    [pathname, router, searchParams],
  );

  const handlePriceClick = (index: number, price: string) => {
    const value = options?.startingPrices ? price : priceOptions[index];
    const nextPrice = activePrice === value ? "" : value;
    updateParam("price", nextPrice);
    onPriceSelect?.(nextPrice);
  };

  const handleLocationClick = (index: number, location: string) => {
    const value = options?.locations ? location : locationOptions[index];
    const nextLocation = activeLocation === value ? "" : value;
    updateParam("location", nextLocation);
    onLocationSelect?.(nextLocation);
  };

  const handleRatingClick = (rating: number) => {
    const nextRating = activeRating === rating ? undefined : rating;
    updateParam("rating", nextRating?.toString());
    onRatingSelect?.(nextRating);
  };

  return (
    <div className={`p-0 lg:p-4 bg-white font-semibold rounded-2xl border min-w-64 ${className}`}>
      {showTitle && (
        <h2 className="text-xl flex items-center gap-2">
          <Settings className="mt-1" />
          <span>{t("title")}</span>
        </h2>
      )}

      <h3 className="pt-0 xl:pt-4">{t("startingPrice")}</h3>
      <ul className="ps-5 pt-4 flex flex-col gap-2">
        {prices.map((price, index) => {
          const value = options?.startingPrices ? price : priceOptions[index];
          return (
            <li
              key={value}
              onClick={() => handlePriceClick(index, price)}
              className={`hover:underline cursor-pointer transition-colors ${activePrice === value ? "text-primary font-bold underline" : ""}`}
            >
              {price}
            </li>
          );
        })}
      </ul>

      <h3 className="pt-4">{t("location")}</h3>
      <ul className="ps-5 pt-4 flex flex-col gap-2">
        {locations.map((location, index) => {
          const value = options?.locations ? location : locationOptions[index];
          return (
            <li
              key={value}
              onClick={() => handleLocationClick(index, location)}
              className={`hover:underline cursor-pointer transition-colors ${activeLocation === value ? "text-primary font-bold underline" : ""}`}
            >
              {location}
            </li>
          );
        })}
      </ul>

      <h3 className="pt-4">{t("rating")}</h3>
      <ul className="ps-5 pt-4 flex flex-col gap-2">
        {ratings.map((stars) => (
          <li
            key={stars}
            onClick={() => handleRatingClick(stars)}
            className={`w-fit cursor-pointer flex items-center gap-2 ${activeRating === stars ? "border-b-2 border-primary font-bold" : "hover:border-b-2 border-black"}`}
          >
            <div className="flex items-center gap-0.5">
              {Array.from({ length: stars }).map((_, index) => (
                <Star2 key={index} className="text-[#FBBF24]" />
              ))}
            </div>
            <span className={activeRating === stars ? "text-primary" : "text-muted-foreground"}>
              {t("andUp")}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
