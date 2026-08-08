"use client";

import { useState } from "react";
import Settings from "@/shared/icons/Settings";
import Star2 from "@/shared/icons/Star2";
import { useTranslations } from "next-intl";

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
  onRatingSelect?: (rating: number) => void;
  showTitle?: boolean;
  className?: string;
}

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

  const DEFAULT_PRICES = [t("options.anyPrice"), t("options.underEgp200")];
  const DEFAULT_LOCATIONS = [t("options.cairo"), t("options.alexandria")];
  const DEFAULT_RATINGS = [5, 4, 3, 2];

  const [internalPrice, setInternalPrice] = useState<string>("");
  const [internalLocation, setInternalLocation] = useState<string>("");
  const [internalRating, setInternalRating] = useState<number | undefined>();

  const activePrice = propPrice !== undefined ? propPrice : internalPrice;
  const activeLocation = propLocation !== undefined ? propLocation : internalLocation;
  const activeRating = propRating !== undefined ? propRating : internalRating;

  const prices = options?.startingPrices || DEFAULT_PRICES;
  const locations = options?.locations || DEFAULT_LOCATIONS;
  const ratings = options?.ratings || DEFAULT_RATINGS;

  const handlePriceClick = (price: string) => {
    const nextPrice = activePrice === price ? "" : price;
    setInternalPrice(nextPrice);
    onPriceSelect?.(nextPrice);
  };

  const handleLocationClick = (loc: string) => {
    const nextLoc = activeLocation === loc ? "" : loc;
    setInternalLocation(nextLoc);
    onLocationSelect?.(nextLoc);
  };

  const handleRatingClick = (r: number) => {
    const nextR = activeRating === r ? undefined : r;
    setInternalRating(nextR);
    onRatingSelect?.(r);
  };

  return (
    <div className={`p-0 xl:p-4 bg-white font-semibold rounded-2xl border min-w-64 ${className}`}>
      {showTitle && (
        <h2 className="text-xl flex items-center gap-2">
          <Settings className="mt-1" />
          <span>{t("title")}</span>
        </h2>
      )}

      <h3 className="pt-0 xl:pt-4">{t("startingPrice")}</h3>
      <ul className="ps-5 pt-4 flex flex-col gap-2">
        {prices.map((price) => (
          <li
            key={price}
            onClick={() => handlePriceClick(price)}
            className={`hover:underline cursor-pointer transition-colors ${activePrice === price ? "text-primary font-bold underline" : ""
              }`}
          >
            {price}
          </li>
        ))}
      </ul>

      <h3 className="pt-4">{t("location")}</h3>
      <ul className="ps-5 pt-4 flex flex-col gap-2">
        {locations.map((loc) => (
          <li
            key={loc}
            onClick={() => handleLocationClick(loc)}
            className={`hover:underline cursor-pointer transition-colors ${activeLocation === loc ? "text-primary font-bold underline" : ""
              }`}
          >
            {loc}
          </li>
        ))}
      </ul>

      <h3 className="pt-4">{t("rating")}</h3>
      <ul className="ps-5 pt-4 flex flex-col gap-2">
        {ratings.map((stars) => (
          <li
            key={stars}
            onClick={() => handleRatingClick(stars)}
            className={`w-fit cursor-pointer flex items-center gap-2 ${activeRating === stars
                ? "border-b-2 border-primary font-bold"
                : "hover:border-b-2 border-black"
              }`}
          >
            <div className="flex items-center gap-0.5">
              {Array.from({ length: stars }).map((_, i) => (
                <Star2 key={i} className="text-[#FBBF24]" />
              ))}
            </div>
            <span className="text-muted-foreground font-normal">{t("andUp")}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
